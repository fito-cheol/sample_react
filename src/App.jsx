import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./App.scss";
import styles from "./App.module.scss";
import AppTitle from "@/components/text/AppTitle";

import AppRouter from "@/router/router";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2> {import.meta.env.VITE_APP_TITLE}</h2>
      <span className="mode">Current Mode {import.meta.env.MODE} </span>
      <span className={styles["mode--moduled"]}>
        Current Mode {import.meta.env.MODE}
      </span>
      <AppTitle />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">홈</Link>
              </li>
              <li>
                <Link to="/about">소개</Link>
              </li>
              <li>
                <Link to="/contact">연락처</Link>
              </li>
            </ul>
          </nav>

          <AppRouter />
        </div>
      </Router>
    </>
  );
}

export default App;
