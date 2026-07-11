package dev.svenehrke.springboothonopoc.core;


public record PersonEditModel(
    int id,
    String firstName,
    String lastName,
    String streetName
) {}
