package dev.svenehrke.springboothonopoc.inbound.web;

import dev.svenehrke.springboothonopoc.core.PersonEditModel;
import dev.svenehrke.springboothonopoc.core.PersonPageModel;
import dev.svenehrke.springboothonopoc.core.PeopleService;
import dev.svenehrke.springboothonopoc.outbound.hono.HonoAppClient;
import dev.svenehrke.springboothonopoc.outbound.hono.HonoAppApi;
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

	public static final String PAGE_PEOPLE_URL = "/page/people";
	public static final String PERSON_TABLE_URL = "/persontable";

	private final PeopleService peopleService;
	private final HonoAppClient honoAppClient;
	private final HonoAppApi honoAppApi;

	public PeopleController(
		PeopleService peopleService,
		HonoAppClient honoAppClient,
		HonoAppApi honoAppApi
	) {
		this.peopleService = peopleService;
		this.honoAppClient = honoAppClient;
		this.honoAppApi = honoAppApi;
	}

	@GetMapping(PAGE_PEOPLE_URL)
	public ResponseEntity<String> peoplePage() {
		var vm = new PersonPageModel(peopleService.personTableModel());
		return honoAppApi.peoplePage(vm);
	}

	@GetMapping(PERSON_TABLE_URL)
	public ResponseEntity<String> peopleUrl(@RequestParam() String search) {
		return honoAppApi.peopleUrl(peopleService.peopleForSearch(search));
	}

	@GetMapping("/person/{id}/edit")
	public ResponseEntity<String> edit(@PathVariable int id) {
		var vm = peopleService.personTableRowModel(id);
		return honoAppClient.post("/person/edit", vm);
	}
	@GetMapping("/person/{id}/editback")
	public ResponseEntity<String> editback(@PathVariable int id) {
		var vm = peopleService.personTableDetailModel(id);
		return honoAppClient.post("/person/editback", vm);
	}


	@GetMapping("/person/{id}/details")
	public ResponseEntity<String> details(@PathVariable int id) {
		var vm = peopleService.personTableDetailModel(id);
		return honoAppClient.post("/person/details", vm);
	}

	@GetMapping("/person/{id}/row")
	public ResponseEntity<String> row(@PathVariable int id) {
		var vm = peopleService.personTableRowModel(id);
		return honoAppClient.post("/person/row", vm);
	}

	@GetMapping("/person/{id}/detailsback")
	public ResponseEntity<String> detailsback(@PathVariable int id) {
		var vm = peopleService.personTableRowModel(id);
		return honoAppClient.post("/person/detailsback", vm);
	}

	@DeleteMapping("/person/delete")
	public ResponseEntity<String> deleteRows(@RequestParam List<Integer> selection, HttpServletResponse response) {
		peopleService.deleteByIds(selection);
		response.setHeader("HX-Redirect", PAGE_PEOPLE_URL);
		return peoplePage();
	}

	@PutMapping("/person/{id}")
	public ResponseEntity<String> updatePerson(@PathVariable int id, PersonEditModel personEditModel, HttpServletResponse response) {
		System.out.println("personEditModel = " + personEditModel.toString());
		response.setHeader("HX-Redirect", PAGE_PEOPLE_URL);
		peopleService.updatePerson(id, personEditModel);
		return peoplePage();
	}

}
