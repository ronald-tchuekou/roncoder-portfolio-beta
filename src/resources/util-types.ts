import { ReactNode } from "react";

export type NavLink = {
  url: string;
  label: string;
  icon?: React.ReactNode;
};

export type MotionTag =
  | "div"
  | "a"
  | "span"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "li";

export type Service = {
  id: string;
  key: string;
  title: string;
  description: string;
};

export type Skill = {
  id: string;
  title: string;
  icon: React.ReactNode;
};

export type Experience = {
  id: string;
  title: string;
  company: string;
  date: string;
  description: string;
  tasks: string[];
  imageLink?: string;
};

export type Information = {
  id: string;
  label: string;
  value: string;
  isLong: boolean;
  link?: string;
};

export type ProjectLink = {
  icon?: ReactNode;
  label?: string;
  link: string;
};

export type Project = {
  id: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
  company: string;
  gallery: string[];
  links: ProjectLink[];
  date: string;
  authentication?: {
    username: string;
    password: string;
  };
};

export type RequestModel = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  read: boolean;
  createdAt: Date;
};
