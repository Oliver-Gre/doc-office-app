import React, { Component } from "react";
import "./AddModal.css";
import Data from "../../pages/Home/PatientData.json";

class AddModal extends Component {
  state = { name: "", surname: "", insurance: "", phone: "", email: "" };

  changeState = (inputTarget, passedValue) => {
    if (inputTarget === "name") {
      this.setState({
        name: passedValue,
      });
    }
    if (inputTarget === "surname") {
      this.setState({
        surname: passedValue,
      });
    }
    if (inputTarget === "insurance") {
      this.setState({
        insurance: passedValue,
      });
    }
    if (inputTarget === "phone") {
      this.setState({
        phone: passedValue,
      });
    }
    if (inputTarget === "email") {
      this.setState({
        email: passedValue,
      });
    }
  };

  addUser = () => {
    if (
      this.state.name !== "" &&
      this.state.surname !== "" &&
      this.state.insurance !== "" &&
      this.state.phone !== "" &&
      this.state.mail !== ""
    ) {
      // I don't know why, but this creates an error when closing the modal, but this was the idea:
      // Data.push(
      //   {
      //     name: this.state.name,
      //     surname: this.state.surname,
      //     insuranceNumber: this.state.insurance,
      //     phone: this.state.phone,
      //     email: this.state.email,
      //   },
      //   this.setState({
      //     name: "",
      //     surname: "",
      //     insurance: "",
      //     phone: "",
      //     email: "",
      //   })
      // );

      return;
    }
  };

  render() {
    const { handleModalBackgroundClick } = this.props;

    return (
      <>
        <div
          className="modalBackground"
          onClick={handleModalBackgroundClick}
        ></div>
        <div className="modalContainer">
          <span
            className="modalCloseButton"
            onClick={handleModalBackgroundClick}
          >
            x
          </span>
          <h2>Add a new patient:</h2>
          <div className="inputContainer">
            <input
              type="text"
              onChange={(e) => this.changeState("name", e.target.value)}
              placeholder="Name"
            />
            <input
              type="text"
              onChange={(e) => this.changeState("surname", e.target.value)}
              placeholder="Surname"
            />
            <input
              type="number"
              onChange={(e) => this.changeState("insurance", e.target.value)}
              placeholder="Insurance Number"
            />
            <input
              type="tel"
              onChange={(e) => this.changeState("phone", e.target.value)}
              placeholder="Phone Number"
            />
            <input
              type="email"
              onChange={(e) => this.changeState("email", e.target.value)}
              placeholder="E-Mail Adress"
            />
          </div>
          <button className="modalButton" onClick={() => this.addUser()}>
            Add Patient
          </button>
        </div>
      </>
    );
  }
}

export default AddModal;
