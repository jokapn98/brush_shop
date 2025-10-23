Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] =
  exports.ukloniCetkicu =
  exports.azurirajCetkicu =
  exports.addBrush =
    void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = [
  {
    id: 1,
    name: "Pro Blending Brush",
    shortDescription: "Savršena četkica za blendanje",
    description:
      "Ova četkica omogućava lako blendanje senke na kapcima, za savršen izgled.",
    quantity: 20,
    rating: 4.8,
    brushImg: "https://freeimage.host/i/image-942.K8OCyzB",
    tags: ["Real hair", "Eyes"],
    collections: ["Face"],
    price: "1400",
    topSellers: true,
    brend: "Maange",
    colors: ["#FFC0CB"] // roze
  },
  {
    id: 2,
    name: "Detailer Brush",
    shortDescription: "Precizna četkica za detalje",
    description: "Idealna za nanošenje senki i precizne linije.",
    quantity: 15,
    rating: 4.7,
    brushImg:
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_1280.jpg",
    tags: ["Eyes", "Lips"],
    collections: ["Eyes"],
    price: "1200",
    topSellers: true,
    brend: "Maange",
    colors: ["#000000"] // crna
  },
  {
    id: 3,
    name: "Flat Shader Brush",
    shortDescription: "Četkica za ravno nanošenje",
    description: "Savršena za precizno nanošenje senki.",
    quantity: 25,
    rating: 4.6,
    brushImg:
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_1280.jpg",
    tags: ["Eyeshadow"],
    collections: ["Eyes"],
    price: "1300",
    topSellers: false,
    brend: "Maange",
    colors: ["#8B4513"] // braon
  },
  {
    id: 4,
    name: "Foundation Brush",
    shortDescription: "Četkica za tečni puder",
    description: "Za ravnomerno nanošenje pudera bez tragova.",
    quantity: 30,
    rating: 4.9,
    brushImg: ["slika7.jpg", "slika8.jpg"],
    tags: ["Foundation"],
    collections: ["Face"],
    price: "1500",
    topSellers: true,
    brend: "Maange",
    colors: ["#FFD700"] // zlatna
  },
  {
    id: 5,
    name: "Concealer Brush",
    shortDescription: "Četkica za korektor",
    description: "Precizna za prikrivanje sitnih nepravilnosti.",
    quantity: 18,
    rating: 4.5,
    brushImg:
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_1280.jpg",
    tags: ["Lips"],
    collections: ["Face"],
    price: "1100",
    topSellers: false,
    brend: "Maange",
    colors: ["#FAEBD7"] // bež
  },
  {
    id: 6,
    name: "Angled Brush",
    shortDescription: "Četkica sa uglom za konturiranje",
    description: "Savršena za konturiranje i oblikovanje obrva.",
    quantity: 22,
    rating: 4.7,
    brushImg:
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_1280.jpg",
    tags: ["Eyebrow"],
    collections: ["Face"],
    price: "1450",
    topSellers: true,
    brend: "Maange",
    colors: ["#A52A2A"] // tamno braon
  },
  {
    id: 7,
    name: "Blush Brush",
    shortDescription: "Četkica za rumenilo",
    description: "Za lako i ravnomerno nanošenje rumenila.",
    quantity: 19,
    rating: 4.6,
    brushImg:
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_1280.jpg",
    tags: ["Blush"],
    collections: ["Face"],
    price: "1250",
    topSellers: false,
    brend: "Jaff",
    colors: ["#FF6347"] // koralno crvena
  },
  {
    id: 8,
    name: "Lip Brush",
    shortDescription: "Četkica za usne",
    description: "Precizna za nanošenje karmina i sjaja za usne.",
    quantity: 20,
    rating: 4.4,
    brushImg:
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_1280.jpg",
    tags: ["Lips"],
    collections: ["Lips"],
    price: "1150",
    topSellers: false,
    brend: "Maange",
    colors: ["#D3D3D3"] // siva
  },
  {
    id: 9,
    name: "Brow Brush",
    shortDescription: "Četkica za obrve",
    description: "Savršena za oblikovanje i definisanje obrva.",
    quantity: 23,
    rating: 4.5,
    brushImg:
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_1280.jpg",
    tags: ["Eyebrow"],
    collections: ["Eyes"],
    price: "1350",
    topSellers: true,
    brend: "Maange",
    colors: ["#008080"] // tirkiz
  },
  {
    id: 10,
    name: "Sponge Blender",
    shortDescription: "Sunđer za blendanje",
    description: "Za savršen izgled tena bez linija.",
    quantity: 40,
    rating: 4.8,
    brushImg:
      "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_1280.jpg",
    tags: ["Foundation"],
    collections: ["Face"],
    price: "900",
    topSellers: true,
    brend: "Jaff",
    colors: ["#9370DB"] // ljubičasta
  }
];
var brushesSlice = (0, _toolkit.createSlice)({
  name: "brushes",
  initialState: initialState,
  reducers: {
    addBrush: function addBrush(state, action) {
      state.push(action.payload);
    },
    azurirajCetkicu: function azurirajCetkicu(state, action) {
      var _action$payload = action.payload,
        id = _action$payload.id,
        podaci = _action$payload.podaci;
      var cetkica = state.find(function (item) {
        return item.id === id;
      });

      if (cetkica) {
        Object.assign(cetkica, podaci);
      }
    },
    ukloniCetkicu: function ukloniCetkicu(state, action) {
      var id = action.payload;
      return state.filter(function (item) {
        return item.id !== id;
      });
    }
  }
});
var _brushesSlice$actions = brushesSlice.actions,
  addBrush = _brushesSlice$actions.addBrush,
  azurirajCetkicu = _brushesSlice$actions.azurirajCetkicu,
  ukloniCetkicu = _brushesSlice$actions.ukloniCetkicu;
exports.ukloniCetkicu = ukloniCetkicu;
exports.azurirajCetkicu = azurirajCetkicu;
exports.addBrush = addBrush;
var _default = brushesSlice.reducer;
exports["default"] = _default;
