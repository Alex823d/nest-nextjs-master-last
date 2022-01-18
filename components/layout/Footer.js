import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="main">
        <section className="newsletter mb-15  wow animate__animated animate__fadeIn">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="position-relative newsletter-inner">
                  <div className="newsletter-content">
                    <h2 className="mb-20">
                      მიიღე სიახლეები ახალი პროდუქციის შესახებ! <br />
                      არ გამოტოვო სიახლეები!
                    </h2>
                    <p className="mb-45">
                      გამოიწერე ჩვენი სიახლეები და იყავი საქმის კურსში{" "}
                    </p>
                    <form className="form-subcriber d-flex">
                      <input type="email" placeholder="თქვენი ელ-ფოსტა" />
                      <button className="btn" type="submit">
                        გამოწერა
                      </button>
                    </form>
                  </div>
                  <img
                    src="/assets/imgs/banner/banner-9.png"
                    alt="newsletter"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="featured  section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
                <div
                  className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                  data-wow-delay="0"
                >
                  <div className="banner-icon">
                    <img src="/assets/imgs/theme/icons/icon-1.svg" alt="" />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">საუკეთესო ფასები</h3>
                    {/* <p>Orders $50 or more</p> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div
                  className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div className="banner-icon">
                    <img src="/assets/imgs/theme/icons/icon-2.svg" alt="" />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">მიტანის სერვისი</h3>
                    {/* <p>24/7 amazing services</p> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div
                  className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="banner-icon">
                    <img src="/assets/imgs/theme/icons/icon-3.svg" alt="" />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">სპეციალური დღეები</h3>
                    {/* <p>When you sign up</p> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div
                  className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="banner-icon">
                    <img src="/assets/imgs/theme/icons/icon-4.svg" alt="" />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">ფართო არჩევანი</h3>
                    {/* <p>Mega Discounts</p> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div
                  className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="banner-icon">
                    <img src="/assets/imgs/theme/icons/icon-5.svg" alt="" />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">სწრაფი მიწოდება</h3>
                    {/* <p>Within 30 days</p> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-xl-none">
                <div
                  className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="banner-icon">
                    <img src="/assets/imgs/theme/icons/icon-6.svg" alt="" />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">უფსაფრთხო მიწოდება</h3>
                    {/* <p>Within 30 days</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-padding footer-mid">
          <div className="container pt-15 pb-20">
            <div className="row">
              <div className="col">
                <div
                  className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0  wow animate__animated animate__fadeInUp"
                  data-wow-delay="0"
                >
                  <div className="logo  mb-30">
                    <Link href="/">
                      <a className="mb-15">
                        <img src="/assets/imgs/theme/logo.svg" alt="logo" />
                      </a>
                    </Link>
                    <p className="font-lg text-heading">
                      იშოპინგეთ მარტივად, იაფად და უსაფრთხოდ.
                    </p>
                  </div>
                  <ul className="contact-infor">
                    <li>
                      <img
                        src="/assets/imgs/theme/icons/icon-location.svg"
                        alt=""
                      />
                      <strong>მისამართი: </strong>{" "}
                      <span>ჟიული შარტავას 40, თბილისი, საქართველო, 0112</span>
                    </li>
                    <li>
                      <img
                        src="/assets/imgs/theme/icons/icon-contact.svg"
                        alt=""
                      />
                      <strong>ტელეფონი: </strong>
                      <span>(+995)555 00 22 33</span>
                    </li>
                    <li>
                      <img
                        src="/assets/imgs/theme/icons/icon-email-2.svg"
                        alt=""
                      />
                      <strong>ელ-ფოსტა: </strong>
                      <span>sales@inshop.ge</span>
                    </li>
                    <li>
                      <img
                        src="/assets/imgs/theme/icons/icon-clock.svg"
                        alt=""
                      />
                      <strong>სამუშაო დღეები: </strong>
                      <span>10:00 - 18:00, ორშ. - პარ</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                data-wow-delay=".1s"
              >
                <h4 className="widget-title">კომპანია</h4>
                <ul className="footer-list  mb-sm-5 mb-md-0">
                  <li>
                    <Link href="/page-about">
                      <a>ჩვენს შესახებ</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/page-purchase-guide">
                      <a>მიწოდების სერვისი</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/page-privacy-policy">
                      <a>კომფიდენციალურობის პოლიტიკა</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/page-terms">
                      <a>მოხმარების პირობები</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/page-contact">
                      <a>კონტაქტი</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                data-wow-delay=".2s"
              >
                <h4 className="widget-title ">ანგარიში</h4>
                <ul className="footer-list  mb-sm-5 mb-md-0">
                  <li>
                    <Link href="/page-login">
                      <a>ავტორიზაცია</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop-cart">
                      <a>ჩემი კალათა</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop-wishlist">
                      <a>ჩემი ვიშლისტი</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/page-purchase-guide">
                      <a>გზავნილის ძებნა</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop-compare">
                      <a>შედარება</a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div
                className="footer-link-widget widget-install-app col  wow animate__animated animate__fadeInUp"
                data-wow-delay=".5s"
              >
                <h4 className="widget-title ">მარტივი გადახდა</h4>
                <p className="mb-20 ">გადაიხადეთ მარტივად და უსაფრთხოდ</p>
                <img
                  className=""
                  src="/assets/imgs/theme/payment-method.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <div
          className="container pb-30  wow animate__animated animate__fadeInUp"
          data-wow-delay="0"
        >
          <div className="row align-items-center">
            <div className="col-12 mb-30">
              <div className="footer-bottom"></div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <p className="font-sm mb-0">
                &copy; 2022,{" "}
                <strong className="text-brand">შპს "ინშოპი"</strong> - ონლაინ
                შოპინგ პარტნიორი <br />
                ყველა უფლება დაცულია
              </p>
            </div>
            <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
              <div className="hotline d-lg-inline-flex mr-30">
                <img
                  src="/assets/imgs/theme/icons/phone-call.svg"
                  alt="hotline"
                />
                <p>
                  1900 - 6666<span>გრაფიკი 8:00 - 22:00</span>
                </p>
              </div>
              <div className="hotline d-lg-inline-flex">
                <img
                  src="/assets/imgs/theme/icons/phone-call.svg"
                  alt="hotline"
                />
                <p>
                  1900 - 8888<span>24/7 დახმარების ცენტრი</span>
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
              <div className="mobile-social-icon">
                <h6>ჩვენ სოციალურ მედიაში</h6>
                <a>
                  <img
                    src="/assets/imgs/theme/icons/icon-facebook-white.svg"
                    alt=""
                  />
                </a>
                <a>
                  <img
                    src="/assets/imgs/theme/icons/icon-twitter-white.svg"
                    alt=""
                  />
                </a>
                <a>
                  <img
                    src="/assets/imgs/theme/icons/icon-instagram-white.svg"
                    alt=""
                  />
                </a>
                <a>
                  <img
                    src="/assets/imgs/theme/icons/icon-pinterest-white.svg"
                    alt=""
                  />
                </a>
                <a>
                  <img
                    src="/assets/imgs/theme/icons/icon-youtube-white.svg"
                    alt=""
                  />
                </a>
              </div>
              {/* <p className="font-sm">
                Up to 15% discount on your first subscribe
              </p> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
