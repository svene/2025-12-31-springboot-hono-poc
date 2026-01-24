package dev.svenehrke.springboothonopoc.outbound.hono;

import dev.svenehrke.springboothonopoc.core.PersonDetailModel;
import dev.svenehrke.springboothonopoc.core.PersonPageModel;
import dev.svenehrke.springboothonopoc.core.PersonTableModel;
import dev.svenehrke.springboothonopoc.core.PersonTableRowModel;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class HonoAppApi {
	private static final String PAGE_PEOPLE_URL = "/page/people";
	private static final String PERSON_TABLE_URL = "/persontable";
	private static final String PERSON_EDIT_URL = "/person/edit";
	private static final String PERSON_EDIT_BACK_URL = "/person/editback";
	private static final String PERSON_DETAILS_URL = "/person/details";
	private static final String PERSON_ROW_URL = "/person/row";
	private static final String PERSON_DETAILS_BACK_URL = "/person/detailsback";

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
	public ResponseEntity<String> personEdit(PersonTableRowModel vm) {
		return honoAppClient.post(PERSON_EDIT_URL, vm);
	}
	public ResponseEntity<String> personEditBack(PersonDetailModel vm) {
		return honoAppClient.post(PERSON_EDIT_BACK_URL, vm);
	}
	public ResponseEntity<String> personDetails(PersonDetailModel vm) {
		return honoAppClient.post(PERSON_DETAILS_URL, vm);
	}
	public ResponseEntity<String> personRow(PersonTableRowModel vm) {
		return honoAppClient.post(PERSON_ROW_URL, vm);
	}
	public ResponseEntity<String> personDetailsBack(PersonTableRowModel vm) {
		return honoAppClient.post(PERSON_DETAILS_BACK_URL, vm);
	}
}
