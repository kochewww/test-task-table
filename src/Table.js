import React, { useState } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";

/* styling */
const Arrow = styled.span`
  display: inline-block;
  height: 0;
  width: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  &.asc {
    border-bottom: 5px solid black;
  }
  &.desc {
    border-top: 5px solid black;
  }
`;

export default function Table(props) {
  const personsPerPage = 50;
  const indexOfLastPerson = props.currentPage * personsPerPage;
  const indexOfFirstPerson = indexOfLastPerson - personsPerPage;
  const currentPersons = props.data.slice(
    indexOfFirstPerson,
    indexOfLastPerson
  );

  const handleClick = event => {
    props.setCurrentPage(event.target.id);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.data.length / personsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => props.sortBy("id")}>
              ID
              <Arrow className={props.setArrow("id")} />
            </th>
            <th scope="col" onClick={() => props.sortBy("firstName")}>
              First Name
              <Arrow className={props.setArrow("firstName")} />
            </th>
            <th scope="col" onClick={() => props.sortBy("lastName")}>
              Last Name
              <Arrow className={props.setArrow("lastName")} />
            </th>
            <th scope="col" onClick={() => props.sortBy("email")}>
              Email
              <Arrow className={props.setArrow("email")} />
            </th>
            <th scope="col" onClick={() => props.sortBy("phone")}>
              Phone
              <Arrow className={props.setArrow("phone")} />
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPersons.map((person, index) => (
            <tr
              index={index}
              key={person.id + person.phone}
              onClick={() => props.onSelect(person)}
            >
              <td>{person.id}</td>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.email}</td>
              <td>{person.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {props.data.length > 50 && (
        <Pagination handleClick={handleClick} pageNumbers={pageNumbers} />
      )}
    </div>
  );
}
