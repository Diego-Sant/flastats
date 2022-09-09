package com.springdev.flastats.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springdev.flastats.entities.Stats;

public interface StatsRepository extends JpaRepository<Stats, Long> {

}
