import Banner from "./component/Banner";
import Cart from "./component/Cart";
import Footer from "./component/Footer";
import Models from "./component/Models";
import Navbar from "./component/Navbar";
import { useState } from "react";

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModels(); // bahire use korate suspence use kora lagce nah but bitore use korle suspence use kora lagbe.

function App() {

  const [activeTab, setActiveTab] = useState('models')
  // console.log(activeTab);
  const [carts, setCarts] = useState([])
  console.log(carts);

  return (
    <>
      <Navbar />
      <Banner />

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent my-5">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="Models"
          onClick={() => setActiveTab('models')}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab('cart')}
        />
      </div>

      {activeTab === 'models' && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts} />}
      {activeTab === 'cart' && <Cart carts={carts} setCarts={setCarts}/>}


      <Footer />
    </>
  );
}
export default App;
