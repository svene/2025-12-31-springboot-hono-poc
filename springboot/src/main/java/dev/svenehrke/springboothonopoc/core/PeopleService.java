package dev.svenehrke.springboothonopoc.core;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class PeopleService {
    private final PeopleRepository peopleRepository;

	public PeopleService(PeopleRepository peopleRepository) {
		this.peopleRepository = peopleRepository;
	}

	public PersonTableModel personTableModel() {
        return peopleRepository.people();
    }

	public int total() {
        return peopleRepository.total();
    }

	public PersonTableRowModel personTableRowModel(int id) {
		return peopleRepository.personTableRowModel(id);
	}

	@Transactional
	public int deleteByIds(List<Integer> ids) {
		return peopleRepository.deleteByIds(ids);
	}

}
