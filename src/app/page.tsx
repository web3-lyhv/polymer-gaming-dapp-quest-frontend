"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Header />

      <div className="flex justify-center items-center p-12 h-96 bg-slate-100">
        <div className="flex-1 text-center">
          <a
            href="#"
            className="bg-black text-white px-4 py-2 rounded-lg text-lg"
          >
            Spin Wheel
          </a>
        </div>
        <div className="flex-1">
          <h4 className="text-3xl">
            Earn PolyERC20 Tokens through Wheel Spinning
          </h4>
        </div>
      </div>

      <div className="flex justify-center items-center p-12 h-96">
        <div className="flex-1">
          <h4 className="text-3xl">Purchase NFTs with PolyERC20 Tokens</h4>
        </div>
        <div className="flex-1 text-center">
          <a
            href="#"
            className="bg-black text-white px-4 py-2 rounded-lg text-lg"
          >
            Try now
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center p-12 h-96 bg-slate-100">
        <div className="flex-1 text-center">
          <a
            href="#"
            className="bg-black text-white px-4 py-2 rounded-lg text-lg"
          >
            Try Now
          </a>
        </div>
        <div className="flex-1">
          <h4 className="text-3xl">
            Collect NFTs to earn Points and Climb the Leaderboard
          </h4>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
