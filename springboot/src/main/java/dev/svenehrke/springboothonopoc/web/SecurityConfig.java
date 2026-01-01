package dev.svenehrke.springboothonopoc.web;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.LogoutConfigurer;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http
			.authorizeHttpRequests(auth -> auth
				.anyRequest().authenticated()       // everything requires login
			)
			.formLogin(login -> login.defaultSuccessUrl("/", true))   // ALWAYS go to homepage after login
			.logout(LogoutConfigurer::permitAll);

		return http.build();
	}

	// demo user
	@Bean
	public UserDetailsService users() {
		return new InMemoryUserDetailsManager(
			User.withUsername("user")
				.password("{noop}x21") // {noop} means plain text
				.roles("USER")
				.build()
		);
	}
}
