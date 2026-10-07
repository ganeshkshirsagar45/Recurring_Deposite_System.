package com.cs.demo.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.cs.demo.model.RDuser;
import com.cs.demo.pdto.LoginRequest;
import com.cs.demo.repo.Rduserrepo;

@Service
public class UserService {
	
	@Autowired
    private Rduserrepo rrepo;

    public RDuser login(LoginRequest request) {
        return rrepo.login(
                request.getLoginid(),
                request.getUser_password()
        );
    }
	
	

}
