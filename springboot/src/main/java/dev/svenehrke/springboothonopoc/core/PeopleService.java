package dev.svenehrke.springboothonopoc.core;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PeopleService {
    private final PeopleRepository peopleRepository;

	public PeopleService(PeopleRepository peopleRepository) {
		this.peopleRepository = peopleRepository;
	}

	public List<PersonTableRowVM> people() {
        return peopleRepository.people().stream()
            .map(it -> new PersonTableRowVM(it.name().firstName(), it.name().lastName(), it.address().streetName()))
            .toList();

    }

}
