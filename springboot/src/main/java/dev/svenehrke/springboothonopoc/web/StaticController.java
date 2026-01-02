package dev.svenehrke.springboothonopoc.web;

import dev.svenehrke.springboothonopoc.outbound.hono.HonoHelper;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StaticController {

	private final HonoHelper honoHelper;

	public StaticController(HonoHelper honoHelper) {
		this.honoHelper = honoHelper;
	}

	@GetMapping("/static/**")
	public ResponseEntity<String> handleStatic(HttpServletRequest request) {
		String fullPath = request.getRequestURI();
		return honoHelper.staticResource(fullPath);
	}
}
