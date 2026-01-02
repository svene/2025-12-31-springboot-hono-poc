package dev.svenehrke.springboothonopoc.web;

import dev.svenehrke.springboothonopoc.outbound.hono.HonoApp;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StaticController {

	private final HonoApp honoApp;

	public StaticController(HonoApp honoApp) {
		this.honoApp = honoApp;
	}

	@GetMapping("/static/**")
	public ResponseEntity<String> handleStatic(HttpServletRequest request) {
		String fullPath = request.getRequestURI();
		return honoApp.staticResource(fullPath);
	}
}
