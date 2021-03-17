import "./App.css";
import City from "./City";
import Box from "./Box";


export default function App() {
  return (
    <div className="container">
     <div className="frame shadow">
      <City />
      <Box />
      {/* Placeholder for he new forecast */}
     <div className="row weather-forecast" id="forecast" />
     </div>
     <div>
      <h2 className="signature">
       <a
        className="link"
        href="https://github.com/Avery-techdev/react-weather-app"
        target="_blank">
         Open-source Code
       </a>{" "}
        by Annabell Hauschild
      </h2>
     </div>
    </div>
  );
}