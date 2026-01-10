package dev.svenehrke.springboothonopoc.core;

import java.util.List;

public interface PeopleRepository {
    PersonTableModel people();
    int total();
    PersonTableRowModel personTableRowModel(int id);
    int deleteByIds(List<Integer> ids);
}
