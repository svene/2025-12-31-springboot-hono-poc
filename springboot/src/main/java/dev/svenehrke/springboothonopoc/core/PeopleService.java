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

	public PersonTableModel peopleForSearch(String search) {
        return peopleRepository.peopleForSearch(search);
    }

	public int total() {
        return peopleRepository.total();
    }

	public PersonTableRowModel personTableRowModel(int id) {
		return peopleRepository.personTableRowModel(id);
	}

	public PersonDetailModel personTableDetailModel(int id) {
		return peopleRepository.personTableDetailModel(id);
	}

	@Transactional
	public int deleteByIds(List<Integer> ids) {
		return peopleRepository.deleteByIds(ids);
	}

	@Transactional
	public int updatePerson(int id, PersonEditModel personEditModel) {
		return peopleRepository.updatePerson(id, personEditModel);
	}

}
