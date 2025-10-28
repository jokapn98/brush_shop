import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Pro Blending Brush",
    shortDescription: "Savršena četkica za blendanje",
    description:
      "Ova četkica omogućava lako blendanje senke na kapcima, za savršen izgled.",
    quantity: 20,
    rating: 4.8,
    brushImg: [
      "https://i.postimg.cc/66LNVtNz/image-950.png",
      "https://i.postimg.cc/8chqPhc7/image-942.jpg",
      "https://i.postimg.cc/L8znK72b/IMG-9617.jpg"
    ],
    tags: ["Real hair", "Eyes"],
    collections: ["Face"],
    price: "1400",
    topSellers: true,
    brend: "Maange",
    colors: ["#FFC0CB"]
  },
  {
    id: 2,
    name: "Detailer Brush",
    shortDescription: "Precizna četkica za detalje",
    description: "Idealna za nanošenje senki i precizne linije.",
    quantity: 15,
    rating: 4.7,
    brushImg: [
      "https://i.postimg.cc/66LNVtNz/image-950.png",
      "https://i.postimg.cc/mD6ryWyY/IMG-9618.jpg"
    ],
    tags: ["Eyes", "Lips"],
    collections: ["Eyes"],
    price: "1200",
    topSellers: true,
    brend: "Maange",
    colors: ["#000000"]
  },
  {
    id: 3,
    name: "Flat Shader Brush",
    shortDescription: "Četkica za ravno nanošenje",
    description: "Savršena za precizno nanošenje senki.",
    quantity: 25,
    rating: 4.6,
    brushImg: [
      "https://i.postimg.cc/66LNVtNz/image-950.png",
      "https://i.postimg.cc/ry3mdcm8/IMG-9627.jpg"
    ],
    tags: ["Eyeshadow"],
    collections: ["Eyes"],
    price: "1300",
    topSellers: false,
    brend: "Maange",
    colors: ["#8B4513"]
  },
  {
    id: 4,
    name: "Foundation Brush",
    shortDescription: "Četkica za tečni puder",
    description: "Za ravnomerno nanošenje pudera bez tragova.",
    quantity: 30,
    rating: 4.9,
    brushImg: [
      "https://i.postimg.cc/8chqPhc7/image-942.jpg",
      "https://i.postimg.cc/mD6ryWyY/IMG-9618.jpg"
    ],
    tags: ["Foundation"],
    collections: ["Face"],
    price: "1500",
    topSellers: true,
    brend: "Maange",
    colors: ["#FFD700"]
  },
  {
    id: 5,
    name: "Concealer Brush",
    shortDescription: "Četkica za korektor",
    description: "Precizna za prikrivanje sitnih nepravilnosti.",
    quantity: 18,
    rating: 4.5,
    brushImg: [
      "https://i.postimg.cc/L8znK72b/IMG-9617.jpg",
      "https://i.postimg.cc/66LNVtNz/image-950.png"
    ],
    tags: ["Face"],
    collections: ["Face"],
    price: "1100",
    topSellers: false,
    brend: "Maange",
    colors: ["#FAEBD7"]
  },
  {
    id: 6,
    name: "Angled Brush",
    shortDescription: "Četkica sa uglom za konturiranje",
    description: "Savršena za konturiranje i oblikovanje obrva.",
    quantity: 22,
    rating: 4.7,
    brushImg: [
      "https://i.postimg.cc/8chqPhc7/image-942.jpg",
      "https://i.postimg.cc/ry3mdcm8/IMG-9627.jpg",
      "https://i.postimg.cc/L8znK72b/IMG-9617.jpg"
    ],
    tags: ["Eyebrow"],
    collections: ["Face"],
    price: "1450",
    topSellers: true,
    brend: "Maange",
    colors: ["#A52A2A"]
  },
  {
    id: 7,
    name: "Blush Brush",
    shortDescription: "Četkica za rumenilo",
    description: "Za lako i ravnomerno nanošenje rumenila.",
    quantity: 19,
    rating: 4.6,
    brushImg: [
      "https://i.postimg.cc/mD6ryWyY/IMG-9618.jpg",
      "https://i.postimg.cc/ry3mdcm8/IMG-9627.jpg"
    ],
    tags: ["Blush"],
    collections: ["Face"],
    price: "1250",
    topSellers: false,
    brend: "Jaff",
    colors: ["#FF6347"]
  },
  {
    id: 8,
    name: "Lip Brush",
    shortDescription: "Četkica za usne",
    description: "Precizna za nanošenje karmina i sjaja za usne.",
    quantity: 20,
    rating: 4.4,
    brushImg: ["https://i.postimg.cc/L8znK72b/IMG-9617.jpg"],
    tags: ["Lips"],
    collections: ["Lips"],
    price: "1150",
    topSellers: false,
    brend: "Maange",
    colors: ["#D3D3D3"]
  },
  {
    id: 9,
    name: "Brow Brush",
    shortDescription: "Četkica za obrve",
    description: "Savršena za oblikovanje i definisanje obrva.",
    quantity: 23,
    rating: 4.5,
    brushImg: [
      "https://i.postimg.cc/66LNVtNz/image-950.png",
      "https://i.postimg.cc/mD6ryWyY/IMG-9618.jpg",
      "https://i.postimg.cc/ry3mdcm8/IMG-9627.jpg"
    ],
    tags: ["Eyebrow"],
    collections: ["Eyes"],
    price: "1350",
    topSellers: true,
    brend: "Maange",
    colors: ["#008080"]
  },
  {
    id: 10,
    name: "Sponge Blender",
    shortDescription: "Sunđer za blendanje",
    description: "Za savršen izgled tena bez linija.",
    quantity: 40,
    rating: 4.8,
    brushImg: [
      "https://i.postimg.cc/8chqPhc7/image-942.jpg",
      "https://i.postimg.cc/L8znK72b/IMG-9617.jpg"
    ],
    tags: ["Foundation"],
    collections: ["Face"],
    price: "900",
    topSellers: true,
    brend: "Jaff",
    colors: ["#9370DB"]
  },

  // --- Novi proizvodi 11–20 ---
  {
    id: 11,
    name: "Powder Brush",
    shortDescription: "Četkica za puder",
    description: "Meka i gusta četkica za završni sloj pudera.",
    quantity: 28,
    rating: 4.9,
    brushImg: ["https://i.postimg.cc/ry3mdcm8/IMG-9627.jpg"],
    tags: ["Powder"],
    collections: ["Face"],
    price: "1550",
    topSellers: true,
    brend: "Jaff",
    colors: ["#FFE4B5"]
  },
  {
    id: 12,
    name: "Contour Brush",
    shortDescription: "Četkica za konturisanje lica",
    description: "Savršeno oblikuje konture lica za definisan izgled.",
    quantity: 16,
    rating: 4.6,
    brushImg: [
      "https://i.postimg.cc/mD6ryWyY/IMG-9618.jpg",
      "https://i.postimg.cc/L8znK72b/IMG-9617.jpg"
    ],
    tags: ["Contour"],
    collections: ["Face"],
    price: "1450",
    topSellers: false,
    brend: "Maange",
    colors: ["#8B0000"]
  },
  {
    id: 13,
    name: "Fan Brush",
    shortDescription: "Lepezasta četkica za hajlajter",
    description: "Savršena za nanošenje hajlajtera i skidanje viška pudera.",
    quantity: 21,
    rating: 4.7,
    brushImg: ["https://i.postimg.cc/8chqPhc7/image-942.jpg"],
    tags: ["Highlighter"],
    collections: ["Face"],
    price: "1300",
    topSellers: false,
    brend: "Jaff",
    colors: ["#DAA520"]
  },
  {
    id: 14,
    name: "Precision Liner Brush",
    shortDescription: "Tanka četkica za eyeliner",
    description: "Precizna četkica za tečni ajlajner i gel formule.",
    quantity: 18,
    rating: 4.8,
    brushImg: [
      "https://i.postimg.cc/L8znK72b/IMG-9617.jpg",
      "https://i.postimg.cc/ry3mdcm8/IMG-9627.jpg"
    ],
    tags: ["Eyes"],
    collections: ["Eyes"],
    price: "1150",
    topSellers: true,
    brend: "Maange",
    colors: ["#000000"]
  },
  {
    id: 15,
    name: "Kabuki Brush",
    shortDescription: "Kompaktna četkica za putovanja",
    description: "Savršena za nanošenje mineralnog pudera.",
    quantity: 32,
    rating: 4.9,
    brushImg: ["https://i.postimg.cc/mD6ryWyY/IMG-9618.jpg"],
    tags: ["Travel", "Powder"],
    collections: ["Face"],
    price: "1600",
    topSellers: true,
    brend: "Jaff",
    colors: ["#B8860B"]
  },
  {
    id: 16,
    name: "Crease Brush",
    shortDescription: "Četkica za pregib oka",
    description: "Za meko blendanje senke u pregibu kapka.",
    quantity: 25,
    rating: 4.6,
    brushImg: ["https://i.postimg.cc/L8znK72b/IMG-9617.jpg"],
    tags: ["Eyes"],
    collections: ["Eyes"],
    price: "1250",
    topSellers: false,
    brend: "Maange",
    colors: ["#D2B48C"]
  },
  {
    id: 17,
    name: "Dual-Ended Brush",
    shortDescription: "Dvosmerna četkica za oči i obrve",
    description: "Jedna strana za senke, druga za definisanje obrva.",
    quantity: 14,
    rating: 4.5,
    brushImg: [
      "https://i.postimg.cc/ry3mdcm8/IMG-9627.jpg",
      "https://i.postimg.cc/8chqPhc7/image-942.jpg"
    ],
    tags: ["Eyes", "Eyebrow"],
    collections: ["Eyes"],
    price: "1350",
    topSellers: false,
    brend: "Jaff",
    colors: ["#708090"]
  },
  {
    id: 18,
    name: "Mini Detail Brush",
    shortDescription: "Mala četkica za detaljan rad",
    description: "Za precizne ivice i sitne površine.",
    quantity: 20,
    rating: 4.4,
    brushImg: [
      "https://i.postimg.cc/L8znK72b/IMG-9617.jpg",
      "https://i.postimg.cc/mD6ryWyY/IMG-9618.jpg"
    ],
    tags: ["Lips", "Eyes"],
    collections: ["Detail"],
    price: "950",
    topSellers: false,
    brend: "Maange",
    colors: ["#CD853F"]
  },
  {
    id: 19,
    name: "Buffer Brush",
    shortDescription: "Četkica za blendanje pudera",
    description: "Za besprekoran prelaz i prirodan izgled tena.",
    quantity: 30,
    rating: 4.9,
    brushImg: [
      "https://i.postimg.cc/8chqPhc7/image-942.jpg",
      "https://i.postimg.cc/ry3mdcm8/IMG-9627.jpg"
    ],
    tags: ["Foundation"],
    collections: ["Face"],
    price: "1550",
    topSellers: true,
    brend: "Maange",
    colors: ["#FFEBCD"]
  }
];

const brushesSlice = createSlice({
  name: "brushes",
  initialState,
  reducers: {
    addBrush: (state, action) => {
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

export const { addBrush, azurirajCetkicu, ukloniCetkicu } =
  brushesSlice.actions;
export default brushesSlice.reducer;
