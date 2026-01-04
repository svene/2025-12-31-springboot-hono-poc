package dev.svenehrke.springboothonopoc.outbound.db;

import jakarta.annotation.PostConstruct;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.stereotype.Component;

@Component
public class DBInitializer {
	private final JdbcTemplate jdbcTemplate;
	private final DataSourceTransactionManager dataSourceTransactionManager;

	public DBInitializer(JdbcTemplate jdbcTemplate, DataSourceTransactionManager dataSourceTransactionManager) {
		this.jdbcTemplate = jdbcTemplate;
		this.dataSourceTransactionManager = dataSourceTransactionManager;
	}

	@PostConstruct
	public void init() {
		System.out.println("DBInitializer.init");
		Integer count = jdbcTemplate.queryForObject(
			"SELECT COUNT(*) FROM Person",
			Integer.class
		);

		if (count != null && count > 0) {
			return;
		}

		jdbcTemplate.update(
			"INSERT INTO Person (firstname, lastname, streetname) VALUES (?, ?, ?)",
			"John", "Doe", "Main Street"
		);
		Integer count2 = jdbcTemplate.queryForObject(
			"SELECT COUNT(*) FROM Person",
			Integer.class
		);
		System.out.println("count2 = " + count2);
	}
}
