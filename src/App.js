import "./App.css";
import Advisors from "./components/Advisors/Advisors";
import BigImage from "./components/BigImage/BigImage";
import Community from "./components/Community/Community";

import Header from "./components/Header/Header";
import ImageWithText from "./components/ImageWithText/ImageWithText";
import Immerse from "./components/Immerse/Immerse";
// import Investors from "./components/Investors/Investors";
import MagicRewards from "./components/MagicRewards/MagicRewards";
import PassiveRevenue from "./components/PassiveRevenue/PassiveRevenue";
import SecondSection from "./components/SecondSection/SecondSection";
import Team from "./components/Team/Team";
import TwoMainImages from "./components/TwoMainImages/TwoMainImages";
import VerificationSearch from "./components/VerificationSearch/VerificationSearch";
import VideoImage from "./components/VideoImage/VideoImage";
import QuestionSection from "./components/Questions/QuestionSection.jsx";
import CardSlider from "./components/CardSlider/CardSlider.jsx";
import RoadMap from "./components/RoadMap/RoadMap";

// import HeaderBg from "./components/HeaderBg/HeaderBg";

function App() {
  return (
    <div>
      <div className=" bg-mainBg bg-cover min-h-[100vh]">
        {/* <HeaderBg /> */}
        <Header />
        <SecondSection />
        <Community />
        <Immerse />
        <TwoMainImages />
        <BigImage />
        <ImageWithText />
        <VideoImage />
        <MagicRewards />
        <CardSlider />
        <Team />
        <Advisors />
        {/* <Investors /> */}
        <PassiveRevenue />
        <VerificationSearch />
        <QuestionSection />
        <RoadMap />
      </div>
    </div>
  );
}

export default App;
