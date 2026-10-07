package com.cs.demo.cntrl;

import java.util.HashMap;

import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cs.demo.model.Passbook;
import com.cs.demo.pdto.TransactioncountDTO;
import com.cs.demo.pdto.UserPassbookDTO;
import com.cs.demo.repo.Passbookrepo;


@RestController
public class Passbookcntrl {
	
	@Autowired
	private Passbookrepo prepo;
	
	@GetMapping("/rduserbook")
	public Map<String, List<Passbook>> displayAllCourses(){
		List<Passbook> lst = prepo.findAll();
		Map<String, List<Passbook>> responce = new HashMap<>();
		responce.put("details", lst);
		return responce;
	}
	
	@GetMapping("/totalamt")
	public Map<String, Object> totalamt(){
		long total=prepo.gettotalamt();
		Map<String, Object> result=new HashMap<>();
		result.put("Total_Amount", total);
		return result;
	}
	
	@GetMapping("/rddetailsbyrid/{rid}")
	public List<Passbook> rdDetailsByRid(@PathVariable ("rid") int rid ){               //all passboook details of one user
		List<Passbook> lst = prepo.getallbyrid(rid);
		return lst;
	}
	

	
	@GetMapping("/transactioncount/{rid}")
	public List<TransactioncountDTO> transactionCount(@PathVariable ("rid") int rid){
		List<TransactioncountDTO> lst=prepo.getTransactionCount(rid);
		return lst;
	}
	
	
	@GetMapping("/alluserspecificdetails")
	public List<Object[]> allUserSpecificDetails() {
		List<Object[]> lst=prepo.getUserPassbookDetailsUnstru();                //dont use
		return lst;
	}
	
	@GetMapping("/details")
	public List<UserPassbookDTO> allUserDetails(){
		List<UserPassbookDTO> lst=prepo.getUserPassbookDetails();
		return lst;
	}
	
	@GetMapping("/detailsbyid/{id}")
	public List<UserPassbookDTO> userDetailsById(@PathVariable ("id") int id){                     //specific passboook details of one user
		List<UserPassbookDTO> lst=prepo.getUserDetailsById(id);
		return lst;
	}
	
	@GetMapping("/ttlamtofuser/{rid}")
	public Map<String, Object> TotalAmtById(@PathVariable ("rid") int rid){
		long total=prepo.getTotalAmtById(rid);
		Map<String, Object> result=new HashMap<>();
		result.put("TotalUserAmount", total);
		return result;
	}
	
	@PostMapping("/rduserbooksave")
	public Passbook rduserbooksave(@RequestBody Passbook p) {
		Passbook data=prepo.save(p);
		return data;
	}
	
	@PutMapping("/rduserbookupdt")
	public Passbook rduserbookupdt(@RequestBody Passbook p) {
		Passbook updt_data=prepo.save(p);
		return updt_data;
	}
	
	@DeleteMapping("/rduserbookdlt")
	public String rduserbookdlt(@PathVariable ("id") int id) {
		prepo.deleteById(id);
		return "Delete Passbook Record Successfully...";
	}

}
