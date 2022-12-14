import React from "react";

const Footer = () => {
  return (
    <>
      <div
        class="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-md-12">
              <h1 class="text-white mb-4">
                <img
                  class="img-fluid me-3"
                  src="img/icon/icon-02-light.png"
                  alt=""
                />
                ОценщикРУ
              </h1>
              <span>
                Независимая оценочная компания «ОценщикРУ»
              </span>
            </div>
             <div class="col-lg-3 col-md-6">
              <h5 class="text-light mb-4">Наш офис</h5>
              <p>
                <i class="fa fa-map-marker-alt me-3"></i>410007, Саратовская обл., г. Саратов, ул. им. Чехова А.П., д. 6В, пом. 2
              </p>
              <p>
                <i class="fa fa-phone-alt me-3"></i>+7 987 375-16-22
              </p>
              <p>
                <i class="fa fa-envelope me-3"></i>info@оценщикру.рф
              </p>
            </div>
           

            <div class="col-lg-3 col-md-6">
              <h5 class="text-light mb-4">Наши услуги</h5>
              <a class="btn btn-link" href="/услуги">
              Купля-продажа, мена, дарение.
              </a>
              <a class="btn btn-link" href="/услуги">
              Залог, в том числе ипотека.
              </a>
              <a class="btn btn-link" href="/услуги">
              Оценка коммерческой недвижимости.
              </a>
              <a class="btn btn-link" href="/услуги">
              Оспаривание кадастровой стоимости.
              </a>
              <a class="btn btn-link" href="/услуги">
              Судебные споры, включая раздел имущества.
              </a>
              <a class="btn btn-link" href="/услуги">
              Оценка для нотариуса. Оценка нематериальных активов.
              </a>

            </div>
            <div class="col-lg-3 col-md-6">
              <h5 class="text-light mb-4">Плюсы работы с нами</h5>
              <a class="btn btn-link" href="/услуги">
              Сотрудничество с аккредитованной оценочной компанией.
              </a>
              <a class="btn btn-link" href="/услуги">
              Гарантия полного соответствия законодательству РФ.
              </a>
              <a class="btn btn-link" href="/услуги">
              Минимизация рисков при оформлении сделок с недвижимым имуществом.
              </a>
              <a class="btn btn-link" href="/услуги">
              Конфиденциальность, надежность и оперативность. 
              </a>

            </div>
            <div class="col-lg-3 col-md-6">
              <h5 class="text-light mb-4">Страницы сайта</h5>
              <a class="btn btn-link" href="/о-нас">
                Главная страница
              </a>
              <a class="btn btn-link" href="/контакты">
                Связаться с нами
              </a>
              <a class="btn btn-link" href="/услуги">
                Наши услуги
              </a>
              <a class="btn btn-link" href="/о-нас">
                О нас
              </a>
            </div>
          </div>
        </div>
        <div class="container-fluid copyright">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center text-md-start mb-3 mb-md-0">
                &copy; ОценщикРУ.РФ
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
