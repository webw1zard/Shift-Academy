function FreeConsul() {
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-section">
          <div className="form-section__image">MAP</div>
        </div>
        <div className="form-section">
          <h2 className="form-section__title">
            Lorem ipsum dolor <p>sit amet consectetur adipisicing</p>{" "}
            <p>elit.Facilis error officiis</p> <p>magnam quaerat molestiae</p>{" "}
            blanditiis sint dicta <p>voluptatibus reprehenderit excepturi?</p>
          </h2>
          <button className="form-section__submit-btn" onClick={() => {
            alert("Sizning So'rovingiz qabul qilindi!")
          }
          }>SO'ROV QOLDIRISH</button>
        </div>
      </div>
    </div>
  );
}
export default FreeConsul;
