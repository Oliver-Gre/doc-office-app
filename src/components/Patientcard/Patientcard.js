import React, { Component } from "react";
import "./Patientcard.css";

class Patientcard extends Component {
  render() {
    const { name, surname, insuranceNumber, email, phone } = this.props.content;
    const { handleClick, handleDelete, singleEntry } = this.props;

    // if multiple patients are displayed
    if (!singleEntry) {
      return (
        <div className="listCard singleItem">
          <section
            className="clickable"
            onClick={() => handleClick(insuranceNumber)}
          >
            <p>
              Name:
              <span className="patientDetails">
                {surname}, {name}
              </span>
            </p>
            <p>
              Insurance Number:
              <span className="patientDetails">{insuranceNumber}</span>
            </p>
          </section>
          <button
            className="cardButton clickable"
            onClick={() => handleDelete(insuranceNumber)}
          >
            Delete: {insuranceNumber}?
          </button>
        </div>
      );
    }

    // if only a single patient is displayed
    if (singleEntry) {
      return (
        <div className="listCard">
          <section>
            <p>
              Surname: <span className="patientDetails">{surname}</span>
            </p>
            <p>
              Name: <span className="patientDetails">{name}</span>
            </p>
            <p>
              Insurance Number:
              <span className="patientDetails">{insuranceNumber}</span>
            </p>
            <p>
              Phone Number: <span className="patientDetails">{email}</span>
            </p>
            <p>
              Email: <span className="patientDetails">{phone}</span>
            </p>
            <p>
              Insurance Number:
              <span className="patientDetails">{insuranceNumber}</span>
            </p>
          </section>
          <button
            className="cardButton clickable"
            onClick={() => handleClick()}
          >
            Back
          </button>
        </div>
      );
    }
  }
}

export default Patientcard;
