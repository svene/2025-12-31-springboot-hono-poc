package dev.svenehrke.springboothonopoc.web;

import dev.svenehrke.springboothonopoc.core.PeoplePageVM;
import dev.svenehrke.springboothonopoc.core.PeopleService;
import dev.svenehrke.springboothonopoc.outbound.hono.HonoAppClient;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

/**
 * General Forwarding Pattern (Spring -> Hono):
 * - Step 1: Gather data from DB or services
 * - Step 2: Forward HTTP request to HONO
 */
@Controller
public class PeopleController {

	public static final String PEOPLE_URL = "/people";

	private final PeopleService peopleService;
	private final HonoAppClient honoAppClient;

	public PeopleController(
		PeopleService peopleService,
		HonoAppClient honoAppClient
	) {
		this.peopleService = peopleService;
		this.honoAppClient = honoAppClient;
	}

	@GetMapping(PEOPLE_URL)
	public ResponseEntity<String> people() {
		var people = peopleService.people();
		return honoAppClient.post(PEOPLE_URL, new PeoplePageVM(people));
	}


}
