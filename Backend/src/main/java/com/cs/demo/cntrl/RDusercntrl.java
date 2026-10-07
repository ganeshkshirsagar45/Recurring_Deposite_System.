package com.cs.demo.cntrl;

import java.util.HashMap;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.cs.demo.model.RDuser;
import com.cs.demo.pdto.LoginRequest;
import com.cs.demo.repo.Rduserrepo;
import com.cs.demo.service.UserService;

@RestController
public class RDusercntrl {
	@Autowired
	private Rduserrepo repo;
	
	
	@GetMapping("/allrduser")
	public Map<String, List<RDuser>> displayAllCourses(){
		List<RDuser> lst = repo.findAll();
		Map<String, List<RDuser>> responce = new HashMap<>();
		responce.put("Users", lst);
		return responce;
	}
	
//	@GetMapping("/rduser/{loginid}/{password}")
//	public Map<String, List<RDuser>> displayDetailsLogin(@PathVariable ("loginid") String loginid, @PathVariable ("password") String password){
//		List<RDuser> lst = repo.getDetailsByLogin(loginid, password);
//		Map<String, List<RDuser>> responce = new HashMap<>();
//		responce.put("rduser", lst);
//		return responce;
//	}
	
	@GetMapping("/totalrdusers")
	public Map<String, Object> displayTotalRdusres(){
		long total=repo.getTotalRdusers();
		Map<String, Object> result=new HashMap<>();
		result.put("Active_Rdusers", total);
		return result;
	}
	
	@Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {

        RDuser user = userService.login(request);

        if (user != null) {
        	System.out.println(user);
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid Username or Password");
        }
    }
	
	
	@PostMapping("/rdusersave")
	public RDuser rdusersave(@RequestBody RDuser r) {
		RDuser data=repo.save(r);
		return data;
	}
	
	@PutMapping("/rduserupdt")
	public RDuser rduserupdt(@RequestBody RDuser r) {
		RDuser updt_data=repo.save(r);
		return updt_data;
	}
	
	@DeleteMapping("/rduserdlt/{id}")
	public String rduserdlt(@PathVariable ("id") int id) {
		repo.deleteById(id);
		return "Delete Record Successfully...";
		
	}

}
