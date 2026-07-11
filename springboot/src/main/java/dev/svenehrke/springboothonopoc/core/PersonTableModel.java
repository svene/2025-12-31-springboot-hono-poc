package dev.svenehrke.springboothonopoc.core;
import java.util.List;

public record PersonTableModel(
    List<PersonTableRowModel> people,
    int total
) {}
