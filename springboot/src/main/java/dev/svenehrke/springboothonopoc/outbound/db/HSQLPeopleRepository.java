package dev.svenehrke.springboothonopoc.outbound.db;

import dev.svenehrke.springboothonopoc.core.PeopleRepository;
import dev.svenehrke.springboothonopoc.core.PersonTableModel;
import dev.svenehrke.springboothonopoc.core.PersonTableRowModel;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HSQLPeopleRepository implements PeopleRepository {

	private final JdbcClient jdbcClient;

	public HSQLPeopleRepository(JdbcClient jdbcClient) {
		this.jdbcClient = jdbcClient;
	}

	@Override
	public PersonTableModel people() {
		var sql = "select firstname, lastname, streetname from Person";
		List<PersonTableRowModel> result = jdbcClient.sql(sql).query(
			(rs, rowNum) -> new PersonTableRowModel(rs.getString("firstname"), rs.getString("lastname"), rs.getString("streetname"))
		).list();
		return new PersonTableModel(result);
	}

}
