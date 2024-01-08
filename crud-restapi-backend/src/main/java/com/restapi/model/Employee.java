package com.restapi.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "EmployeeData")
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private int empId;
	@Column(name = "Name")
	private String empName;
	@Column(name = "Job Role")
	private String empJobRole;
	@Column(name = "Mobile Number")
	private long empMobileNumber;
	@Column(name = "Address")
	private String empAddress;
	@Column(name = "Gender")
	private String empGender;
	
	public Employee() {
		
	}

	public Employee(int empId, String empName, String empJobRole, long empMobileNumber, String empAddress,
			String empGender) {
		super();
		this.empId = empId;
		this.empName = empName;
		this.empJobRole = empJobRole;
		this.empMobileNumber = empMobileNumber;
		this.empAddress = empAddress;
		this.empGender = empGender;
	}

	public int getEmpId() {
		return empId;
	}

	public void setEmpId(int empId) {
		this.empId = empId;
	}

	public String getEmpName() {
		return empName;
	}

	public void setEmpName(String empName) {
		this.empName = empName;
	}

	public String getEmpJobRole() {
		return empJobRole;
	}

	public void setEmpJobRole(String empJobRole) {
		this.empJobRole = empJobRole;
	}

	public long getEmpMobileNumber() {
		return empMobileNumber;
	}

	public void setEmpMobileNumber(long empMobileNumber) {
		this.empMobileNumber = empMobileNumber;
	}

	public String getEmpAddress() {
		return empAddress;
	}

	public void setEmpAddress(String empAddress) {
		this.empAddress = empAddress;
	}

	public String getEmpGender() {
		return empGender;
	}

	public void setEmpGender(String empGender) {
		this.empGender = empGender;
	}

	@Override
	public String toString() {
		return "Employee [empId=" + empId + ", empName=" + empName + ", empJobRole=" + empJobRole + ", empMobileNumber="
				+ empMobileNumber + ", empAddress=" + empAddress + ", empGender=" + empGender + "]";
	}
	
	
}
