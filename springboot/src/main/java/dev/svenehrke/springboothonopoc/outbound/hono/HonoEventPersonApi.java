package dev.svenehrke.springboothonopoc.outbound.hono;

import dev.svenehrke.springboothonopoc.core.PersonDetailModel;
import dev.svenehrke.springboothonopoc.core.PersonPageModel;
import dev.svenehrke.springboothonopoc.core.PersonTableModel;
import dev.svenehrke.springboothonopoc.core.PersonTableRowModel;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class HonoEventPersonApi {
	private static final String EVT_PERSON_PAGE_URL = "/page/eventpeople";

	private final HonoAppClient honoAppClient;

	public HonoEventPersonApi(HonoAppClient honoAppClient) {
		this.honoAppClient = honoAppClient;
	}

	public ResponseEntity<String> peoplePage(PersonPageModel vm) {
		return honoAppClient.post(EVT_PERSON_PAGE_URL, vm);
	}
}
