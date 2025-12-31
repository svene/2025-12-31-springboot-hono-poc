package dev.svenehrke.springboothonopoc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UIController {

	@GetMapping("/")
	@ResponseBody
	public String home() {
		return """
            <!DOCTYPE html>
            <html>
              <head>
                <title>Spring HTML Response</title>
              </head>
              <body>
                <h1>Hello from Spring MVC!</h1>
                <p>This HTML is returned directly from the controller.</p>
              </body>
            </html>
            """;
	}
}
