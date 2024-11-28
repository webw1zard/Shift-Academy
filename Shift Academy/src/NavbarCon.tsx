import "./App.css";
function NavbarCon() {
  return (
    <div className="whiteC">
      <div className="content">
        <h1 data-aos="fade-up">
          10 OYDA YANGI KASB{" "}
          <p className="bold" id="gg">
            O'RGANING!
          </p>
        </h1>
        <p data-aos="fade-up">
          BUXORODAGI ENG SIFATLI DASTURLASH VA <p>KOMPYUTER KURSLARIGA!</p>
        </p>
        <button
          onClick={() =>
            window.open("https://web.telegram.org/k/#@shiftacademyuz", "_blank")
          }
        >
          BEPUL KONSULTATSIYA!
        </button>
      </div>
    </div>
  );
}
export default NavbarCon;
