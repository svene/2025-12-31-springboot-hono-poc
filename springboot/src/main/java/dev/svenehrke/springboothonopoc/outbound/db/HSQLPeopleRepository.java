package dev.svenehrke.springboothonopoc.outbound.db;

import dev.svenehrke.springboothonopoc.core.PeopleRepository;
import dev.svenehrke.springboothonopoc.core.PersonTableModel;
import dev.svenehrke.springboothonopoc.core.PersonTableRowModel;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HSQLPeopleRepository implements PeopleRepository {

	private final JdbcClient jdbcClient;
	private final JdbcTemplate jdbcTemplate;

	public HSQLPeopleRepository(JdbcClient jdbcClient, JdbcTemplate jdbcTemplate) {
		this.jdbcClient = jdbcClient;
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public PersonTableModel people() {
		var sql = "select firstname, lastname, streetname from Person";
		List<PersonTableRowModel> result = jdbcClient.sql(sql).query(
			(rs, rowNum) -> new PersonTableRowModel(rs.getString("firstname"), rs.getString("lastname"), rs.getString("streetname"))
		).list();
		return new PersonTableModel(result);
	}

	@Override
	public int total() {
		Integer count = jdbcTemplate.queryForObject(
			"SELECT COUNT(*) FROM Person",
			Integer.class
		);
		return count == null ? 0 : count;
	}

}
