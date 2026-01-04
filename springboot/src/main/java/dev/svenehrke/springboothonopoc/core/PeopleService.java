package dev.svenehrke.springboothonopoc.core;

import org.springframework.stereotype.Service;

@Service
public class PeopleService {
    private final PeopleRepository peopleRepository;

	public PeopleService(PeopleRepository peopleRepository) {
		this.peopleRepository = peopleRepository;
	}

	public PersonTableModel people() {
        return peopleRepository.people();
    }

}
