package com.springdev.flastats.repositories;

import java.time.LocalDate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.springdev.flastats.entities.Stats;

public interface StatsRepository extends JpaRepository<Stats, Long> {
	@Query("SELECT obj FROM Stats obj WHERE obj.date BETWEEN :min AND :max ORDER BY obj.salary DESC")
	Page<Stats> findStats(LocalDate min, LocalDate max, Pageable pageable);
}
