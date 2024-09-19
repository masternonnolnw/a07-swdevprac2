"use client";

import { useReducer, useState } from "react";
import Card from "./Card";

const initialState = new Map<string, number>([
  ["Chulalongkorn Hospital", 0],
  ["Rajavithi Hospital", 0],
  ["Thammasat University Hospital", 0]
]);

// Reducer function to manage state changes
function ratingReducer(
  state: Map<string, number>,
  action: { type: string; hospital: string; rating: number }
) {
  switch (action.type) {
    case "update":
      const newState = new Map(state);
      newState.set(action.hospital, action.rating ?? 0);
      return newState;
    case "remove":
      const updatedState = new Map(state);
      updatedState.delete(action.hospital);
      return updatedState;
    default:
      return state;
  }
}

const CardPanel = () => {
  const [ratings, dispatch] = useReducer(ratingReducer, initialState);

  const handleRatingChange = (hospital: string, rating: number) => {
    dispatch({ type: "update", hospital, rating });
  };

  const [hideHospital, setHideHospital] = useState<String[]>([]);

  return (
    <div className="grid grid-cols-3 gap-4 max-w-[1500px] mx-auto">
      <Card
        hospitalName="Chulalongkorn Hospital"
        imgSrc="/chula.jpg"
        hospitalRating={ratings.get("Chulalongkorn Hospital") ?? 0}
        onRatingChange={handleRatingChange}
      />
      <Card
        hospitalName="Rajavithi Hospital"
        imgSrc="/rajavithi.jpg"
        hospitalRating={ratings.get("Rajavithi Hospital") ?? 0}
        onRatingChange={handleRatingChange}
      />
      <Card
        hospitalName="Thammasat University Hospital"
        imgSrc="/thammasat.jpg"
        hospitalRating={ratings.get("Thammasat University Hospital") ?? 0}
        onRatingChange={handleRatingChange}
      />

      {/* display hospital name with rating */}
      <div className="col-span-3 text-black">
        <h2 className="text-center">Hospital Ratings</h2>
        <ul>
          {Array.from(ratings).map(([hospital, rating]) =>
            hideHospital.includes(hospital) ? null : (
              <li
                key={hospital}
                onClick={() => setHideHospital([...hideHospital, hospital])}
                className="cursor-pointer"
                data-testid={hospital}
              >
                {hospital}: {rating}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default CardPanel;
