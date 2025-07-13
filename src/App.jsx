import Hero from "./Components/Hero/Hero";
import { Navbar } from "./Components/Navbar/Navbar";
import { NavbarBanner } from "./Components/Navbar/NavbarBanner";
import NavCounter from "./Components/NavbarCounter/NavCounter";
import { WhyChooseUs } from "./Components/WhyChooseUs/WhyChooseUs";


import Bannar  from "./Components/Bannar/Bannar";
import SubjectCard from "./Components/SubjectCard/SubjectCard";
import TestBanner from "./Components/TestBanner/TestBanner";
import {Footer} from "./Components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const BannarData1 = {
  image:"/Assets/sto1.png",
  tag: "CUSTOMIZED WITH YOUR NEEDS",
  title: "Personalized Professional Online Tutor on Your Schedule",
  Subtitle:
  "Flexible scheduling that adapts to your busy lifestyle. Choose a time that works for you and connect with professional tutors anytime, anywhere. Empower your learning journey at your own pace.",
  link: "#",
  button: "Get Started",
};

const BannarData2 = {
  image: "/Assets/styo.webp",
  tag: "CUSTOMIZED WITH YOUR SCHEDULE",
  title: "Talented and Qualified Tutors for Every Subject to Serve Your Better",
  Subtitle:
  "Our expert tutors are ready to support you across all subjects, helping you succeed with personalized guidance. Join a thriving community of learners and gain the edge you need to excel.",
  link: "#",
  button: "Get Started",
};

function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <NavbarBanner />
      <Hero />
      <NavCounter />
      <WhyChooseUs />
      <Bannar {...BannarData1} />
      <Bannar {...BannarData2}  reverse={true}/>
      <SubjectCard />
      <TestBanner />
      <Footer />
    </main>
  );
}

export default App;
