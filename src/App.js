import "./App.css";
import BigImage from "./components/BigImage/BigImage";
import Community from "./components/Community/Community";

import Header from "./components/Header/Header";
import Immerse from "./components/Immerse/Immerse";
import SecondSection from "./components/SecondSection/SecondSection";
import TwoMainImages from "./components/TwoMainImages/TwoMainImages";

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
      </div>
    </div>
  );
}

export default App;
