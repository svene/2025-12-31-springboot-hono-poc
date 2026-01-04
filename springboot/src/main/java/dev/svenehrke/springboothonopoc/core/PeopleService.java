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
                var address = faker.address();
                System.out.println("---");
                System.out.println(address.streetName());
                System.out.println(address.streetAddressNumber());
                System.out.println(address.zipCode());
                System.out.println(address.city());
                return new Person(name.firstName(), name.lastName(), address.streetName());
			})
            .limit(20)
            .toList();

    }
}
