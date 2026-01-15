package dev.svenehrke.springboothonopoc.outbound.hono;

import dev.svenehrke.springboothonopoc.core.PersonPageModel;
import dev.svenehrke.springboothonopoc.core.PersonTableModel;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class HonoAppApi {
	private static final String PAGE_PEOPLE_URL = "/page/people";
	private static final String PERSON_TABLE_URL = "/persontable";

	private final HonoAppClient honoAppClient;

	public HonoAppApi(HonoAppClient honoAppClient) {
		this.honoAppClient = honoAppClient;
	}

	public ResponseEntity<String> peoplePage(PersonPageModel vm) {
		return honoAppClient.post(PAGE_PEOPLE_URL, vm);
	}
	public ResponseEntity<String> peopleUrl(PersonTableModel vm) {
		return honoAppClient.post(PERSON_TABLE_URL, vm);
	}
}
