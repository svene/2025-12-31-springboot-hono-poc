import { Project, Type } from "ts-morph";
import * as fs from "fs";

const project = new Project();
const source = project.addSourceFileAtPath("src/ui/model.ts");

const javaPackage = "dev.svenehrke.springboothonopoc.core"
const outPath = `build/generated-sources/java-dtos/src/main/java/${javaPackage.split(".").join("/")}`;

fs.mkdirSync(outPath, { recursive: true });

function map(type: Type): string {
	if (type.isString()) return "String";
	if (type.isNumber()) return "int";
	if (type.isBoolean()) return "boolean";

	if (type.isArray()) {
		return `List<${map(type.getArrayElementTypeOrThrow())}>`;
	}

	const aliasSymbol = type.getAliasSymbol();
	if (aliasSymbol) {
		return aliasSymbol.getName();
	}
	const symbol = type.getSymbol();
	if (symbol) return symbol.getName();

	throw new Error(`Unsupported DTO type: ${type.getText()}`);
}

for (const alias of source.getTypeAliases()) {
	const name = alias.getName();
	const fields = alias.getType().getProperties().map(p => {
		const t = p.getValueDeclarationOrThrow().getType();
		return `    ${map(t)} ${p.getName()}`;
	});

	const needsList = fields.some(f => f.includes("List<"));

	const java = `
package ${javaPackage};
${needsList ? "import java.util.List;\n" : "\n"}
public record ${name}(
${fields.join(",\n")}
) {}
`.trim();

	fs.writeFileSync(`${outPath}/${name}.java`, java + "\n");
}
