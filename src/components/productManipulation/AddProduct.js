import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBrush } from "../../redux/brushes/brushesSlice";
import { v4 as uuidv4 } from "uuid";

const DodajCetkicuForma = () => {
  const dispatch = useDispatch();
  const brushes = useSelector((state) => state.brushes);
  // Inicijalni state forme
  const [newBrush, setNewBrush] = useState({
    name: "",
    shortDescription: "",
    description: "",
    quantity: "",
    rating: "",
    brushImg: [],
    tags: [],
    collections: [],
    price: "",
    topSellers: false,
    brend: "",
    colors: []
  });

  // Funkcija za promenu stanja kada se unesu podaci u formu
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBrush((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Funkcija za slanje podataka u Redux kada je forma poslata
  const handleSubmit = (e) => {
    e.preventDefault();

    // Dodavanje ID-a (generisanog uuid) pre slanja u Redux
    const brushWithId = { ...newBrush, id: uuidv4() };

    // Dispečujte akciju da dodate četkicu u stanje
    dispatch(addBrush(brushWithId));

    // Resetovanje forme nakon što je četkica dodata
    setNewBrush({
      name: "",
      shortDescription: "",
      description: "",
      quantity: "",
      rating: "",
      brushImg: [],
      tags: [],
      collections: [],
      price: "",
      topSellers: false,
      brend: "",
      colors: []
    });
  };

  console.log(newBrush);
  return (
    <div className="container-main">
      <div className="container manipulation-main">
        <div className="col-6">
          <form onSubmit={handleSubmit} className="manipulation col-12 row">
            <label className="col-6">
              Naziv:
              <input
                type="text"
                name="name"
                value={newBrush.name}
                onChange={handleChange}
              />
            </label>
            <label className="col-6">
              Kratak opis:
              <input
                type="text"
                name="shortDescription"
                value={newBrush.shortDescription}
                onChange={handleChange}
              />
            </label>
            <label className="col-6">
              Opis:
              <textarea
                name="description"
                value={newBrush.description}
                onChange={handleChange}
              />
            </label>
            <label className="col-6">
              Količina:
              <input
                type="number"
                name="quantity"
                value={newBrush.quantity}
                onChange={handleChange}
              />
            </label>
            <label className="col-6">
              Ocena:
              <input
                type="number"
                name="rating"
                step="0.1"
                min="0"
                max="5"
                value={newBrush.number}
                onChange={handleChange}
              />
            </label>
            <label className="col-6">
              Slike:
              <input
                type="file"
                name="images"
                multiple
                value={newBrush.images}
                onChange={handleChange}
              />
            </label>
            <label className="col-6">
              Tagovi:
              <input
                type="text"
                placeholder="Pritisnite Enter za dodavanje"
                name="tags"
                value={newBrush.tags}
                onChange={handleChange}
              />
            </label>
            <label className="col-6">
              Kolekcije:
              <input
                type="text"
                placeholder="Pritisnite Enter za dodavanje"
                name="collections"
                value={newBrush.collections}
                onChange={handleChange}
              />
            </label>
            <label className="col-6">
              Cena:
              <input
                type="number"
                name="price"
                value={newBrush.price}
                onChange={handleChange}
              />
            </label>
            <label className="col-6">
              Najprodavaniji:
              <input
                type="checkbox"
                name="topSellers"
                value={newBrush.topSellers}
              />
            </label>
            <label className="col-6">
              Brend:
              <input
                type="text"
                name="brend"
                value={newBrush.brend}
                onChange={handleChange}
              />
            </label>
            <label className="col-6">
              Boje:
              <input
                type="text"
                placeholder="Pritisnite Enter za dodavanje"
                name="colors"
                value={newBrush.colors}
                onChange={handleChange}
              />
            </label>
            <button className="col-2" type="submit">
              Dodaj četkicu
            </button>
          </form>
        </div>
      </div>
      <div>
        {" "}
        {brushes.map((brush) => (
          <li key={brush.id}>
            <h3>{brush.name}</h3>
            <p>Price: {brush.price} RSD</p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default DodajCetkicuForma;
