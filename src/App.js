import { useEffect, useState } from "react";
//import Chart from "./Components/Chart";
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavPage from "./Components/NavPage";
import NavBar from "./Components/NavBar";
import Attendance from "./Components/Attendance";
import "./style.css";
//import LoginControl from "./Components/LoginControl";
//import Hoverbtn from "./Components/Hoverbtn";
//import Togglebtn from "./Components/Togglebtn";


function App() {
  // const [chartData, setChartData] = useState({})

  // useEffect(() => {
  //   const fetchPrices = async () => {
  //     const res = await fetch("https://api.coincap.io/v2/assets/?limit=5")
  // const data = await res.json()

  //     setChartData({
  //       labels: data.data.map((crypto) => crypto.name),
  //       datasets: [
  //         {
  //           label: "Price in USD",
  //           data: data.data.map((crypto) => crypto.priceUsd),
  //           backgroundColor: [
  //             "#ffbb11",
  //             "#ecf0f1",
  //             "#50AF95",
  //             "#f3ba2f",
  //             "#2a71d0"
  //           ]
  //         }
  //       ]
  //     });
  //   };
  //   fetchPrices()
  // }, []);

  




    return (
    <div className="App">
      {/* <Chart chartData={chartData} /> */}
 
   
   {/* <Togglebtn/>    */}
    {/* <Hoverbtn/>   */}
      <Router>
        <Switch>

      
          <Route exact path="/" component= {NavBar} />
          <Route exact path="/navpage" component={NavPage} />
          <Route exact path="/attendance" component={Attendance} />
          {/* <Route exact path="/attendance" component={Chart} /> */}
          



        </Switch>
      </Router>
    </div>
 
  
  );
}
export default App;


