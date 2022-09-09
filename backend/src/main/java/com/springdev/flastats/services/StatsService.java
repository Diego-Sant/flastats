package com.springdev.flastats.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springdev.flastats.entities.Stats;
import com.springdev.flastats.repositories.StatsRepository;

@Service
public class StatsService {
	
	@Autowired
	private StatsRepository repository;
	
	public List<Stats> findStats() {
		return repository.findAll();
	}
}
