package dev.svenehrke.springboothonopoc.web;

import dev.svenehrke.springboothonopoc.core.PeopleService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.view.RedirectView;

import static dev.svenehrke.springboothonopoc.web.HonoApp.START_URL;

/**
 * General Forwarding Pattern (Spring -> Hono):
 * - Step 1: Gather data from DB or services
 * - Step 2: Forward HTTP request to HONO
 */
@Controller
public class UIController {

	private final HonoApp honoApp;
	private final PeopleService peopleService;

	public UIController(HonoApp honoApp, PeopleService peopleService) {
		this.honoApp = honoApp;
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
		return honoApp.people(people);
	}

	@GetMapping("/greeting")
	@ResponseBody
	public String greeting(@RequestParam String greetee) {
		return honoApp.greeting(greetee);
	}


}
