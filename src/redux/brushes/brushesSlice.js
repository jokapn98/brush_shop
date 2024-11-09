import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Pro Blending Brush",
    shortDescription: "Savršena četkica za blendanje",
    description: "Ova četkica omogućava lako blendanje senke...", //ALWAYS SAME LENGTH
    quantity: 20,
    rating: 4.8,
    brushImg: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_1280.jpg",
      "slika2.jpg"
    ], // Lista URL-ova slika
    tags: ["blendanje", "senke"],
    price: "1400",
    topSellers: true,
    brend: "Maange"
  },
  {
    id: 2,
    name: "Detailer Brush",
    shortDescription: "Precizna četkica za detalje",
    description: "Idealna za nanošenje senki u uglovima očiju...",
    quantity: 15,
    rating: 4.7,
    brushImg: [
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_1280.jpg",
      "slika4.jpg"
    ],
    tags: ["detalji", "nanošenje"],
    price: "1200",
    topSellers: true,
    brend: "Maange"
  },
  {
    id: 3,
    name: "Flat Shader Brush",
    shortDescription: "Četkica za ravno nanošenje",
    description: "Savršena za nanošenje senki na kapke...",
    quantity: 25,
    rating: 4.6,
    brushImg: ["slika5.jpg", "slika6.jpg"],
    tags: ["ravno", "nanošenje"],
    price: "1300",
    topSellers: false,
    brend: "Maange"
  },
  {
    id: 4,
    name: "Foundation Brush",
    shortDescription: "Četkica za tečni puder",
    description: "Omogućava ravnomerno nanošenje tečnog pudera...",
    quantity: 30,
    rating: 4.9,
    brushImg: ["slika7.jpg", "slika8.jpg"],
    tags: ["puder", "tečni"],
    price: "1500",
    topSellers: true,
    brend: "Maange"
  },
  {
    id: 5,
    name: "Concealer Brush",
    shortDescription: "Četkica za korektor",
    description: "Idealna za prikrivanje nepravilnosti...",
    quantity: 18,
    rating: 4.5,
    brushImg: ["slika9.jpg", "slika10.jpg"],
    tags: ["korektor", "prikrivanje"],
    price: "1100",
    topSellers: false
  },
  {
    id: 6,
    name: "Angled Brush",
    shortDescription: "Četkica sa uglom za konturiranje",
    description: "Savršena za konturiranje lica i obrvica i obrvica i obrva...",
    quantity: 22,
    rating: 4.7,
    brushImg: ["slika11.jpg", "slika12.jpg"],
    tags: ["konturiranje", "obrve"],
    price: "1450",
    topSellers: true,
    brend: "Maange"
  },
  {
    id: 7,
    name: "Blush Brush",
    shortDescription: "Četkica za rumenilo",
    description: "Omogućava lako nanošenje rumenila...",
    quantity: 19,
    rating: 4.6,
    brushImg: ["slika13.jpg", "slika14.jpg"],
    tags: ["rumenilo"],
    price: "1250",
    topSellers: false,
    brend: "Jaff"
  },
  {
    id: 8,
    name: "Lip Brush",
    shortDescription: "Četkica za usne",
    description: "Idealna za precizno nanošenje ruža...",
    quantity: 20,
    rating: 4.4,
    brushImg: ["slika15.jpg", "slika16.jpg"],
    tags: ["usne", "ruž"],
    price: "1150",
    topSellers: false
  },
  {
    id: 9,
    name: "Brow Brush",
    shortDescription: "Četkica za obrve",
    description: "Savršena za oblikovanje i punjenje obrva...",
    quantity: 23,
    rating: 4.5,
    brushImg: ["slika17.jpg", "slika18.jpg"],
    tags: ["obrve", "oblikovanje"],
    price: "1350",
    topSellers: true,
    brend: "Maange"
  },
  {
    id: 10,
    name: "Sponge Blender",
    shortDescription: "Sunđer za blendanje",
    description: "Idealna za postizanje savršenog tena...",
    quantity: 40,
    rating: 4.8,
    brushImg: ["slika19.jpg", "slika20.jpg"],
    tags: ["blendanje", "ten"],
    price: "900",
    topSellers: true,
    brend: "jaff"
  },
  {
    id: 11,
    name: "Setting Brush",
    shortDescription: "Četkica za fiksiranje",
    description: "Savršena za nanošenje pudera u prahu...",
    quantity: 17,
    rating: 4.7,
    brushImg: ["slika21.jpg", "slika22.jpg"],
    tags: ["fiksiranje", "puder"],
    price: "1300",
    topSellers: false,
    brend: "Maange"
  }
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
