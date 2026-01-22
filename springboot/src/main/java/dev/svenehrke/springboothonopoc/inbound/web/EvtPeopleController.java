package dev.svenehrke.springboothonopoc.inbound.web;

import dev.svenehrke.springboothonopoc.core.PeopleService;
import dev.svenehrke.springboothonopoc.core.PersonEditModel;
import dev.svenehrke.springboothonopoc.core.PersonPageModel;
import dev.svenehrke.springboothonopoc.outbound.hono.HonoEventPersonApi;
import dev.svenehrke.springboothonopoc.outbound.hono.HonoOOBPersonApi;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * General Forwarding Pattern (Spring -> Hono):
 * - Step 1: Gather data from DB or services
 * - Step 2: Forward HTTP request to HONO
 */
@Controller
public class EvtPeopleController {

	public static final String EVT_PERSON_PAGE_URL = "/page/eventpeople";

	private final PeopleService peopleService;
	private final HonoEventPersonApi honoApi;

	public EvtPeopleController(
		PeopleService peopleService,
		HonoEventPersonApi honoApi
	) {
		this.peopleService = peopleService;
		this.honoApi = honoApi;
	}

	@GetMapping(EVT_PERSON_PAGE_URL)
	public ResponseEntity<String> peoplePage() {
		var vm = new PersonPageModel(peopleService.personTableModel());
		return honoApi.peoplePage(vm);
	}


}
