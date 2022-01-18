import Link from "next/link";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


SwiperCore.use([Navigation, Autoplay]);

const CategorySlider2 = () => {
    var data = [
        {
            id: 1,
            title: "კატეგორია 1",
            img: "category-1.svg",
            
        },
        {
            id: 2,
            title: "კატეგორია 2",
            img: "category-2.svg",
            
        },
        {
            id: 3,
            title: "კატეგორია 3",
            img: "category-3.svg",
            
        },
        {
            id: 4,
            title: "კატეგორია 4",
            img: "category-4.svg",
            
        },
        {
            id: 5,
            title: "კატეგორია 5",
            img: "category-5.svg",
            
        },
        {
            id: 6,
            title: "კატეგორია 6",
            img: "category-6.svg",
            
        },
        {
            id: 7,
            title: "კატეგორია 7",
            img: "category-7.svg",
            
        },
        {
            id: 8,
            title: "კატეგორია 8",
            img: "category-8.svg",
            
        },
        {
            id: 9,
            title: "კატეგორია 9",
            img: "category-9.svg",
            
        },
        {
            id: 10,
            title: "კატეგორია 10",
            img: "category-10.svg",
            
        },
        {
            id: 11,
            title: "კატეგორია 11",
            img: "category-11.svg",
            
        },
    ];
    return (
        <>
            <Swiper
                slidesPerView={8}
                spaceBetween={0}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={{
                    prevEl: ".custom_prev_ct1",
                    nextEl: ".custom_next_ct1",
                }}
                className="custom-class"
            >
                {data.map((item, i) => (
                    <SwiperSlide>
                        <div className="card-1">
                            <figure className=" img-hover-scale overflow-hidden">
                               <Link href="/shop-grid-right">
                                    <a>
                                        <img
                                            src={`assets/imgs/theme/icons/${item.img}`}
                                            alt=""
                                        />
                                    </a>
                                </Link>
                            </figure>
                            <h6>
                               <Link href="/shop-grid-right">
                                    <a>{item.title}</a>
                                </Link>
                            </h6>
                            <span>26 პროდუქტი</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div
                className="slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow"
                id="carausel-10-columns-arrows"
            >
                <span className="slider-btn slider-prev slick-arrow custom_prev_ct1">
                    <i className="fi-rs-arrow-small-left"></i>
                </span>
                <span className="slider-btn slider-next slick-arrow custom_next_ct1">
                    <i className="fi-rs-arrow-small-right"></i>
                </span>
            </div>
        </>
    );
};

export default CategorySlider2;
