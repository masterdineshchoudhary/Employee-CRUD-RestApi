package com.restapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.restapi.exception.UserNotFoundException;
import com.restapi.model.Employee;
import com.restapi.repository.EmployeeRepository;
import com.restapi.service.EmployeeService;

@RestController
@CrossOrigin("http://localhost:3000")
public class EmployeeController {
	@Autowired
	EmployeeService service;
	
	@GetMapping("/employees")
	private List<Employee> getEmployees() {
		 return service.getEmployees();
	}
	
	@GetMapping("/employee/{id}")
	private Employee getEmployeeById(@PathVariable int id) {
		return service.getEmployeeById(id);
	}
	
	@PostMapping("/employee/add-employee")
	@ResponseStatus(code = HttpStatus.CREATED)
	private void addEmployee(@RequestBody Employee employee) {
		service.addEmployee(employee);
	}
	
	@PutMapping("/employee/update-employee/{id}")
	public Employee updateEmployee(@RequestBody Employee newEmployee, @PathVariable int id) {
		 return service.updateEmployee(newEmployee, id);
	}
	
	@DeleteMapping("/employee/delete-employee/{id}")
	public String deleteEmployee(@PathVariable int id) {
		return service.deleteEmployee(id);
	}
}
