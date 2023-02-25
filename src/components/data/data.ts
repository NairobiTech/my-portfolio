// This file contains the data for the projects and navbarbar items.
import { TypeMyData, TypeNavbar } from "./Models";
import portfolio from "../assets/cetricka_ke.png";

export const data: TypeMyData[] = [
  {
    id: 1,
    title: "Cetricka",
    img_url: `${portfolio}`,
    link: "https://cetricka.co.ke",
    gitHub: "https://github.com/NairobiTech/my-portfolio",
  },
];

export const listNavBar: TypeNavbar[] = [
  {
    id: 1,
    item: "Home",
    icon: "uil uil-home",
    href: "home",
  },
  {
    id: 2,
    item: "About",
    icon: "uil uil-user",
    href: "about",
  },
  {
    id: 3,
    item: "Skills",
    icon: "uil uil-file-alt",
    href: "skills",
  },
  {
    id: 4,
    item: "Qualifications",
    icon: "uil uil-graduation-cap",
    href: "qualification",
  },
  {
    id: 5,
    item: "Projects",
    icon: "uil uil-briefcase-alt",
    href: "projects",
  },
  {
    id: 6,
    item: "Contact",
    icon: "uil uil-envelope",
    href: "contact",
  },
];
