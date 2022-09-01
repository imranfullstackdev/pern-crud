import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import EdiTuser from "./EdiTuser";

const Modifydetails = () => {
  const [allData, Setalldata] = useState([]);

  const allUser = async () => {
    const allUserData = await fetch(`http://localhost:8000/api/v1/get`);
    const response = await allUserData.json();
    Setalldata(response);
  };
  useEffect(() => {
    allUser();
  }, []);
  const DeleteUser = async (id) => {
    const DeletingUser = await fetch(
      `http://localhost:8000/api/v1/delete/${id}`,
      {
        method: "delete",
      }
    );
    alert("deleted sucessfully");
    // window.location.reload();
  };
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>id</th>
          <th>email</th>
          <th>Password</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {allData.map((eachuser) => {
          return (
            <tr>
              <td>{eachuser.id}</td>
              <td>{eachuser.email}</td>
              <td>{eachuser.password}</td>
              <td>
                <EdiTuser props={eachuser} />
              </td>
              <button onClick={() => DeleteUser(eachuser.id)}>Delete</button>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Modifydetails;
