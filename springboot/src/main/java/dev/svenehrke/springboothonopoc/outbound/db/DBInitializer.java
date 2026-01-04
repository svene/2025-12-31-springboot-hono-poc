package dev.svenehrke.springboothonopoc.outbound.db;

import jakarta.annotation.PostConstruct;
import net.datafaker.Faker;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.Random;

@Component
public class DBInitializer {
	private final JdbcTemplate jdbcTemplate;

	public DBInitializer(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@PostConstruct
	@Transactional
	public void init() {
		System.out.println("DBInitializer.init");
		Integer count = jdbcTemplate.queryForObject(
			"SELECT COUNT(*) FROM Person",
			Integer.class
		);

		if (count != null && count > 0) {
			return;
		}

		Faker faker = new Faker(new Random(0));
		var name = faker.name();
		var address = faker.address();
		for (int i = 0; i < 20; i++) {
			jdbcTemplate.update(
				"INSERT INTO Person (firstname, lastname, streetname) VALUES (?, ?, ?)",
				name.firstName(), name.lastName(), address.streetName()
			);
		}
	}
}
