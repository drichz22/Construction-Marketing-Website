import pasirLumajang from "../../assets/products/pasir-semen/pasir-lumajang/pasir lumajang.jpg";
import pasirLumajang1 from "../../assets/products/pasir-semen/pasir-lumajang/pasir-lumajang-1.jpg";
import pasirLumajang2 from "../../assets/products/pasir-semen/pasir-lumajang/pasir-lumajang-2.jpg";
import pasirLumajang3 from "../../assets/products/pasir-semen/pasir-lumajang/pasir-lumajang-3.png";

import bataRingan from "../../assets/products/pasir-semen/bata-ringan/bata.jpg";

import koralTinsla from "../../assets/products/pasir-semen/koral-tinsla/koral tinsla.jpg";

import semenGresik from "../../assets/products/pasir-semen/semen-gresik/semn gresik.jpeg";

import semenHebel from "../../assets/products/pasir-semen/semen-hebel/semen hebel.jpg";

export const products = [
  {
    id: "PR001",
    slug: "pasir-lumajang",
    name: "Pasir Lumajang",
    price: "Rp 350.000 / m³",
    priceCount: 350000,
    stok: "25",
    brand: "Nike",
    imageSrc: pasirLumajang,
    imageAlt: "Pasir Lumajang",
    images: [
      {src: pasirLumajang1, alt: "Project 1A"},
      {src: pasirLumajang2, alt: "Project 1B"},
      {src: pasirLumajang3, alt: "Project 1C"}
    ],
    redirect: "/products/pasir-semen/pasir-lumajang",
    description: "Pasir halus untuk bahan campuran bata dan mortar.",
    longDesc: "Pasir ini berfungsi untuk menambah antioksidan dalam tubuh or smthg like that lolll.akkkkkkkkkkkkkkkjskajskasjkqiqiwuqiwuqiwuqiwuiqwuiqwuiqwuiquwaksjqo  iwp wuio  quwoi uwoi  uo",
    minOrder: "2 m³",
    freeOngkir: "10 m³"
  },
  {
    id: "PR002",
    slug: "bata-ringan",
    name: "Bata Ringan",
    price: "Rp 20.000 / blok",
    priceCount: 20000,
    stok: "500",
    brand: "Adidas",
    imageSrc: bataRingan,
    imageAlt: "Bata Ringan",
    images: [
      {src: pasirLumajang1, alt: "Project 1A"},
      {src: pasirLumajang2, alt: "Project 1B"},
      {src: pasirLumajang3, alt: "Project 1C"}
    ],
    redirect: "/products/pasir-semen/bata-ringan",
    description: "Bata ringan desc",
    longDesc: "Bata ringan long desc",
    minOrder: "20 blok",
    freeOngkir: "50 blok"
  },
  {
    id: "PR003",
    slug: "koral-tinsla",
    name: "Koral Tinsla",
    price: "Rp 34.500 / karung",
    priceCount: 34500,
    stok: "50",
    brand: "Louis Vuitton",
    imageSrc: koralTinsla,
    imageAlt: "Koral Tinsla",
    images: [
      {src: pasirLumajang1, alt: "Project 1A"},
      {src: pasirLumajang2, alt: "Project 1B"},
      {src: pasirLumajang3, alt: "Project 1C"}
    ],
    redirect: "/products/pasir-semen/koral-tinsla",
    description: "Koral tinsla untuk bahan campuran bata dan mortar.",
    longDesc: "Koral tinsla ini berfungsi untuk menambah antioksidan dalam tubuh or smthg like that lolll.",
    minOrder: "13 karung",
    freeOngkir: "60 karung"
  },
  {
    id: "PR004",
    slug: "semen-gresik",
    name: "Semen Gresik 40kg",
    price: "Rp 600.000 /sak",
    priceCount: 600000,
    stok: "1500",
    brand: "SIG",
    imageSrc: semenGresik,
    imageAlt: "Semen Gresik",
    images: [
      {src: pasirLumajang1, alt: "Project 1A"},
      {src: pasirLumajang2, alt: "Project 1B"},
      {src: pasirLumajang3, alt: "Project 1C"}
    ],
    redirect: "/products/pasir-semen/semen-gresik",
    description: "Semen gresik untuk bahan campuran bata dan mortar.",
    longDesc: "Semen gresik ini berfungsi untuk menambah antioksidan dalam tubuh or smthg like that lolll.",
    minOrder: "10 sak",
    freeOngkir: "200 sak"
  },
  {
    id: "PR005",
    slug: "semen-hebel",
    name: "Semen Hebel",
    price: "Rp 250.000 / sak",
    priceCount: 250000,
    stok: "1200",
    brand: "Mercedes-Benz",
    imageSrc: semenHebel,
    imageAlt: "Semen Hebel",
    images: [
      {src: pasirLumajang1, alt: "Project 1A"},
      {src: pasirLumajang2, alt: "Project 1B"},
      {src: pasirLumajang3, alt: "Project 1C"}
    ],
    redirect: "/products/pasir-semen/semen-hebel",
    description: "Semen hebel untuk bahan campuran bata dan mortar.",
    longDesc: "Semen hebel ini berfungsi untuk menambah antioksidan dalam tubuh or smthg like that lolll.",
    minOrder: "15 sak",
    freeOngkir: "350 sak"
  }
];
