import React, { useState } from "react";

export default props => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const handleClick = event => {
    setIsFormVisible(prevIsFormVisible => !isFormVisible);
  };
  const formSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const id = form["id"].value;
    const firstName = form["firstName"].value;
    const lastName = form["lastName"].value;
    const email = form["email"].value;
    const phone = form["phone"].value;
    const address = {};
    address.city = "";
    address.streetAddress = "";
    address.zip = "";
    props.addPerson({ id, firstName, lastName, email, phone, address });

    form.reset();
  };
  return (
    <div>
      <button className="btn btn-dark mt-3 mb-3" onClick={handleClick}>
        Add a new user
      </button>

      {isFormVisible && (
        <form onSubmit={formSubmit}>
          <div className="form-group col-xs-1">
            <label htmlFor="input4">ID</label>
            <input
              id="id"
              type="number"
              className="form-control mb-3"
              placeholder="ID"
            />
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="input4">First name</label>
              <input
                id="firstName"
                type="text"
                className="form-control mb-3"
                placeholder="First name"
              />
            </div>
            <div className="col">
              <label htmlFor="input4">Last name</label>
              <input
                id="lastName"
                type="text"
                className="form-control mb-3"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="input4">Email</label>
              <input
                id="email"
                type="emaii"
                className="form-control mb-3"
                placeholder="Email"
              />
            </div>

            <div className="col">
              <label htmlFor="input4">Phone</label>
              <input
                id="phone"
                type="phone"
                className="form-control mb-3"
                placeholder="Phone"
              />
            </div>
          </div>
          <button type="submit mb-3" className="btn btn-primary" value="submit">
            submit
          </button>
        </form>
      )}
    </div>
  );
};
