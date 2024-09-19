import React from "react";
import styles from "./card.module.css";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";

interface CardProps {
  hospitalName: string;
  imgSrc: string;
  hospitalRating: number;

  onRatingChange: (hospital: string, rating: number) => void;
}

const Card = ({
  hospitalName,
  imgSrc,
  hospitalRating,
  onRatingChange
}: CardProps) => {
  return (
    <InteractiveCard>
      <img src={imgSrc} alt="Vaccine Information" className={styles.image} />
      <div className={styles.textContainer}>
        <h2>{hospitalName}</h2>
        <p>description</p>
      </div>
      <Rating
        id={`${hospitalName} Rating`}
        name={`${hospitalName} Rating`}
        data-testid={`${hospitalName} Rating`}
        value={hospitalRating}
        onChange={(e, newValue) => {
          onRatingChange(hospitalName, newValue ?? 0);
        }}
      />
    </InteractiveCard>
  );
};

export default Card;
