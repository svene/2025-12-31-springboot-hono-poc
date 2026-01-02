package dev.svenehrke.springboothonopoc.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.view.RedirectView;

import static dev.svenehrke.springboothonopoc.web.PeopleController.PEOPLE_URL;

@Controller
public class HomeController {

	@GetMapping("/")
	public RedirectView index() {
		return new RedirectView(PEOPLE_URL);
	}

}
