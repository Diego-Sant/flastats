package com.springdev.flastats.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springdev.flastats.entities.Stats;
import com.springdev.flastats.services.StatsService;

@RestController
@RequestMapping(value = "/stats")
public class StatsController {
	
	@Autowired
	private StatsService service;
	
	@GetMapping
	public Page<Stats> findStats(
			@RequestParam(value="minDate", defaultValue = "") String minDate, 
			@RequestParam(value="maxDate", defaultValue = "") String maxDate, 
			Pageable pageable) {
		return service.findStats(minDate, maxDate, pageable);
	}
}
