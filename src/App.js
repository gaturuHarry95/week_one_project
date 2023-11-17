import './index.css'
import './App.css';
import Card from './Components/Card';
import sedans from "./images/icon-sedans.svg"
import suvs from "./images/icon-suvs.svg"
import luxury from  "./images/icon-luxury.svg"



function App() {
  return (
  <div>

  <Card icons={sedans} title='SEDAN' body='Choose a sedan for its affordability and excellent fuel economy.
  Ideal for cruising in the city or on your next road trip' bgcolor='color1' btnText='color1'/>
  <Card icons={suvs} title='SUVs' body='Take an SUV for its spacious interior,power and versatlity.
  Perfect for your next family vacation and offroad adventures' bgcolor='color2' btnText='color2'/>
  <Card icons={luxury} title='LUXURY' body='Cruise in the best car brands without the bloated prices.
  Enjoy the enhanced comfort of a luxury rental and arrive in style' bgcolor='color3'/>
  </div>
  );
}

export default App;
