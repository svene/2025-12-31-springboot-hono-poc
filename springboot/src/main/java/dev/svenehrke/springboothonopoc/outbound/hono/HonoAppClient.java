package dev.svenehrke.springboothonopoc.outbound.hono;

import dev.svenehrke.springboothonopoc.core.Person;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;

import java.util.List;
import java.util.Map;

@Service
public class HonoAppClient {
	public static final String START_URL = "/people";
	private final HonoHelper honoHelper;

	public HonoAppClient(HonoHelper honoHelper) {
		this.honoHelper = honoHelper;
	}

	public record PeopleVM(List<Person> people){};
	public String people(PeopleVM vm) {
		return honoHelper.restClient.post().uri(START_URL)
			.contentType(MediaType.APPLICATION_JSON)
			.body(vm)
			.retrieve().body(String.class);
	}

	public ResponseEntity<String> greeting(String greetee) {
		return honoHelper.get("/greeting", Map.of("greetee", greetee));
	}

	public ResponseEntity<String> staticResource(String url) {
		return honoHelper.staticResource(url);
	}

}
