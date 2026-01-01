package dev.svenehrke.springboothonopoc;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestClient;

import java.net.URI;
import java.util.Map;

@Controller
public class UIController {

	private final RestClient restClient;

	public UIController() {
		this.restClient = RestClient.builder().build();
	}

	@GetMapping("/")
	@ResponseBody
	public String index() {
		// Step 1: Gather data from DB or services
		// ...
		// Step 2: Prepare HTTP POST request to HONO
		String htmlResponse = restClient
			.get()
			.uri("http://localhost:3000/")
			.header(HttpHeaders.ACCEPT, MediaType.TEXT_HTML_VALUE)
			.retrieve()
			.body(String.class);

		return htmlResponse;
	}
}
