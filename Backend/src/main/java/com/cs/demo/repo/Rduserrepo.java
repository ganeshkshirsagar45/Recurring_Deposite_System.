package com.cs.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cs.demo.model.RDuser;

public interface Rduserrepo extends JpaRepository<RDuser, Integer> {
	
	@Query(value="select * from rduser where loginid= :loginid and user_password= :user_password", nativeQuery = true)
	RDuser login(@Param ("loginid") String loginid, @Param ("user_password") String user_password);
	
	@Query(value="select count(*) from rduser", nativeQuery = true)
	long getTotalRdusers();

}
