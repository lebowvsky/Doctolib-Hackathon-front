import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./OrdonnanceCreation.module.css";
import Medoc from "../components/Medoc";

const OrdonnanceCreation = () => {
  const [patientAll, setPatientAll] = useState([]);
  const [patientSelectedId, setPatientSelectedId] = useState();
  const [patientSelectedFirstname, setPatientSelectedFirstname] = useState();
  const [patientSelectedLastname, setPatientSelectedLastname] = useState();
  const [patientAddFirstName, setPatientAddFirstName] = useState();
  const [patientAddLastname, setPatientAddLastname] = useState();
  const [medocAll, setMedocAll] = useState([]);
  const [medocSelected, setMedocSelected] = useState();
  const [medocToAdd, setMedocToAdd] = useState();
  const [morning, setMorning] = useState(false);
  const [noon, setNoon] = useState(false);
  const [evening, setEvening] = useState(false);
  const [morningMedocQuantity, setMorningMedocQuantity] = useState();
  const [noonMedocQuantity, setNoonMedocQuantity] = useState();
  const [eveningMedocQuantity, setEveningMedocQuantity] = useState();
  const [comment, setComment] = useState();
  const [dateStart, setDateStart] = useState();
  const [dateEnd, setDateEnd] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/patients")
      .then((response) => response.data)
      .then((data) => {
        setPatientAll(data);
      });

    axios
      .get("http://localhost:8080/api/produits")
      .then((response) => response.data)
      .then((data) => {
        setMedocAll(data);
      });
  }, []);

  const handleSelectPatient = (e) => {
    setPatientSelectedId(Number(e.target.value));
    axios
      .get(`http://localhost:8080/api/patients/${e.target.value}`)
      .then((response) => response.data)
      .then((data) => {
        setPatientSelectedFirstname(data[0].prenom);
        setPatientSelectedLastname(data[0].nom);
      });
  };

  const handleAddPatientFirstname = (e) => {
    setPatientAddFirstName(e.target.value);
  };

  const handleAddPatientLastname = (e) => {
    setPatientAddLastname(e.target.value);
  };

  const handleAddPatient = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/patients", {
        nom: patientAddLastname,
        prenom: patientAddFirstName,
      })
      .then((res) => res.data)
      .then((res) => {
        alert("patient ajouté");
      })
      .catch((e) => {
        console.error(e);
        alert(`Erreur lors de l'ajout du patient : ${e.message}`);
      });
  };

  const addMedocOnHooks = (e) => {
    setMedocToAdd(e.target.value);
  };

  const handleAddMedoc = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/produits", { nom: medocToAdd })
      .then((res) => res.data)
      .then((res) => {
        alert("Medoc ajouté");
      })
      .catch((e) => {
        console.error(e);
        alert(`Erreur lors de l'ajout du produit : ${e.message}`);
      });
  };

  const handleSelectMedoc = (e) => {
    setMedocSelected(Number(e.target.value));
  };

  const morningCheck = (e) => {
    e.target.checked ? setMorning(true) : setMorning(false);
  };

  const noonCheck = (e) => {
    e.target.checked ? setNoon(true) : setNoon(false);
  };

  const eveningCheck = (e) => {
    e.target.checked ? setEvening(true) : setEvening(false);
  };

  const morningQuantity = (e) => {
    setMorningMedocQuantity(Number(e.target.value));
  };

  const noonQuantity = (e) => {
    setNoonMedocQuantity(Number(e.target.value));
  };

  const eveningQuantity = (e) => {
    setEveningMedocQuantity(Number(e.target.value));
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const medocDateStart = (e) => {
    setDateStart(e.target.value);
  };

  const medocDateEnd = (e) => {
    setDateEnd(e.target.value);
  };

  const handleSubmitCommande = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/commandes", {
        quantite_matin: morningMedocQuantity,
        quantite_midi: noonMedocQuantity,
        quantite_soir: eveningMedocQuantity,
        commentaire: comment,
        date_debut: dateStart,
        date_fin: dateEnd,
        id_produit: medocSelected,
        id_ordonnance: 1,
      })
      .then((res) => res.data)
      .then((res) => {
        alert("Ordonnance ajoutée");
      })
      .catch((e) => {
        console.error(e);
        alert(`Erreur lors de l'ajout de l'ordonnance : ${e.message}`);
      });
  };

  const OrdonnanceCreation = (e) => {
    e.preventDefault();
  };

  return (
    <div className={style.all}>
      <h2>Create a prescription</h2>
      <div id="choose-patient">
        <form>
          <label htmlFor="patient">Patient</label>
          <select name="patient" id="patient" onChange={handleSelectPatient}>
            {patientAll.map((patient) => {
              return (
                <option
                  value={`${patient.id}`}
                >{`${patient.nom} ${patient.prenom}`}</option>
              );
            })}
          </select>
        </form>

        <form id="add-patient" onSubmit={handleAddPatient}>
          <label htmlFor="new_patient_firstname">Firstname</label>
          <input
            type="text"
            name="new_patient_firstname"
            id="new_patient_firstname"
            placeholder="new patient firstname"
            onChange={handleAddPatientFirstname}
          />

          <label htmlFor="new_patient_name">Lastname</label>
          <input
            type="text"
            name="new_patient_lastname"
            id="new_patient_lastname"
            placeholder="new patient lastname"
            onChange={handleAddPatientLastname}
          />
          <button type="submit">Add patient</button>
        </form>
      </div>

      <div id="medocs">
        <form id="add_medoc" onSubmit={handleAddMedoc}>
          <div>
            <label htmlFor="new_medoc_name">drug's name</label>
            <input
              type="text"
              name="new_medoc_name"
              id="new_medoc_name"
              placeholder="drug's name"
              onChange={addMedocOnHooks}
            />
          </div>
          <button type="submit">Add Drug</button>
        </form>
      </div>

      <div id="ordonnance">
        <h3>{`${patientSelectedFirstname} ${patientSelectedLastname}`}</h3>
        <Medoc
          medocAll={medocAll}
          handleSubmitCommande={handleSubmitCommande}
          handleSelectMedoc={handleSelectMedoc}
          morningCheck={morningCheck}
          noonCheck={noonCheck}
          eveningCheck={eveningCheck}
          medocDateStart={medocDateStart}
          medocDateEnd={medocDateEnd}
          morningQuantity={morningQuantity}
          noonQuantity={noonQuantity}
          eveningQuantity={eveningQuantity}
          handleComment={handleComment}
          isMorningTrue={morning}
          isNoonTrue={noon}
          isEveningTrue={evening}
        />
      </div>
    </div>
  );
};

export default OrdonnanceCreation;
