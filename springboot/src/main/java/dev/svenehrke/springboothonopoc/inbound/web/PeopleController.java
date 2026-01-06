package dev.svenehrke.springboothonopoc.inbound.web;

import dev.svenehrke.springboothonopoc.core.PersonPageModel;
import dev.svenehrke.springboothonopoc.core.PeopleService;
import dev.svenehrke.springboothonopoc.outbound.hono.HonoAppClient;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Collections;

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
		var vm = new PersonPageModel(
			peopleService.personTableModel(),
			peopleService.total()
		);
		return honoAppClient.post(PEOPLE_URL, vm);
	}

	@GetMapping("/person/{id}/edit")
	public ResponseEntity<String> edit(@PathVariable int id) {
		var vm = peopleService.personTableRowModel(id);
		return honoAppClient.post("/person/edit", vm);
	}

	@GetMapping("/person/{id}/details")
	public ResponseEntity<String> details(@PathVariable int id) {
		var vm = peopleService.personTableRowModel(id);
		return honoAppClient.post("/person/details", vm);
	}

}
