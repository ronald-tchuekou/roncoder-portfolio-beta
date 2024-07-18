import { NavLink, Service } from "./util-types";

export const NAV_LINKS: NavLink[] = [
  { url: "/", label: "Presentation" },
  { url: "/services", label: "Services" },
  { url: "/resume", label: "Résumé" },
  { url: "/projects", label: "Projets" },
  { url: "/contact", label: "Contact" },
];

export const SERVICES: Service[] = [
  {
    id: "01",
    key: "ux_ui_design",
    title: "UX/UI Design",
    description:
      "Vous avez besoin d'un prototype modern, épuré, attrayant qui respect le mieux et à la perfection votre charte graphique ?",
  },
  {
    id: "02",
    key: "web_dev",
    title: "Développement web",
    description:
      "Vous avez besoin d'une application web modern, responsive, épuré, attrayant qui respect le mieux et à la perfection votre charte graphique ?",
  },
  {
    id: "03",
    key: "mobile_dev",
    title: "Développement mobile",
    description:
      "Vous avez besoin d’une application mobile modern, épuré attrayant accessible sur iOS et Android et qui respect le mieux et la perfection votre charte graphique ?",
  },
  {
    id: "04",
    key: "seo",
    title: "SEO",
    description:
      "Vous avez besoin gérer le référencement naturel de votre plateforme pour maximiser votre trafic et augmenter vos vente ?",
  },
  {
    id: "05",
    key: "pay_tools_integration",
    title: "Intégration d’outil de paiement",
    description:
      "Vous avez besoin d’ajouter un moyen de paiement dans votre application web et mobile ?",
  },
  {
    id: "06",
    key: "deploy",
    title: "Mise en production",
    description:
      "Vous avez besoin de faire le deployment de votre application pour rendre cela accessible par votre audience ?",
  },
];
