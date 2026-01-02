package dev.svenehrke.springboothonopoc.web;

import dev.svenehrke.springboothonopoc.outbound.hono.HonoAppClient;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StaticController {

	private final HonoAppClient honoAppClient;

	public StaticController(HonoAppClient honoAppClient) {
		this.honoAppClient = honoAppClient;
	}

	@GetMapping("/static/**")
	public ResponseEntity<String> handleStatic(HttpServletRequest request) {
		String fullPath = request.getRequestURI();
		return honoAppClient.staticResource(fullPath);
	}
}
