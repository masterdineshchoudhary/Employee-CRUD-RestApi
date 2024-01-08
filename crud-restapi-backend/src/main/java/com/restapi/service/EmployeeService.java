package com.restapi.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import com.restapi.exception.UserNotFoundException;
import com.restapi.model.Employee;
import com.restapi.repository.EmployeeRepository;

@Service
public class EmployeeService {
	@Autowired
	EmployeeRepository repository;
	
	
	public List<Employee> getEmployees() {
		 List<Employee> employees = repository.findAll();
		 return employees;
	}
	
	public Employee getEmployeeById(@PathVariable int id) {
		Employee employee = repository.findById(id).orElseThrow(()-> new UserNotFoundException(id));
		return employee;
	
	}
	
	@ResponseStatus(code = HttpStatus.CREATED)
	public void addEmployee(@RequestBody Employee employee) {
		long mob = employee.getEmpMobileNumber();
		
		repository.save(employee);
	}
	
	public Employee updateEmployee(@RequestBody Employee newEmployee, @PathVariable int id) {
		return repository.findById(id).map(emp -> {
			emp.setEmpName(newEmployee.getEmpName());
			emp.setEmpJobRole(newEmployee.getEmpJobRole());
			emp.setEmpMobileNumber(newEmployee.getEmpMobileNumber());
			emp.setEmpAddress(newEmployee.getEmpAddress());
			emp.setEmpGender(newEmployee.getEmpGender());
			return repository.save(emp);
		}).orElseThrow(()->new UserNotFoundException(id));
	}
	
	public String deleteEmployee(@PathVariable int id) {
		if (!repository.existsById(id)) {
			throw new UserNotFoundException(id);
		}
		repository.deleteById(id);
		return "User with id:"+id+" has been deleted";
	}

}
