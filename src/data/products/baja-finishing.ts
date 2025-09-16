import baja from "../../assets/products/baja-finishing/baja/baja.png";
import baja1 from "../../assets/products/baja-finishing/baja/baja-1.jpg";
import baja2 from "../../assets/products/baja-finishing/baja/baja-2.jpg";
import baja3 from "../../assets/products/baja-finishing/baja/baja-3.jpg";

import glugu from "../../assets/products/baja-finishing/glugu/kayu glugu.jpg";

import granitSerenity from "../../assets/products/baja-finishing/granit-serenity/granit-serenity.jpg";

import gypsum from "../../assets/products/baja-finishing/gypsum/harga-gypsum-per-lembar.jpg";

import holoGalvanis from "../../assets/products/baja-finishing/holo-galvanis/holo galvanis.jpeg";

import holoPlafon from "../../assets/products/baja-finishing/holo-plafon/plafon-baja-ringan-hollow.jpg";

import spandekPasir from "../../assets/products/baja-finishing/spandek-pasir/spandek pasir.jpeg";

import usuk from "../../assets/products/baja-finishing/usuk/kayu-usuk.jpg";

export const products = [
  {
    id: "PR006",
    slug: "baja",
    name: "Baja",
    price: "Rp 150.000 / tiang",
    priceCount: 150000,
    stok: "11",
    brand: "Puma",
    imageSrc: baja,
    imageAlt: "Baja",
    images: [
      {src: baja1, alt: "Project 1A"},
      {src: baja2, alt: "Project 1B"},
      {src: baja3, alt: "Project 1C"}
    ],
    redirect: "/products/baja-finishing/baja",
    description: "Baja kokoh untuk dih..",
    longDesc: "aowkaokwokwoakwokaow apa si baja2 in aja neh lakslakslasklask",
    minOrder: "10 tiang",
    freeOngkir: "30 tiang"
  },
  {
    id: "PR007",
    slug: "glugu",
    name: "Glugu",
    price: "Rp 30.000 / balok",
    priceCount: 150000,
    stok: "11",
    brand: "Puma",
    imageSrc: glugu,
    imageAlt: "Glugu",
    images: [
      {src: baja1, alt: "Project 1A"},
      {src: baja2, alt: "Project 1B"},
      {src: baja3, alt: "Project 1C"}
    ],  
    redirect: "/products/baja-finishing/glugu",
    description: "Glugu kokoh untuk dih..",
    longDesc: "Glugu long desc kajkajskajsqwqowoqwiqoalslakslasklasklaskl",
    minOrder: "5 balok",
    freeOngkir: "25 balok"
  },
  {
    id: "PR008",
    slug: "granit-serenity",
    name: "Granit Serenity",
    price: "Rp 75.000 / m",
    priceCount: 75000,
    stok: "21",
    brand: "Hummer",
    imageSrc: granitSerenity,
    imageAlt: "Granit Serenity",
    images: [
      {src: baja1, alt: "Project 1A"},
      {src: baja2, alt: "Project 1B"},
      {src: baja3, alt: "Project 1C"}
    ],
    redirect: "/products/baja-finishing/granit-serenity",
    description: "Granit Serenity kokoh untuk dih..",
    longDesc: "Granit serenity aowkaokwokwoakwokaow apa si baja2 in aja neh lakslakslasklask",
    minOrder: "10 m",
    freeOngkir: "30 m"
  },
  {
    id: "PR009",
    slug: "gypsum",
    name: "Gypsum",
    price: "Rp 120.000",
    priceCount: 120000,
    stok: "3",
    brand: "Asics",
    imageSrc: gypsum,
    imageAlt: "Gypsum",
    images: [
      {src: baja1, alt: "Project 1A"},
      {src: baja2, alt: "Project 1B"},
      {src: baja3, alt: "Project 1C"}
    ],
    redirect: "/products/baja-finishing/gypsum",
    description: "Gypsum kokoh untuk dih..",
    longDesc: "Gypsum aowkaokwokwoakwokaow apa si baja2 in aja neh lakslakslasklask",
    minOrder: "10",
    freeOngkir: "65"
  },
  {
    id: "PR010",
    slug: "holo-galvanis",
    name: "Holo Galvanis",
    price: "Rp 130.000",
    priceCount: 130000,
    stok: "14",
    brand: "Adidas",
    imageSrc: holoGalvanis,
    imageAlt: "Holo Galvanis",
    images: [
      {src: baja1, alt: "Project 1A"},
      {src: baja2, alt: "Project 1B"},
      {src: baja3, alt: "Project 1C"}
    ],
    redirect: "/products/baja-finishing/holo-galvanis",
    description: "Holo galvanis kokoh untuk dih..",
    longDesc: "Holo galvanis aowkaokwokwoakwokaow apa si baja2 in aja neh lakslakslasklask",
    minOrder: "40",
    freeOngkir: "60"
  },
  {
    id: "PR011",
    slug: "holo-plafon",
    name: "Holo Plafon",
    price: "Rp 30.000",
    priceCount: 30000,
    stok: "77",
    brand: "SIG",
    imageSrc: holoPlafon,
    imageAlt: "Holo Plafon",
    images: [
      {src: baja1, alt: "Project 1A"},
      {src: baja2, alt: "Project 1B"},
      {src: baja3, alt: "Project 1C"}
    ],
    redirect: "/products/baja-finishing/holo-plafon",
    description: "Holo plafon kokoh untuk dih..",
    longDesc: "Holo plafon aowkaokwokwoakwokaow apa si baja2 in aja neh lakslakslasklask",
    minOrder: "40",
    freeOngkir: "60"
  },
  {
    id: "PR012",
    slug: "spandek-pasir",
    name: "Spandek Pasir",
    price: "Rp 40.000",
    priceCount: 40000,
    stok: "13",
    brand: "SIG",
    imageSrc: spandekPasir,
    imageAlt: "Spandek Pasir",
    images: [
      {src: baja1, alt: "Project 1A"},
      {src: baja2, alt: "Project 1B"},
      {src: baja3, alt: "Project 1C"}
    ],
    redirect: "/products/baja-finishing/spandek-pasir",
    description: "Spandek pasir kokoh untuk dih..",
    longDesc: "Spandek pasir aowkaokwokwoakwokaow apa si baja2 in aja neh lakslakslasklask",
    minOrder: "25",
    freeOngkir: "55"
  },
  {
    id: "PR013",
    slug: "usuk",
    name: "Usuk",
    price: "Rp 400.000",
    priceCount: 400000,
    stok: "14",
    brand: "Lacoste",
    imageSrc: usuk,
    imageAlt: "Usuk",
    images: [
      {src: baja1, alt: "Project 1A"},
      {src: baja2, alt: "Project 1B"},
      {src: baja3, alt: "Project 1C"}
    ],
    redirect: "/products/baja-finishing/usuk",
    description: "Usuk kokoh untuk dih..",
    longDesc: "Usuk aowkaokwokwoakwokaow apa si baja2 in aja neh lakslakslasklask",
    minOrder: "2",
    freeOngkir: "5"
  },
];
