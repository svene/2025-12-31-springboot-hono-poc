package dev.svenehrke.springboothonopoc.web;

import dev.svenehrke.springboothonopoc.outbound.hono.HonoAppClient;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

/**
 * General Forwarding Pattern (Spring -> Hono):
 * - Step 1: Gather data from DB or services
 * - Step 2: Forward HTTP request to HONO
 */
@Controller
public class GreetingController {

	private final HonoAppClient honoAppClient;

	public GreetingController(HonoAppClient honoAppClient) {
		this.honoAppClient = honoAppClient;
	}

	@GetMapping("/greeting")
	public ResponseEntity<String> greeting(@RequestParam String greetee) {
		return honoAppClient.get("/greeting", Map.of("greetee", greetee));
	}


}
