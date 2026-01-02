package dev.svenehrke.springboothonopoc.web;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestClient;
import org.springframework.web.servlet.view.RedirectView;
import org.springframework.web.util.UriBuilder;

import java.net.URI;

/**
 * General Forwarding Pattern (Spring -> Hono):
 * - Step 1: Gather data from DB or services
 * - Step 2: Forward HTTP request to HONO
 */
@Controller
public class UIController {

	private static final String HONO_URL = "http://localhost:3000/";
	private final RestClient restClient;
	public static final String START_URL = "/people";

	public UIController() {
		restClient = RestClient.builder()
			.defaultHeader(HttpHeaders.ACCEPT, MediaType.TEXT_HTML_VALUE)
			.baseUrl(URI.create(HONO_URL))
			.build();
	}

	@GetMapping("/")
	public RedirectView index() {
		return new RedirectView(START_URL);
	}

	@GetMapping(START_URL)
	@ResponseBody
	public String people() {
		return restClient.get().uri(START_URL).retrieve().body(String.class);
	}

	@GetMapping("/greeting")
	@ResponseBody
	public String greeting(@RequestParam String greetee) {
		return restClient
			.get()
			.uri(it -> defaultUrlBuilder(it).path("/greeting").queryParam("greetee", greetee).build())
			.retrieve()
			.body(String.class);
	}

	private UriBuilder defaultUrlBuilder(UriBuilder uriBuilder) {
		return uriBuilder
			.scheme("http")
			.host("localhost")
			.port("3000");
	}

}
