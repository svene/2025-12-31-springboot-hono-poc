package dev.svenehrke.springboothonopoc.web;

import dev.svenehrke.springboothonopoc.core.PeopleService;
import dev.svenehrke.springboothonopoc.outbound.hono.HonoAppClient;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.view.RedirectView;

import static dev.svenehrke.springboothonopoc.outbound.hono.HonoAppClient.START_URL;

/**
 * General Forwarding Pattern (Spring -> Hono):
 * - Step 1: Gather data from DB or services
 * - Step 2: Forward HTTP request to HONO
 */
@Controller
public class UIController {

	private final HonoAppClient honoAppClient;
	private final PeopleService peopleService;

	public UIController(HonoAppClient honoAppClient, PeopleService peopleService) {
		this.honoAppClient = honoAppClient;
		this.peopleService = peopleService;
	}

	@GetMapping("/")
	public RedirectView index() {
		return new RedirectView(START_URL);
	}

	@GetMapping(START_URL)
	@ResponseBody
	public String people() {
		var people = peopleService.people();
		return honoAppClient.people(new HonoAppClient.PeopleVM(people));
	}

	@GetMapping("/greeting")
	public ResponseEntity<String> greeting(@RequestParam String greetee) {
		return honoAppClient.greeting(greetee);
	}


}
