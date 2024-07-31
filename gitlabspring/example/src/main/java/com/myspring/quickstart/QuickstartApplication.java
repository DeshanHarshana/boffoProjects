package com.myspring.quickstart;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
public class QuickstartApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuickstartApplication.class, args);
	}

}
