import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Madrid" />
        <footer>
          This project was coded by Sally Lee-Duffy and is{" "}
          <a
            href="https://github.com/sallyelaineleeduffy/react-weather.git"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
