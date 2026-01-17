import './App.css';
import '@fontsource/parisienne';
import '@fontsource-variable/merriweather';
import mus from "./images/welcome.png";
import {TabMenu} from "./components/menu";

export function App() {
  return (
      <div>
          <div className={"banner"}></div>
          <div className={"headerContainer"}>
              <div className={"headerContent"}>
                  <h1 style={{marginBottom: "0px"}}>Conor & Mairead</h1>
                  <div style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                  }}>
                      <p style={{marginTop: "0px", textAlign: "center"}}>1st May 2026</p>

                  </div>

              </div>

          </div>

          <div className={"mainContainer"}>
              <img src={mus} alt={"dog with sign"} style={{
                  height: "15vmin"
              }}/>
              <TabMenu></TabMenu>
          </div>
      </div>
  );
}