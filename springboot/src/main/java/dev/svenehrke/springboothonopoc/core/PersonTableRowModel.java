package dev.svenehrke.springboothonopoc.core;


public record PersonTableRowModel(
    int id,
    String firstName,
    String lastName,
    String streetName
) {}
