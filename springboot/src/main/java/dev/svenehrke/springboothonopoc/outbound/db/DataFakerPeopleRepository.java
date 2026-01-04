package dev.svenehrke.springboothonopoc.outbound.db;

import dev.svenehrke.springboothonopoc.core.PeopleRepository;
import dev.svenehrke.springboothonopoc.core.PersonTableModel;
import dev.svenehrke.springboothonopoc.core.PersonTableRowModel;
import net.datafaker.Faker;
import org.springframework.stereotype.Service;

import java.util.Random;
import java.util.stream.Stream;

@Service
public class DataFakerPeopleRepository implements PeopleRepository {

	@Override
	public PersonTableModel people() {
		Faker faker = new Faker(new Random(0));
		var name = faker.name();
		var address = faker.address();
		var list = Stream.generate(() -> new PersonTableRowModel(
				name.firstName(), name.lastName(), address.streetName()
			))
			.limit(20)
			.toList();
		return new PersonTableModel(list);
	}

}
