import Link from "next/link";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CategoryProduct2 from "../ecommerce/Filter/CategoryProduct2";
import CategoryProduct3 from "../ecommerce/Filter/CategoryProduct3";
import Search from "../ecommerce/Search";

const Header = ({
  totalCartItems,
  totalCompareItems,
  toggleClick,
  totalWishlistItems,
}) => {
  const [isToggled, setToggled] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY >= 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  const handleToggle = () => setToggled(!isToggled);

  const [moreSlide, setMoreSlide] = useState(false);

  return (
    <>
      <header className="header-area header-style-1 header-height-2">
        <div className="mobile-promotion">
          <span>
            Grand opening, <strong>up to 15%</strong> off all items. Only{" "}
            <strong>3 days</strong> left
          </span>
        </div>
        <div className="header-top header-top-ptb-1 d-none d-lg-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-4">
                <div className="header-info">
                  <ul>
                    <li>
                      <Link href="/page-about">
                        <a>ჩვენს შესახებ</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/page-account">
                        <a>ჩემი ანგარიში</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop-wishlist">
                        <a>ვიშლისტი</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/page-account">
                        <a>გზავნილები</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-lg-4">
                <div className="text-center">
                  <div id="news-flash" className="d-inline-block">
                    <ul>
                      <li>
                        ყველაზე მარტივი და იაფი მიწოდების სერვისი
                        {/* <Link href="/shop-grid-right">
                                                    <a>გაიგე მეტი</a>
                                                </Link> */}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4">
                <div className="header-info header-info-right">
                  <ul>
                    <li>
                      დაგვიკავშირდით:{" "}
                      <strong className="text-brand"> help@inshop.ge</strong>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="language-dropdown-active">
                          <i className="fi-rs-world"></i>
                          ქართული
                          <i className="fi-rs-angle-small-down"></i>
                        </a>
                      </Link>
                      <ul className="language-dropdown">
                        <li>
                          <Link href="/#">
                            <a>
                              <img
                                src="/assets/imgs/theme/flag-fr.png"
                                alt=""
                              />
                              English
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/#">
                            <a>
                              <img
                                src="/assets/imgs/theme/flag-ru.png"
                                alt=""
                              />
                              Pусский
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="language-dropdown-active">
                        GEL <i className="fi-rs-angle-small-down"></i>
                      </a>
                      <ul className="language-dropdown">
                        <li>
                          <a>
                            <img src="/assets/imgs/theme/flag-fr.png" alt="" />
                            USD
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
          <div className="container">
            <div className="header-wrap">
              <div className="logo logo-width-1">
                <Link href="/">
                  <a>
                    <img src="/assets/imgs/theme/logo.svg" alt="logo" />
                  </a>
                </Link>
              </div>
              <div className="header-right">
                <div className="search-style-2">
                  <Search />
                </div>
                <div className="header-action-right">
                  <div className="header-action-2">
                    <div className="header-action-icon-2">
                      <Link href="/shop-wishlist">
                        <a>
                          <img
                            className="svgInject"
                            alt="Evara"
                            src="/assets/imgs/theme/icons/icon-heart.svg"
                          />
                          <span className="pro-count blue">
                            {totalWishlistItems}
                          </span>
                        </a>
                      </Link>
                      <Link href="/shop-wishlist">
                        <a>
                          <span className="lable">ვიშლისტი</span>
                        </a>
                      </Link>
                    </div>
                    <div className="header-action-icon-2">
                      <Link href="/shop-cart">
                        <a className="mini-cart-icon">
                          <img
                            alt="Evara"
                            src="/assets/imgs/theme/icons/icon-cart.svg"
                          />
                          <span className="pro-count blue">
                            {totalCartItems}
                          </span>
                        </a>
                      </Link>
                      <Link href="/shop-cart">
                        <a>
                          <span className="lable">კალათა</span>
                        </a>
                      </Link>
                      <div className="cart-dropdown-wrap cart-dropdown-hm2">
                        <ul>
                          <li>
                            <div className="shopping-cart-img">
                              <Link href="/shop-grid-right">
                                <a>
                                  <img
                                    alt="Evara"
                                    src="/assets/imgs/shop/thumbnail-3.jpg"
                                  />
                                </a>
                              </Link>
                            </div>
                            <div className="shopping-cart-title">
                              <h4>
                                <Link href="/shop-grid-right">
                                  <a>Plain Striola Shirts</a>
                                </Link>
                              </h4>
                              <h3>
                                <span>1 × </span>
                                ₾800.00
                              </h3>
                            </div>
                            <div className="shopping-cart-delete">
                              <Link href="/#">
                                <a>
                                  <i className="fi-rs-cross-small"></i>
                                </a>
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="shopping-cart-img">
                              <Link href="/shop-grid-right">
                                <a>
                                  <img
                                    alt="Evara"
                                    src="/assets/imgs/shop/thumbnail-4.jpg"
                                  />
                                </a>
                              </Link>
                            </div>
                            <div className="shopping-cart-title">
                              <h4>
                                <Link href="/shop-grid-right">
                                  <a>Macbook Pro 2022</a>
                                </Link>
                              </h4>
                              <h3>
                                <span>1 × </span>
                                ₾3500.00
                              </h3>
                            </div>
                            <div className="shopping-cart-delete">
                              <Link href="/#">
                                <a>
                                  <i className="fi-rs-cross-small"></i>
                                </a>
                              </Link>
                            </div>
                          </li>
                        </ul>
                        <div className="shopping-cart-footer">
                          <div className="shopping-cart-total">
                            <h4>
                              ჯამი
                              <span>₾383.00</span>
                            </h4>
                          </div>
                          <div className="shopping-cart-button">
                            <Link href="/shop-cart">
                              <a>კალათა</a>
                            </Link>
                            <Link href="/shop-checkout">
                              <a>ყიდვა</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="header-action-icon-2">
                      <Link href="/page-account">
                        <a>
                          <img
                            className="svgInject"
                            alt="Nest"
                            src="/assets/imgs/theme/icons/icon-user.svg"
                          />
                        </a>
                      </Link>
                      <Link href="/page-account">
                        <a>
                          <span className="lable ml-0">ანგარიში</span>
                        </a>
                      </Link>
                      <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                        <ul>
                          <li>
                            <Link href="/page-account">
                              <a>
                                <i className="fi fi-rs-user mr-10"></i>
                                ჩემი ანგარიში
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/page-account">
                              <a>
                                <i className="fi fi-rs-location-alt mr-10"></i>
                                გზავნილის ძებნა
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop-wishlist">
                              <a>
                                <i className="fi fi-rs-heart mr-10"></i>
                                ჩემი ვიშლისტი
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/page-account">
                              <a>
                                <i className="fi fi-rs-settings-sliders mr-10"></i>
                                პარამეტრები
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/page-login">
                              <a>
                                <i className="fi fi-rs-sign-out mr-10"></i>
                                გამოსვლა
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            scroll
              ? "header-bottom header-bottom-bg-color sticky-bar stick"
              : "header-bottom header-bottom-bg-color sticky-bar"
          }
        >
          <div className="container">
            <div className="header-wrap header-space-between position-relative">
              <div className="logo logo-width-1 d-block d-lg-none">
                <Link href="/">
                  <a>
                    <img src="/assets/imgs/theme/logo.svg" alt="logo" />
                  </a>
                </Link>
              </div>
              <div className="header-nav d-none d-lg-flex">
                <div className="main-categori-wrap d-none d-lg-block">
                  <a
                    className="categories-button-active"
                    onClick={handleToggle}
                  >
                    <span className="fi-rs-apps"></span>
                    <span className="et">ყველა</span> კატეგორია
                    <i className="fi-rs-angle-down"></i>
                  </a>

                  <div
                    className={
                      isToggled
                        ? "categories-dropdown-wrap categories-dropdown-active-large font-heading open"
                        : "categories-dropdown-wrap categories-dropdown-active-large font-heading"
                    }
                  >
                    <div className="d-flex categori-dropdown-inner">
                      <CategoryProduct2 />
                      <CategoryProduct3 />
                    </div>
                    <div
                      className={
                        moreSlide
                          ? "more_slide_open show_more"
                          : "more_slide_open"
                      }
                    >
                      <div className="d-flex categori-dropdown-inner">
                        <ul>
                          <li>
                            <Link href="/shop-grid-right">
                              <a>
                                {" "}
                                <img
                                  src="\assets\imgs\theme\icons\new\1.png"
                                  alt=""
                                />
                                კატეგორია 1
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/products">
                              <a>
                                {" "}
                                <img
                                  src="/assets/imgs/theme/icons/icon-2.svg"
                                  alt=""
                                />
                                კატეგორია 2
                              </a>
                            </Link>
                          </li>
                        </ul>
                        <ul className="end">
                          <li>
                            <Link href="/products">
                              <a>
                                {" "}
                                <img
                                  src="/assets/imgs/theme/icons/icon-3.svg"
                                  alt=""
                                />
                                კატეგორია 3
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/products">
                              <a>
                                {" "}
                                <img
                                  src="/assets/imgs/theme/icons/icon-4.svg"
                                  alt=""
                                />
                                კატეგორია 4
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="more_categories"
                      onClick={() => setMoreSlide(!moreSlide)}
                    >
                      <span className="icon"></span>{" "}
                      <span className="heading-sm-1">ყველა კატეგორია</span>
                    </div>
                  </div>
                </div>
                <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block  font-heading">
                  <nav>
                    <ul>
                      <li className="hot-deals">
                        <img
                          src="/assets/imgs/theme/icons/icon-hot.svg"
                          alt="hot deals"
                        />
                        <Link href="/products">
                          <a>ფასდაკლებები</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <a className="active">მთავარი</a>
                        </Link>
                      </li>
                      <li className="position-static">
                        <Link href="/#">
                          <a>
                            ტანსაცმელი
                            <i className="fi-rs-angle-down"></i>
                          </a>
                        </Link>
                        <ul className="mega-menu">
                          <li className="sub-mega-menu sub-mega-menu-width-22">
                            <a className="menu-title">ქალის ტანსაცმელი</a>
                            <ul>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 1</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 2</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 3</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 4</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 5</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 6</a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-mega-menu sub-mega-menu-width-22">
                            <a className="menu-title">კაცის ტანსაცმელი</a>
                            <ul>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 1</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 2</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 3</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 4</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 5</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 6</a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-mega-menu sub-mega-menu-width-22">
                            <a className="menu-title">ბავშვის აქსესუარები</a>
                            <ul>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 1</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 2</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 3</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 4</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 5</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 6</a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-mega-menu sub-mega-menu-width-34">
                            <div className="menu-banner-wrap">
                              <a>
                                <img
                                  src="/assets/imgs/banner/new/banner-menu.png"
                                  alt="Nest"
                                />
                              </a>
                              <div className="menu-banner-content">
                                <h4>ფასდაკლება</h4>
                                <h3>
                                  არ გამოტოვო
                                  <br />
                                  ფასდაკლება
                                </h3>
                                <div className="menu-banner-price">
                                  <span className="new-price text-success">
                                    50%-მდე
                                  </span>
                                </div>
                                <div className="menu-banner-btn">
                                  <a>ნახვა</a>
                                </div>
                              </div>
                              <div className="menu-banner-discount">
                                <h3>
                                  <span>50%-მდე</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="position-static">
                        <Link href="/#">
                          <a>
                            აქსესუარები
                            <i className="fi-rs-angle-down"></i>
                          </a>
                        </Link>
                        <ul className="mega-menu">
                          <li className="sub-mega-menu sub-mega-menu-width-22">
                            <a className="menu-title">ქალის აქსესუარები</a>
                            <ul>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 1</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 2</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 3</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 4</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 5</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 6</a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-mega-menu sub-mega-menu-width-22">
                            <a className="menu-title">კაცის აქსესუარები</a>
                            <ul>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 1</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 2</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 3</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 4</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 5</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 6</a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-mega-menu sub-mega-menu-width-22">
                            <a className="menu-title">ბავშვის აქსესუარები</a>
                            <ul>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 1</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 2</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 3</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 4</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 5</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 6</a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-mega-menu sub-mega-menu-width-34">
                            <div className="menu-banner-wrap">
                              <a>
                                <img
                                  src="/assets/imgs/banner/new/banner-menu-2.png"
                                  alt="Nest"
                                />
                              </a>
                              <div className="menu-banner-content">
                                <h4>ფასდაკლება</h4>
                                <h3>
                                  სათვალეების
                                  <br />
                                  კოლექციაზე
                                </h3>
                                <div className="menu-banner-price">
                                  <span className="new-price text-success">
                                    15%-მდე
                                  </span>
                                </div>
                                <div className="menu-banner-btn">
                                  <a>ნახვა</a>
                                </div>
                              </div>
                              <div className="menu-banner-discount">
                                <h3>
                                  <span>15%-მდე</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="position-static">
                        <Link href="/#">
                          <a>
                            ტექნიკა
                            <i className="fi-rs-angle-down"></i>
                          </a>
                        </Link>
                        <ul className="mega-menu">
                          <li className="sub-mega-menu sub-mega-menu-width-22">
                            <a className="menu-title">ტელეფონის აქსესუარები</a>
                            <ul>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 1</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 2</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 3</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 4</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 5</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 6</a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-mega-menu sub-mega-menu-width-22">
                            <a className="menu-title">ელექტრო მოწყობილობები</a>
                            <ul>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 1</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 2</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 3</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 4</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 5</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 6</a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-mega-menu sub-mega-menu-width-22">
                            <a className="menu-title">ხელსაწყოები</a>
                            <ul>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 1</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 2</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 3</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 4</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 5</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-grid-right">
                                  <a>კატეგორია 6</a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-mega-menu sub-mega-menu-width-34">
                            <div className="menu-banner-wrap">
                              <a>
                                <img
                                  src="/assets/imgs/banner/new/banner-menu-6.png"
                                  alt="Nest"
                                />
                              </a>
                              <div className="menu-banner-content">
                                <h4>სიახლე!</h4>
                                <h3>
                                  ახალი კეისი
                                  <br />
                                  Iphone 13
                                </h3>
                                <div className="menu-banner-price">
                                  <span className="new-price text-success">
                                    არ გამოტოვო
                                  </span>
                                </div>
                                <div className="menu-banner-btn">
                                  <a>ნახვა</a>
                                </div>
                              </div>
                              <div className="menu-banner-discount">
                                <h3>
                                  <span>სიახლე</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/page-contact">
                          <a>კონტაქტი</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="hotline d-none d-lg-flex">
                <img
                  src="/assets/imgs/theme/icons/icon-headphone.svg"
                  alt="hotline"
                />

                <p>
                  1900 - 888<span>24/7 ცხელი ხაზი</span>
                </p>
              </div>

              {/* <div className="header-action-icon-2 d-block d-lg-none">
                <div className="burger-icon burger-icon-white">
                  <span className="burger-icon-top"></span>
                  <span className="burger-icon-mid"></span>
                  <span className="burger-icon-bottom"></span>
                </div>
              </div> */}

              <div className="header-action-right d-block d-lg-none">
                <div className="header-action-2">
                  <div className="header-action-icon-2">
                    <Link href="/shop-wishlist">
                      <a>
                        <img
                          alt="Evara"
                          src="/assets/imgs/theme/icons/icon-compare.svg"
                        />
                        <span className="pro-count white">
                          {totalCompareItems}
                        </span>
                      </a>
                    </Link>
                  </div>
                  <div className="header-action-icon-2">
                    <Link href="/shop-wishlist">
                      <a>
                        <img
                          alt="Evara"
                          src="/assets/imgs/theme/icons/icon-heart.svg"
                        />
                        <span className="pro-count white">
                          {totalWishlistItems}
                        </span>
                      </a>
                    </Link>
                  </div>
                  <div className="header-action-icon-2">
                    <Link href="/shop-cart">
                      <a className="mini-cart-icon">
                        <img
                          alt="Evara"
                          src="/assets/imgs/theme/icons/icon-cart.svg"
                        />
                        <span className="pro-count white">
                          {totalCartItems}
                        </span>
                      </a>
                    </Link>
                    <div className="cart-dropdown-wrap cart-dropdown-hm2">
                      <ul>
                        <li>
                          <div className="shopping-cart-img">
                            <Link href="/shop-grid-right">
                              <a>
                                <img
                                  alt="Evara"
                                  src="/assets/imgs/shop/thumbnail-3.jpg"
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="shopping-cart-title">
                            <h4>
                              <Link href="/shop-grid-right">
                                <a>Plain Striola Shirts</a>
                              </Link>
                            </h4>
                            <h3>
                              <span>1 × </span>
                              ₾800.00
                            </h3>
                          </div>
                          <div className="shopping-cart-delete">
                            <Link href="/#">
                              <a>
                                <i className="fi-rs-cross-small"></i>
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="shopping-cart-img">
                            <Link href="/shop-grid-right">
                              <a>
                                <img
                                  alt="Evara"
                                  src="/assets/imgs/shop/thumbnail-4.jpg"
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="shopping-cart-title">
                            <h4>
                              <Link href="/shop-grid-right">
                                <a>Macbook Pro 2022</a>
                              </Link>
                            </h4>
                            <h3>
                              <span>1 × </span>
                              ₾3500.00
                            </h3>
                          </div>
                          <div className="shopping-cart-delete">
                            <Link href="/#">
                              <a>
                                <i className="fi-rs-cross-small"></i>
                              </a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                      <div className="shopping-cart-footer">
                        <div className="shopping-cart-total">
                          <h4>
                            ჯამი
                            <span>₾383.00</span>
                          </h4>
                        </div>
                        <div className="shopping-cart-button">
                          <Link href="/shop-cart">
                            <a>კალათა</a>
                          </Link>
                          <Link href="/shop-checkout">
                            <a>ყიდვა</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="header-action-icon-2 d-block d-lg-none">
                    <div
                      className="burger-icon burger-icon-white"
                      onClick={toggleClick}
                    >
                      <span className="burger-icon-top"></span>
                      <span className="burger-icon-mid"></span>
                      <span className="burger-icon-bottom"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const mapStateToProps = (state) => ({
  totalCartItems: state.cart.length,
  totalCompareItems: state.compare.items.length,
  totalWishlistItems: state.wishlist.items.length,
});

export default connect(mapStateToProps, null)(Header);
