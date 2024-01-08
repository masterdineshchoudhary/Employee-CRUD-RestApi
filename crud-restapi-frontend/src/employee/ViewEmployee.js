import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewEmployee = () => {
  const [employee, setEmployee] = useState({
    empName: "",
    empJobRole: "",
    empMobileNumber: "",
    empAddress: "",
    empGender: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const loadEmployee = async () => {
      const result = await axios.get(`http://localhost:8080/employee/${id}`);
      setEmployee(result.data);
    };
    loadEmployee();
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center m-4">Employee Details</h2>
        <div className="col-md-6 offset-md-3 border rounded  p-4 mt-2 ">
          <div className="">
            <div className="card-header">
              <h4>Employee ID: {id}</h4>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name: </b>
                  {employee.empName}
                </li>
                <li className="list-group-item">
                  <b>Job Role: </b>
                  {employee.empJobRole}
                </li>
                <li className="list-group-item">
                  <b>Mobile Number: </b>
                  {employee.empMobileNumber}
                </li>
                <li className="list-group-item">
                  <b>Address: </b>
                  {employee.empAddress}
                </li>
                <li className="list-group-item">
                  <b>Gender: </b>
                  {employee.empGender}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployee;
