package com.cs.demo.repo;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cs.demo.model.Passbook;
import com.cs.demo.pdto.TransactioncountDTO;
import com.cs.demo.pdto.UserPassbookDTO;

public interface Passbookrepo extends JpaRepository<Passbook, Integer> {
	
	@Query(value="Select sum(rdamt) from passbook ", nativeQuery = true )
	long gettotalamt();
	
	@Query(value="select * from passbook where rid=:rid", nativeQuery = true)
	List<Passbook> getallbyrid(@Param ("rid") int rid);
	
	@Query(value="select name,acno,passbook.rddate,passbook.rdamt from rduser inner join passbook \r\n"
			+ "on rduser.rid=passbook.rid", nativeQuery = true)
	List<Object[]> getUserPassbookDetailsUnstru();
	
	@Query(value="select name,acno,passbook.rddate,passbook.rdamt from rduser inner join passbook "
			+ "on rduser.rid=passbook.rid", nativeQuery = true)
	List<UserPassbookDTO> getUserPassbookDetails();
	
	@Query(value="select name, acno, passbook.rdamt, passbook.rddate from rduser inner join passbook"
			+ " on rduser.rid=passbook.rid where passbook.rid= :rid", nativeQuery = true)
	List<UserPassbookDTO> getUserDetailsById(@Param ("rid") int rid);
	
	@Query(value="Select sum(rdamt) from passbook where rid= :rid", nativeQuery = true )
	long getTotalAmtById(@Param ("rid") int rid);
	
	@Query(value="SELECT passbook.rid, rduser.status, COUNT(*) AS total_count FROM rduser join passbook on rduser.rid=passbook.rid WHERE passbook.rid = :rid GROUP BY passbook.rid, rduser.status HAVING COUNT(*) >= 1;", nativeQuery = true)
	List<TransactioncountDTO> getTransactionCount(@Param ("rid") int rid);

}
