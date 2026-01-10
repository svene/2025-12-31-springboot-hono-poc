package dev.svenehrke.springboothonopoc.inbound.web;

import dev.svenehrke.springboothonopoc.core.PersonPageModel;
import dev.svenehrke.springboothonopoc.core.PeopleService;
import dev.svenehrke.springboothonopoc.outbound.hono.HonoAppClient;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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

	@GetMapping("/person/{id}/row")
	public ResponseEntity<String> row(@PathVariable int id) {
		var vm = peopleService.personTableRowModel(id);
		return honoAppClient.post("/person/row", vm);
	}

/*
	@DeleteMapping("/person/delete")
	public ResponseEntity<String> deleteRows(@RequestParam List<Integer> selection) {
		peopleService.deleteByIds(selection);
		return people();
	}
*/

/*
	@DeleteMapping("/person/delete")
	public RedirectView deleteRows2(@RequestParam List<Integer> selection, HttpServletRequest request, HttpServletResponse response) {
		peopleService.deleteByIds(selection);
		// make the browser redirect with a GET instead of a PUT/POST/DELETE:
		request.setAttribute(View.RESPONSE_STATUS_ATTRIBUTE, HttpStatus.SEE_OTHER); // 303 (See Other) instead of 302 (Found)
		return new RedirectView(PEOPLE_URL);
	}
*/
	@DeleteMapping("/person/delete")
	public ResponseEntity<String> deleteRows3(@RequestParam List<Integer> selection, HttpServletResponse response) {
		peopleService.deleteByIds(selection);
		response.setHeader("HX-Redirect", PEOPLE_URL);
		return people();
	}

}
