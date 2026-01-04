package dev.svenehrke.springboothonopoc.core;

import org.jspecify.annotations.NonNull;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.function.Function;

@Service
public class PeopleService {
    private final PeopleRepository peopleRepository;

	public PeopleService(PeopleRepository peopleRepository) {
		this.peopleRepository = peopleRepository;
	}

	public List<PersonTableRowVM> people() {
        return peopleRepository.people().stream()
            .map(mapDBtoVM())
            .toList();

    }

	private static @NonNull Function<DBResult, PersonTableRowVM> mapDBtoVM() {
		return it -> new PersonTableRowVM(it.name().firstName(), it.name().lastName(), it.address().streetName());
	}

}
