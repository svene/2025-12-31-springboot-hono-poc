package dev.svenehrke.springboothonopoc.core;

import java.util.List;

public interface PeopleRepository {
    PersonTableModel people();
    PersonTableModel peopleForSearch(String search);
    int total();
    PersonTableRowModel personTableRowModel(int id);
    PersonDetailModel personTableDetailModel(int id);
    int deleteByIds(List<Integer> ids);
    int updatePerson(int id, PersonEditModel personEditModel);
}
