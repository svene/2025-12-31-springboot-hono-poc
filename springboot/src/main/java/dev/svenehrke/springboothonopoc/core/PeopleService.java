package dev.svenehrke.springboothonopoc.core;

import net.datafaker.Faker;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;
import java.util.stream.Stream;

@Service
public class PeopleService {
    public List<Person> people() {
        Faker faker = new Faker(new Random(0));
        return Stream.generate(() -> {
                var name = faker.name();
                return new Person(name.firstName(), name.lastName());
			})
            .limit(20)
            .toList();

    }
}
