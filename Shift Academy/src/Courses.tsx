function Courses() {
  return (
    <section className="courses">
      <h2 className="courses__title">KURSLAR</h2>
      <div className="courses__grid">
        <div id="gridCard1">
          <div className="course-card">
            <div className="course-card__title">FRONTEND</div>
            <div className="course-card__duration">10 OY</div>
          </div>
          <div className="course-card">
            <div className="course-card__title">FRONTEND</div>
            <div className="course-card__duration">10 OY</div>
          </div>
        </div>
        <div id="gridCard2">
          <div className="course-card">
            <div className="course-card__title">FRONTEND</div>
            <div className="course-card__duration">10 OY</div>
          </div>
          <div className="course-card">
            <div className="course-card__title">FRONTEND</div>
            <div className="course-card__duration">10 OY</div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Courses;
