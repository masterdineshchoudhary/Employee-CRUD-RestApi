import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

const UpdateEmployee = () => {
  let navigate = useNavigate();
  const { id } = useParams();
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

  useEffect(() => {
    const loadEmployee = async () => {
      const result = await axios.get(`http://localhost:8080/employee/${id}`);
      setEmployee(result.data);
    };
    loadEmployee();
  }, [id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8080/employee/update-employee/${id}`,
        employee
      );
      navigate("/");
    } catch (error) {
      console.log("Error updating employee : ", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded  p-4 mt-2 ">
          <h2 className="text-center m-4">Edit Employee details</h2>
          <form onSubmit={onSubmit}>
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
                onChange={onInputChange}
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
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="empMobileNumber" className="form-label">
                Mobile Number
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter mobile number"
                name="empMobileNumber"
                value={empMobileNumber}
                onChange={onInputChange}
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
                onChange={onInputChange}
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

export default UpdateEmployee;
