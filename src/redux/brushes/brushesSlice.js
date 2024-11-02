import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    naziv: "Pro Blending Brush",
    kratkiOpis: "Savršena četkica za blendanje",
    opis: "Ova četkica omogućava lako blendanje senke...",
    brojNaStanju: 20,
    ocena: 4.8,
    slike: ["slika1.jpg", "slika2.jpg"], // Lista URL-ova slika
    tagoviTipa: ["blendanje", "senke"],
    tagoviTopSelera: true
  }
  // Dodaj još četkica po istom principu
];

const brushesSlice = createSlice({
  name: "brushes",
  initialState,
  reducers: {
    dodajCetkicu: (state, action) => {
      state.push(action.payload);
    },
    azurirajCetkicu: (state, action) => {
      const { id, podaci } = action.payload;
      const cetkica = state.find((item) => item.id === id);
      if (cetkica) {
        Object.assign(cetkica, podaci);
      }
    },
    ukloniCetkicu: (state, action) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    }
  }
});

export const { dodajCetkicu, azurirajCetkicu, ukloniCetkicu } =
  brushesSlice.actions;
export default brushesSlice.reducer;
