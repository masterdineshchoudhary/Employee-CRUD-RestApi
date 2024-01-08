import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AddEmployee = () => {
  let navigate = useNavigate();

  const [employee, setEmployee] = useState({
    empName: "",
    empJobRole: "",
    empMobileNumber: "",
    empAddress: "",
    empGender: "",
  });

  const { empName, empJobRole, empMobileNumber, empAddress, empGender } =
    employee;

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/employee/add-employee", employee);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded  p-4 mt-2 ">
          <h2 className="text-center m-4">Add Employee</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="empName" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="empName"
                value={empName}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="empJobRole" className="form-label">
                Job Role
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter job role"
                name="empJobRole"
                value={empJobRole}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="empMobileNumber" className="form-label">
                Mobile Number
              </label>
              <input
                type={"tel"}
                className="form-control"
                placeholder="Enter mobile number"
                name="empMobileNumber"
                value={empMobileNumber}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="empAddress" className="form-label">
                Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter address"
                name="empAddress"
                value={empAddress}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="empGender" className="form-label">
                Gender
              </label>
              <select
                className="form-control"
                name="empGender"
                value={empGender}
                onChange={onInputChange}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <Link className="btn btn-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
