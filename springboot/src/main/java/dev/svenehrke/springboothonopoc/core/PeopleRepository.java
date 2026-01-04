package dev.svenehrke.springboothonopoc.core;

public interface PeopleRepository {
    PersonTableModel people();
    int total();
}
