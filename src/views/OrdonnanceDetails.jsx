import React, { useEffect, useState } from "react";
import styles from "./OrdonnanceDetails.module.css";
import Clock from "./Clock";
import { useParams } from "react-router-dom";
import axios from "axios";

const OrdonnanceDetails = () => {
  let idOrdonnance = useParams();
  const [details, setDetails] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getDetails = async () => {
      try {
        const details = await axios.get(
          `http://localhost:8080/api/ordonnances/${idOrdonnance.id}/commandes`
        );
        setDetails(details.data);
      } catch (err) {
        setError(err);
      }
    };
    getDetails();
  }, []);

  return (
    <div className={styles.fullPage}>
      <div className={styles.topPage}>
        <div className={styles.title}>
          My Dashboard
          <p className={styles.prenom}></p>
        </div>
        <Clock />
      </div>
      <div className={styles.container}>
        <div className={styles.titles}>
          <p className={styles.numero}>Ordonnance n°1</p>
          <p className={styles.emission}>Emis par le docteur Peter Parker</p>
        </div>
        {details.map((detail) => {
          return (
            <div className={styles.content}>
              <p className={styles.nomMedoc}>{detail.produit}</p>
              <p className={styles.dates}>à prendre du 02/02 au 04/04</p>
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
