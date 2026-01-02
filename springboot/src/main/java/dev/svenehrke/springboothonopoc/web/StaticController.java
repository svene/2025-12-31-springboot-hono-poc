package dev.svenehrke.springboothonopoc.web;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StaticController {

	private final HonoApp honoApp;

	public StaticController(HonoApp honoApp) {
		this.honoApp = honoApp;
	}

	@GetMapping("/static/**")
	public String handleStatic(HttpServletRequest request) {
		String fullPath = request.getRequestURI();
		return honoApp.staticResource(fullPath);
	}
}
