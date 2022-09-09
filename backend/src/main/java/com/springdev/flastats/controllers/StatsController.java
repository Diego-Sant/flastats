package com.springdev.flastats.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springdev.flastats.entities.Stats;
import com.springdev.flastats.services.StatsService;

@RestController
@RequestMapping(value = "/stats")
public class StatsController {
	
	@Autowired
	private StatsService service;
	
	@GetMapping
	public List<Stats> findStats() {
		return service.findStats();
	}
}
