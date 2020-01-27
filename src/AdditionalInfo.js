import React from "react";

export default ({ person }) => (
  <div>
    <b>
      Выбран пользователь: {person.firstName} {person.lastName}
    </b>
    <p>Описание:</p>
    <textarea value={person.description} readOnly />
    <br />
    Адрес проживания: <b>{person.address.streetAdress}</b>
    <br />
    Город: <b>{person.address.city}</b>
    <br />
    Провинция/штат: <b>{person.address.state}</b>
    <br />
    Индекс: <b>{person.address.zip}</b>
  </div>
);
