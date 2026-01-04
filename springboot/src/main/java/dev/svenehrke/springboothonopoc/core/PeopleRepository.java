package dev.svenehrke.springboothonopoc.core;

import net.datafaker.Faker;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;
import java.util.stream.Stream;

@Service
public class PeopleRepository {

    public List<DBResult> people() {
        Faker faker = new Faker(new Random(0));
        return Stream.generate(() -> new DBResult(faker.name(), faker.address()))
            .limit(20)
            .toList();
    }

}
