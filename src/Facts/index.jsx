import React from "react";

const Facts = () => {
  return (
    <>
      <div
        class="container-fluid facts my-5 py-5"
        data-parallax="scroll"
        data-image-src={require("../img/carousel-2.jpg")}
      >
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-sm-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <h1 class="display-4 text-white" data-toggle="counter-up">
              +300
              </h1>
              <span class="text-primary">Довольных клиентов</span>
            </div>
            <div class="col-sm-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <h1 class="display-4 text-white" data-toggle="counter-up">
              +10
              </h1>
              <span class="text-primary">Партнёров</span>
            </div>
            <div class="col-sm-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <h1 class="display-4 text-white" data-toggle="counter-up">
              +6
              </h1>
              <span class="text-primary">Услуг оценки</span>
            </div>
            <div class="col-sm-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
              <h1 class="display-4 text-white" data-toggle="counter-up">
              +10
              </h1>
              <span class="text-primary">Квалифицированных сотрудников</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Facts;
