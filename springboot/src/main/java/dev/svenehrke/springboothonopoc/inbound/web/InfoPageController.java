package dev.svenehrke.springboothonopoc.inbound.web;

import dev.svenehrke.springboothonopoc.outbound.hono.HonoAppClient;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Collections;

/**
 * General Forwarding Pattern (Spring -> Hono):
 * - Step 1: Gather data from DB or services
 * - Step 2: Forward HTTP request to HONO
 */
@Controller
public class InfoPageController {

	public static final String INFO_PAGE_URL = "/info";

	private final HonoAppClient honoAppClient;

	public InfoPageController(
		HonoAppClient honoAppClient
	) {
		this.honoAppClient = honoAppClient;
	}

	@GetMapping(INFO_PAGE_URL)
	public ResponseEntity<String> people() {
		return honoAppClient.get(INFO_PAGE_URL, Collections.emptyMap());
	}

}
