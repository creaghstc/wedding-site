import './App.css';
import '@fontsource/parisienne';
import '@fontsource-variable/merriweather';
import mus from "./images/welcome.png";
import {TabMenu} from "./components/menu";

export function App() {
  return (
      <div>
          <div className={"banner"}>
              <div className={"headerContainer"}>
                  <div className={"headerContent"}>
                      <h1 style={{marginBottom: "0px"}}>Mairéad & Conor</h1>
                      <div style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                      }}>
                          <h3 style={{marginTop: "0px", textAlign: "center"}}>1st May 2026</h3>
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


      </div>
  );
}