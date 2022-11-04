// images
import Logo from "../src/assets/img/header/logo.svg";
import ResistanceImg from "../src/assets/img/workouts/resistance.png";
import BoxingImg from "../src/assets/img/workouts/boxing.png";
import BodyPumpImg from "../src/assets/img/workouts/body-pump.png";
import YogaImg from "../src/assets/img/workouts/yoga.png";
import FullBodyImg from "../src/assets/img/workouts/full-body.png";
import FitnessImg from "../src/assets/img/workouts/fitness.png";
import BattleRopeImg from "../src/assets/img/workouts/battle-rope.png";
// icons
import UsersIcn from "../src/assets/img/about/icons/users-icn.svg";
import CalendarIcn from "../src/assets/img/workouts/icons/calendar.svg";
// contact icons
import { MdMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export const header = {
  logo: Logo,
};

export const nav = [
  { name: "About", href: "#about" },
  { name: "Workouts", href: "#workouts" },
  { name: "Contact", href: "#contact" },
];

export const banner = {
  titlePart1: "Get the best part of your day",
  titlePart2: "– you fit here.",
  subtitle:
    "We provide serious fitness but within a fun and friendly, safe space.",
  textBtn: "Contact me",
  img: "",
};

export const about = {
  icon: UsersIcn,
  title: "Our misson",
  subtitle1:
    "We are distinguished by our unsurpassed motivating atmosphere, knowledgeable staff, and premier exercise equipment, which supports our members in meeting their individual fitness goals.",
  subtitle2:
    "The strength of our heart-felt identity is utilized to inspire every person that steps foot into our gyms to better themselves.",
  link: "Contact me",
};

export const workouts = {
  icon: CalendarIcn,
  title: "Training programs",
  programs: [
    {
      image: ResistanceImg,
      name: "Resistance",
    },
    {
      image: BoxingImg,
      name: "Boxing",
    },
    {
      image: BodyPumpImg,
      name: "Body Pump",
    },
    {
      image: YogaImg,
      name: "Yoga",
    },
    {
      image: FullBodyImg,
      name: "Full Body",
    },
    {
      image: FitnessImg,
      name: "Fitness",
    },
    {
      image: BattleRopeImg,
      name: "Battle Rope",
    },
  ],
};

export const contact = {
  title: "Contact",
  contacts: [
    {
      name: "Instagram",
      data: "@honorataosip",
      href: "https://www.instagram.com/honorataosip/",
      text: "text me",
      icon: <AiFillInstagram />,
    },
    {
      name: "email",
      data: "honorataosip@op.pl",
      href: "mailto:honorataosip@op.pl",
      text: "send an email",
      icon: <MdMail />,
    },
    {
      name: "phone",
      data: "(+48) 698-117-276",
      href: "tel:+48698117276",
      text: "call me",
      icon: <FaPhoneAlt />,
    },
  ],
};

export const footer = {
  logo: Logo,
  copyrightText: "Trener personalny © 2022 ",
};
