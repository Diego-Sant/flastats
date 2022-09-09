package com.springdev.flastats.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.springdev.flastats.entities.Stats;
import com.springdev.flastats.repositories.StatsRepository;

@Service
public class StatsService {
	
	@Autowired
	private StatsRepository repository;
	
	public Page<Stats> findStats(String minDate, String maxDate, Pageable pageable) {
		
		LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
		
		LocalDate min = maxDate.equals("") ? today : LocalDate.parse(minDate);
		LocalDate max = maxDate.equals("") ? today.plusDays(365) : LocalDate.parse(maxDate);
		
		return repository.findStats(min, max, pageable);
	}
}
