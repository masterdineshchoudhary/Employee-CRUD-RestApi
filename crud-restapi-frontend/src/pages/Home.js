import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaUserEdit, FaEye } from "react-icons/fa";

const Home = () => {
  const [employees, setEmployess] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const result = await axios.get("http://localhost:8080/employees");
    setEmployess(result.data);
  };

  const deleteEmployee = async (empId) => {
    await axios.delete(
      `http://localhost:8080/employee/delete-employee/${empId}`
    );
    loadEmployees();
  };

  return (
    <div className="container">
      <h2 className="text-center pt-4">Employee CRUD Application</h2>
      <div className="table-responsive py-5">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Job Role</th>
              <th scope="col">Mobile</th>
              <th scope="col">Address</th>
              <th scope="col">Gender</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.empId}>
                <td>{employee.empName}</td>
                <td>{employee.empJobRole}</td>
                <td>{employee.empMobileNumber}</td>
                <td>{employee.empAddress}</td>
                <td>{employee.empGender}</td>
                <td>
                  <Link className="mx-2" to={`/employee/${employee.empId}`}>
                    <FaEye />
                  </Link>
                  <Link
                    className="btn btn-warning mx-2"
                    to={`/update-employee/${employee.empId}`}
                  >
                    <FaUserEdit />
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteEmployee(employee.empId)}
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
