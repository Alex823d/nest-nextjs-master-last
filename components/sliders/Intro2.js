import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, EffectFade]);

const Intro2 = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                effect={"fade"}
                fadeEffect={{
                    crossFade: true,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    prevEl: ".custom_prev_i1",
                    nextEl: ".custom_next_i1",
                }}
                className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1"
            >
                <SwiperSlide>
                    <div
                        className="single-hero-slider single-animation-wrap"
                        style={{
                            backgroundImage:
                                "url(assets/imgs/slider/slider-11.jpg)",
                        }}
                    >
                        <div className="slider-content">
                            <h1 className="display-2 mb-40">
                            ახალი კოლექცია!
                                <br />
                                მალე
                            </h1>
                            <p className="mb-65">არ გამოტოვო საუკეთესო სიახლე</p>
                            <form className="form-subcriber d-flex">
                                <input
                                    type="email"
                                    placeholder="თქვენი ფოსტა"
                                />
                                <button className="btn" type="submit">გამოწერა</button>
                            </form>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="single-hero-slider single-animation-wrap"
                        style={{
                            backgroundImage:
                                "url(assets/imgs/slider/slider-13.jpg)",
                        }}
                    >
                        <div className="slider-content">
                            <h1 className="display-2 mb-40">
                                                აქცია!<br />
                                                ფასდაკლების კუპონი
                                            </h1>
                            <p className="mb-65">მიიღე 50%-მდე ფასდაკლება უფასო კუპონით!</p>
                            <form className="form-subcriber d-flex">
                                <input
                                    type="email"
                                    placeholder="თქვენი ფოსტა"
                                />
                                <button className="btn" type="submit">
                                გამოწერა
                                </button>
                            </form>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="slider-arrow hero-slider-1-arrow">
                <span className="slider-btn slider-prev slick-arrow custom_prev_i1">
                    <i className="fi-rs-angle-left"></i>
                </span>
                <span className="slider-btn slider-next slick-arrow custom_next_i1">
                    <i className="fi-rs-angle-right"></i>
                </span>
            </div>
        </>
    );
};

export default Intro2;
