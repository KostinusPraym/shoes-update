import React from "react";
import {Link} from 'react-router-dom'

import styles from "./Info.module.scss"

import AppContext from "../../context";

export const Info = ({title, description, textButton, img}) => {
    const {onClose} = React.useContext(AppContext)
  return (
    <div className={styles.emptyBlock}>
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
     <Link to="/" >
        <button onClick={onClose} className="greenButton">
          {textButton}
        </button>
     </Link>
    </div>
  );
};

