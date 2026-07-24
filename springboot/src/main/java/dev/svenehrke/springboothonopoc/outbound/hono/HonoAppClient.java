package dev.svenehrke.springboothonopoc.outbound.hono;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.util.UriBuilder;

import java.net.URI;

@Service
public class HonoAppClient {
	private static final String HONO_URL = "http://localhost:3000/";
	final RestClient restClient;

	public HonoAppClient() {
		restClient = RestClient.builder()
			.defaultHeader(HttpHeaders.ACCEPT, MediaType.TEXT_HTML_VALUE)
			.baseUrl(URI.create(HONO_URL))
			.build();
	}

	public ResponseEntity<String> staticResource(String url) {
		return restClient
			.get()
			.uri(it -> defaultUrlBuilder(it).path(url).build())
			.retrieve()
			.toEntity(String.class)
			;
	}

	public <T> ResponseEntity<String> uiroute(String name, T vm) {
		return restClient
			.post()
			.uri(uriBuilder -> uriBuilder
				.path("/router")
				.queryParam("name", name)
				.build())
			.contentType(MediaType.APPLICATION_JSON)
			.body(vm)
			.retrieve()
			.toEntity(String.class)
			;
	}

	private UriBuilder defaultUrlBuilder(UriBuilder uriBuilder) {
		return uriBuilder
			.scheme("http")
			.host("localhost")
			.port("3000");
	}
}
