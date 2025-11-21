import React, { useState } from "react";

const Test = () => {
  const [unos, setUnos] = useState("");

  const funkcija = (e) => {
    e.preventDefault(); // Sprečava automatsko osvežavanje stranice
    setUnos(e.target.value); // Ispravno ažuriranje stanja
  };

  const handleSubmit = () => {
    console.log("Unesena vrednost:", unos);
  };

  return (
    <div className="">
      <input onChange={funkcija} type="text" placeholder="test input" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Test;
