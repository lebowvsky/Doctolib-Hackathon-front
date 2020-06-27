import React, { useEffect, useState } from "react";
import styles from "./OrdonnanceDetails.module.css";
import Clock from "./Clock";
import { useParams } from "react-router-dom";
import axios from "axios";
import HomeIcon from "../medias/home-button.svg";
import { Link } from "react-router-dom";

const OrdonnanceDetails = () => {
  let idOrdonnance = useParams();
  const [details, setDetails] = useState([]);
  const [doctor, setDoctor] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const getDetails = async () => {
      try {
        const details = await axios.get(
          `https://my-prescription.herokuapp.com/api/ordonnances/${idOrdonnance.id}/commandes`
        );
        setDetails(details.data);
        setDoctor(details.data[0]);
      } catch (err) {
        setError(err);
      }
    };
    getDetails();
  }, []);

  return (
    <div className={styles.fullPage}>
      <div className={styles.topPage}>
        <div className={styles.topLeft}>
          <div className={styles.back}>
            <Link to='/dashboard-patient'>
              <img src={HomeIcon} alt='home icon' className={styles.homeIcon} />
            </Link>
          </div>
          <div className={styles.title}>
            Detail
            <p className={styles.prenom}>
              {/* {props.patient.nom} {props.patient.prenom} */}
            </p>
          </div>
        </div>
        <Clock />
      </div>
      <div className={styles.container}>
        <div className={styles.titles}>
          <p className={styles.numero}>Ordonnance n°{idOrdonnance.id}</p>
          <p className={styles.emission}>
            Emis par le docteur {doctor.prenom} {doctor.nom}
          </p>
        </div>
        {details.map((detail) => {
          return (
            <div className={styles.content}>
              <p className={styles.nomMedoc}>{detail.produit}</p>
              <p className={styles.dates}>
                à prendre du {detail.date_debut} au {detail.date_fin}
              </p>
              <div className={styles.posologie}>
                <p>{detail.quantite_matin} le matin</p>
                <p>{detail.quantite_midi} le midi</p>
                <p>{detail.quantite_soir} le soir</p>
              </div>
              <div className={styles.commentaire}>{detail.commentaire}</div>
            </div>
          );
        })}

        {/* <div className={styles.content}>
          <p className={styles.nomMedoc}>Plusletemps</p>
          <p className={styles.dates}>à prendre du 02/02 au 04/04</p>
          <div className={styles.posologie}>
            <p>3 le matin</p>
            <p>3 le midi</p>
            <p> et 3 le soir</p>
          </div>
          <div className={styles.commentaire}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default OrdonnanceDetails;
