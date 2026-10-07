package com.cs.demo.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class RDuser {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int rid;
	private String name;
	private String addr;
	private String mobno;
	@Column(name="dob")
	private LocalDate dob;
	private String gender;
	@Column(name="rddate")
	private LocalDate rddate;
	private int rdamt;
	private String accupation;
	private String acno;
	private String adharno;
	private String panno;
	private String nname;
	private String naddr;
	private String nadharno;
	private String npanno;
	private Boolean agree;
	 @Column(name = "loginid")
	private String loginid;
	 @Column(name = "user_password")
	private String user_password;
	public String getLoginid() {
		return loginid;
	}
	public void setLoginID(String loginid) {
		this.loginid = loginid;
	}
	public String getUser_password() {
		return user_password;
	}
	public void setUser_password(String user_password) {
		this.user_password = user_password;
	}
	public int getRid() {
		return rid;
	}
	public void setRid(int rid) {
		this.rid = rid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddr() {
		return addr;
	}
	public void setAddr(String addr) {
		this.addr = addr;
	}
	public String getMobno() {
		return mobno;
	}
	public void setMobno(String mobno) {
		this.mobno = mobno;
	}
	public LocalDate getDob() {
		return dob;
	}
	public void setDob(LocalDate dob) {
		this.dob = dob;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public LocalDate getRddate() {
		return rddate;
	}
	public void setRddate(LocalDate rddate) {
		this.rddate = rddate;
	}
	
	public String getAccupation() {
		return accupation;
	}
	public void setAccupation(String accupation) {
		this.accupation = accupation;
	}
	public String getAcno() {
		return acno;
	}
	public void setAcno(String acno) {
		this.acno = acno;
	}
	public String getAdharno() {
		return adharno;
	}
	public void setAdharno(String adharno) {
		this.adharno = adharno;
	}
	public String getPanno() {
		return panno;
	}
	public void setPanno(String panno) {
		this.panno = panno;
	}
	public String getNname() {
		return nname;
	}
	public void setNname(String nname) {
		this.nname = nname;
	}
	public String getNaddr() {
		return naddr;
	}
	public void setNaddr(String naddr) {
		this.naddr = naddr;
	}
	public String getNadharno() {
		return nadharno;
	}
	public void setNadharno(String nadharno) {
		this.nadharno = nadharno;
	}
	public String getNpanno() {
		return npanno;
	}
	public void setNpanno(String npanno) {
		this.npanno = npanno;
	}
	public Boolean getAgree() {
		return agree;
	}
	public void setAgree(Boolean agree) {
		this.agree = agree;
	}
	public int getRdamt() {
		return rdamt;
	}
	public void setRdamt(int rdamt) {
		this.rdamt = rdamt;
	}
	
	
	

}
