package dev.svenehrke.springboothonopoc;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestClient;
import org.springframework.web.util.UriBuilder;

import java.net.URI;

@Controller
public class UIController {

	private static final String HONO_URL = "http://localhost:3000/";
	private final RestClient restClient;

	public UIController() {
		restClient = RestClient.builder()
			.defaultHeader(HttpHeaders.ACCEPT, MediaType.TEXT_HTML_VALUE)
			.baseUrl(URI.create(HONO_URL))
			.build();
	}

	@GetMapping("/")
	@ResponseBody
	public String index() {
		// Step 1: Gather data from DB or services:
		// ...
		// Step 2: Forward HTTP GET request to HONO:
		return forwardGetToHono();
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

	private String forwardGetToHono() {
		return restClient
			.get()
			.retrieve()
			.body(String.class);
	}
}
