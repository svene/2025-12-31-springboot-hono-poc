package dev.svenehrke.springboothonopoc.core;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PeopleService {
    public List<Person> people() {
        return List.of(
            new Person("John", "Lennon"),
            new Person("Paul", "McCartney"),
            new Person("George", "Harrison"),
            new Person("Ringo", "Starr")
        );
    }
}
