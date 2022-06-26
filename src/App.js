import "./App.css";

import Header from "./components/Header/Header";
import SecondSection from "./components/SecondSection/SecondSection";
// import HeaderBg from "./components/HeaderBg/HeaderBg";

function App() {
  return (
    <div>
      <div className=" bg-mainBg bg-cover min-h-[100vh]">
        {/* <HeaderBg /> */}
        <Header />
        <SecondSection />
      </div>
    </div>
  );
}

export default App;
