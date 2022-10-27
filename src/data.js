// images
import Logo from "../src/assets/img/header/logo.svg";
import ResistanceImg from "../src/assets/img/workouts/resistance.png";
import BoxingImg from "../src/assets/img/workouts/boxing.png";
import BodyPumpImg from "../src/assets/img/workouts/body-pump.png";
import YogaImg from "../src/assets/img/workouts/yoga.png";
import FullBodyImg from "../src/assets/img/workouts/full-body.png";
import FitnessImg from "../src/assets/img/workouts/fitness.png";
import BattleRopeImg from "../src/assets/img/workouts/battle-rope.png";
import JoinImg from "../src/assets/img/join/woman.png";
// icons
import UsersIcn from "../src/assets/img/about/icons/users-icn.svg";
import CalendarIcn from "../src/assets/img/workouts/icons/calendar.svg";

export const header = {
  logo: Logo,
};

export const nav = [
  { name: "About", href: "/" },
  { name: "Workouts", href: "/" },
  { name: "Contact", href: "/" },
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
  image: JoinImg,
  title: "Wanna be fit & have fun?",
  subtitle: "It's the first step to change your life. Let me help you!",
  btnText: "Contact me",
};

export const footer = {
  logo: Logo,
  copyrightText: "All rights reserved. Honorata Osip - trener personalny 2022.",
};
