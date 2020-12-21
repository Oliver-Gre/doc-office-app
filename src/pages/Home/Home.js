import React, { Component } from "react";

import Data from "./PatientData.json";

import "./Home.css";

import Patientcard from "../../components/Patientcard/Patientcard.js";
import Searchbar from "../../components/Searchbar/Searchbar";
import AddModal from "../../components/AddModal/AddModal";

class Home extends Component {
  state = { currentPatient: "", searchedPatients: "", openModal: false };

  setPatient = (clickedPatientsValue) => {
    this.setState({
      currentPatient: clickedPatientsValue,
    });
  };

  clearCurrentpatient = () => {
    this.setState({
      currentPatient: "",
    });
  };

  // without a proper DB i can't recreate the removal of an entry. this was the idea, with the rerendering of the list
  removePatient = (clickedPatientsValue) => {
    const filteredPatients = Data.filter(
      (patient) => patient.insuranceNumber !== clickedPatientsValue
    );
  };

  handleSearchInput = (searchValue) => {
    this.setState({
      searchedPatients: searchValue,
    });
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      openModal: !prevState.openModal,
    }));
  };

  render() {
    const { currentPatient, searchedPatients } = this.state;

    let chosenPatient;
    chosenPatient = Data.find(
      (patient) => patient.insuranceNumber === currentPatient
    );

    // // this was an idea on how to fake a database
    // // but it took a lot of time and is a Pfusch in the end
    // // so I left it out

    // // define var allPatients, the starting DB
    // let allPatients = Data;

    // // define var from the saved DB
    // let savedDB = localStorage.getItem("patientDB");

    // // if a saved DB exists, take it
    // if (savedDB) {
    //   allPatients = JSON.parse(savedDB);
    // }
    // // and then use allPatients instead of Data

    // no patient chosen, display all patients
    if (!currentPatient && !searchedPatients) {
      return (
        <>
          {this.state.openModal ? (
            <AddModal handleModalBackgroundClick={() => this.toggleModal()} />
          ) : null}
          <Searchbar
            handleChange={(passedSeach) => this.handleSearchInput(passedSeach)}
          />

          <div className="cardContainer">
            <button
              className="addPatientButton"
              onClick={() => this.toggleModal()}
            >
              +
            </button>
            {Data.map((uniquePatient) => (
              <Patientcard
                content={uniquePatient}
                key={uniquePatient.insuranceNumber}
                singleEntry={false}
                handleClick={(passedpatientValue) =>
                  this.setPatient(passedpatientValue)
                }
                handleDelete={(passedpatientValue) =>
                  this.removePatient(passedpatientValue)
                }
              />
            ))}
          </div>
        </>
      );
    }

    // single patient is chosen, display only the chosen patient
    if (currentPatient) {
      return (
        <div className="bigContainer">
          <Searchbar
            handleChange={(passedSeach) => this.handleSearchInput(passedSeach)}
          />
          <div className="cardContainer">
            <Patientcard
              content={chosenPatient}
              handleClick={() => this.clearCurrentpatient()}
              singleEntry={true}
            />
          </div>
        </div>
      );
    }

    // searchbar has been used, display all applicable patients
    if (searchedPatients) {
      const searchResult = Data.filter((filteredPatient) =>
        filteredPatient.surname
          .toLowerCase()
          .includes(searchedPatients.toLowerCase())
      );
      return (
        <div className="bigContainer">
          <Searchbar
            handleChange={(passedSearch) =>
              this.handleSearchInput(passedSearch)
            }
          />
          <div className="cardContainer">
            {searchResult.map((uniquePatient) => (
              <Patientcard
                content={uniquePatient}
                key={uniquePatient.insuranceNumber}
                singleEntry={false}
                handleClick={(passedpatientValue) =>
                  this.setPatient(passedpatientValue)
                }
              />
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Home;
