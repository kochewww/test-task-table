import React from "react";
import styled from "styled-components";
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
  return (
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
        {props.data.map(element => (
          <tr key={element.id + element.firstName}>
            <td>{element.id}</td>
            <td>{element.firstName}</td>
            <td>{element.lastName}</td>
            <td>{element.email}</td>
            <td>{element.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
