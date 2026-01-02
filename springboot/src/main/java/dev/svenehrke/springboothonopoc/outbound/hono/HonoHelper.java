package dev.svenehrke.springboothonopoc.outbound.hono;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClient;
import org.springframework.web.util.UriBuilder;

import java.net.URI;
import java.util.Map;

@Service
public class HonoHelper {
	private static final String HONO_URL = "http://localhost:3000/";
	final RestClient restClient;

	public HonoHelper() {
		restClient = RestClient.builder()
			.defaultHeader(HttpHeaders.ACCEPT, MediaType.TEXT_HTML_VALUE)
			.baseUrl(URI.create(HONO_URL))
			.build();
	}

	ResponseEntity<String> staticResource(String url) {
		return restClient
			.get()
			.uri(it -> defaultUrlBuilder(it).path(url).build())
			.retrieve()
			.toEntity(String.class)
			;
	}

	ResponseEntity<String> get(String path, Map<String, String> queryParams) {
		return restClient
			.get()
			.uri(it -> defaultUrlBuilder(it)
				.path(path)
				.queryParams(MultiValueMap.fromSingleValue(queryParams))
				.build()
			)
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
