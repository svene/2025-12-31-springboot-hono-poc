package dev.svenehrke.springboothonopoc.web;

import dev.svenehrke.springboothonopoc.core.Person;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.util.UriBuilder;

import java.net.URI;
import java.util.List;

@Service
public class HonoApp {
	public static final String START_URL = "/people";
	private static final String HONO_URL = "http://localhost:3000/";
	private final RestClient restClient;

	public HonoApp() {
		restClient = RestClient.builder()
			.defaultHeader(HttpHeaders.ACCEPT, MediaType.TEXT_HTML_VALUE)
			.baseUrl(URI.create(HONO_URL))
			.build();
	}

	public String people(List<Person> people) {
		return restClient.post().uri(START_URL)
			.contentType(MediaType.APPLICATION_JSON)
			.body(people)
			.retrieve().body(String.class);
	}

	public String greeting(String greetee) {
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
