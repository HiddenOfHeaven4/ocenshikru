import React from 'react'

const About = () => {

    return (
        <>
            <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="h-100">
                        <h1 class="display-6 mb-5">ОценщикРУ</h1>
                        <div class="row g-4 mb-4">
                            <div class="col-sm-6">
                                <div class="d-flex align-items-center">
                                    <img alt="" class="flex-shrink-0 me-3" src={require("../img/icon/icon-07-primary.png")} />
                                    <h5 class="mb-0">Сотрудничество с аккредитованной оценочной компанией.</h5>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="d-flex align-items-center">
                                    <img alt="" class="flex-shrink-0 me-3" src={require("../img/icon/icon-12-primary.png")} />
                                    <h5 class="mb-0">Гарантия полного соответствия законодательству РФ.</h5>
                                </div>
                            </div>
                        </div>
                        <div class="row g-4 mb-4">
                            <div class="col-sm-6">
                                <div class="d-flex align-items-center">
                                    <img alt="" class="flex-shrink-0 me-3" src={require("../img/icon/icon-11-primary.png")} />
                                    <h5 class="mb-0">Минимизация рисков при оформлении сделок с недвижимым имуществом.</h5>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="d-flex align-items-center">
                                    <img alt="" class="flex-shrink-0 me-3" src={require("../img/icon/icon-13-primary.png")} />
                                    <h5 class="mb-0">Конфиденциальность, надежность и оперативность. </h5>
                                </div>
                            </div>
                        </div>
                        
                        <p class="mb-4">Независимая оценочная компания «ОценщикРУ» на рынке недвижимости с 2014 года и оказывает наиболее популярный на сегодняшний день спектр услуг в данной области. </p>
                        <p>Особенность оценки недвижимости заключается прежде всего в многообразии объектов: дома, квартиры, комнаты, земельные участки, коммерческая недвижимость. И все эти объекты оцениваются по-разному. Например, оценка и продажа дома отличаются от оценки и продажи квартиры уже потому, что дом неотделим от земли. Соответственно, оценщику нужно оценить и земельный участок, и постройки на нем, а собственнику – подготовить комплекты документов на каждый объект. </p>
                        <p>Наши оценщики имеют специальное образование, квалификационные аттестаты по оценке недвижимости и стаж работы, превышающий 10 лет. Закажите оценку, согласуйте время, уточните перечень документов, которые понадобятся. В назначенную дату оценщик выедет на объект, сделает детальное описание, проведет анализ. После чего определит адекватную и точную цену и составит отчет, содержащий актуальные, достоверные сведения. Все консультации предоставляем бесплатно. </p>
                        <div class="border-top mt-4 pt-4">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="d-flex align-items-center">
                                        <div class="btn-lg-square bg-primary rounded-circle me-3">
                                            <i class="fa fa-phone text-white"></i>
                                        </div>
                                        <a class="mb-0">+7 987 375-16-22</a>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="d-flex align-items-center">
                                        <div class="btn-lg-square bg-primary rounded-circle me-3">
                                            <i class="fa fa-envelope text-white"></i>
                                        </div>
                                        <a class="mb-0">info@оценщикру.рф</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="row g-3">
                        <div class="col-6 text-end">
                            <img alt="" class="img-fluid w-100 wow zoomIn" data-wow-delay="0.1s" src={require("../img/about-1.jpg")} style={{marginTop: "25%;" }}/>
                        </div>
                        <div class="col-6 text-start">
                            <img alt="" class="img-fluid w-100 wow zoomIn" data-wow-delay="0.3s" src={require( "../img/about-2.jpg") } />
                        </div>
                        <div class="col-6 text-end">
                            <img alt="" class="img-fluid w-100 wow zoomIn" data-wow-delay="0.5s" src={require("../img/about-3.jpg")}  />
                        </div>
                        <div class="col-6 text-start">
                            <img alt="" class="img-fluid w-100 wow zoomIn" data-wow-delay="0.7s" src={require("../img/about-4.jpg")}  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}
export default About