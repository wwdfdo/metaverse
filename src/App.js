import "./App.css";
import Cart from "./components/CartIcon/Cart";
import Logo from "./components/Logo/Logo";

function App() {
  return (
    <div>
      <div>
        <header className="h-[100vh] w-full bg-[#000]">
          <div>
            <nav className=" flex w-3/4 justify-between mx-auto min-h-[64px] items-center">
              <div className="flex justify-between gap-8 items-center">
                <Logo />
                <div className="flex gap-16">
                  <div> About</div>
                  <div>Tournaments</div>
                  <div>Buy NFTs</div>
                  <div>$WZRD Token</div>
                  <div>Patners</div>
                </div>
              </div>

              <Cart />
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
