package dev.svenehrke.springboothonopoc.web;

import dev.svenehrke.springboothonopoc.core.PeopleService;
import dev.svenehrke.springboothonopoc.core.Person;
import dev.svenehrke.springboothonopoc.outbound.hono.HonoHelper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.view.RedirectView;

import java.util.List;
import java.util.Map;

/**
 * General Forwarding Pattern (Spring -> Hono):
 * - Step 1: Gather data from DB or services
 * - Step 2: Forward HTTP request to HONO
 */
@Controller
public class UIController {

	public static final String PEOPLE_URL = "/people";

	private final PeopleService peopleService;
	private final HonoHelper honoHelper;

	public UIController(
		PeopleService peopleService,
		HonoHelper honoHelper
	) {
		this.peopleService = peopleService;
		this.honoHelper = honoHelper;
	}

	@GetMapping("/")
	public RedirectView index() {
		return new RedirectView(PEOPLE_URL);
	}

	public record PeopleVM(List<Person> people){};

	@GetMapping(PEOPLE_URL)
	public ResponseEntity<String> people() {
		var people = peopleService.people();
		return honoHelper.post(PEOPLE_URL, new PeopleVM(people));
	}

	@GetMapping("/greeting")
	public ResponseEntity<String> greeting(@RequestParam String greetee) {
		return honoHelper.get("/greeting", Map.of("greetee", greetee));
	}


}
