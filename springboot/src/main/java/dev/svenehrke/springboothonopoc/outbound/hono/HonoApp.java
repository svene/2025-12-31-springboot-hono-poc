package dev.svenehrke.springboothonopoc.outbound.hono;

import dev.svenehrke.springboothonopoc.core.Person;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.util.UriBuilder;

import java.net.URI;
import java.util.List;

@Service
public class HonoApp {
	public static final String START_URL = "/people";
	private final HonoHelper honoHelper;

	public HonoApp(HonoHelper honoHelper) {
		this.honoHelper = honoHelper;
	}

	public record PeopleVM(List<Person> people){};
	public String people(PeopleVM vm) {
		return honoHelper.restClient.post().uri(START_URL)
			.contentType(MediaType.APPLICATION_JSON)
			.body(vm)
			.retrieve().body(String.class);
	}

	public String greeting(String greetee) {
		return honoHelper.restClient
			.get()
			.uri(it -> honoHelper.defaultUrlBuilder(it).path("/greeting").queryParam("greetee", greetee).build())
			.retrieve()
			.body(String.class);
	}

	public ResponseEntity<String> staticResource(String url) {
		return honoHelper.staticResource(url);
	}

}
