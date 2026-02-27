import saveTheDate from "./assets/save-the-date.png";
import "./styles.css";

export default function App() {
  return (
    <div className="page">
      <main className="frame">
        <img
          className="invite"
          src={saveTheDate}
          alt="Save the Date invitation"
        />
      </main>

      <footer className="header">
        <div className="headerInner">
          <p className="kicker">Save the Date</p>
          <h1 className="title">Cammi & Fernando</h1>
          <p className="sub">
            Puerto Vallarta, Jalisco •{" "}
            <span className="date">May 29, 2027</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
