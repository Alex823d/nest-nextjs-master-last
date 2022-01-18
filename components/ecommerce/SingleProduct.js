import Link from "next/link";
import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/action/cart";
import { addToCompare } from "../../redux/action/compareAction";
import { openQuickView } from "../../redux/action/quickViewAction";
import { addToWishlist } from "../../redux/action/wishlistAction";

const SingleProduct = ({
    product,
    addToCart,
    addToCompare,
    addToWishlist,
    openQuickView,
}) => {
    const handleCart = (product) => {
        addToCart(product);
        toast("დამატებულია კალათაში!");
    };

    const handleCompare = (product) => {
        addToCompare(product);
        toast("დამატებულია შედარებაში!");
    };

    const handleWishlist = (product) => {
        addToWishlist(product);
        toast("დამატებულია ვიშლისტში!");
    };
    return (
        <>
            <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                        <Link
                            href="/products/[slug]"
                            as={`/products/${product.slug}`}
                        >
                            <a>
                                <img
                                    className="default-img"
                                    src={product.images[0].img}
                                    alt=""
                                />
                                <img
                                    className="hover-img"
                                    src={product.images[1].img}
                                    alt=""
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="product-action-1">
                        <a
                            aria-label="სწრაფი ნახვა"
                            className="action-btn hover-up"
                            data-bs-toggle="modal"
                            onClick={(e) => openQuickView(product)}
                        >
                            <i className="fi-rs-eye"></i>
                        </a>
                        <a
                            aria-label="ვიშლისტში დამატება"
                            className="action-btn hover-up"
                            onClick={(e) => handleWishlist(product)}
                        >
                            <i className="fi-rs-heart"></i>
                        </a>
                        <a
                            aria-label="შედარება"
                            className="action-btn hover-up"
                            onClick={(e) => handleCompare(product)}
                        >
                            <i className="fi-rs-shuffle"></i>
                        </a>
                    </div>

                    <div className="product-badges product-badges-position product-badges-mrg">
                        {product.trending && <span className="hot">ცხელი</span>}
                        {product.created && <span className="new">ახალი</span>}
                        {product.totalSell > 100 && (
                            <span className="best">ბესტსელერი</span>
                        )}
                        {product.discount.isActive && (
                            <span className="sale">ფასდაკლება</span>
                        )}
                        {product.discount.percentage >= 5 && (
                            <span className="hot">
                                {product.discount.percentage}%
                            </span>
                        )}
                    </div>
                </div>
                <div className="product-content-wrap">
                    <div className="product-category">
                        <Link href="/products">
                            <a>{product.brand}</a>
                        </Link>
                    </div>
                    <h2>
                        <Link
                            href="/products/[slug]"
                            as={`/products/${product.slug}`}
                        >
                            <a>{product.title}</a>
                        </Link>
                    </h2>

                    {/* <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                            <div
                                className="product-rating"
                                style={{ width: "90%" }}
                            ></div>
                        </div>
                        <span className="font-small ml-5 text-muted">
                            {" "}
                            ({product.ratingScore})
                        </span>
                    </div> */}

                    {/* <div>
                        <span className="font-small text-muted">
                            By <Link href="/vendor/1"><a>NestFood</a></Link>
                        </span>
                    </div> */}

                    <div className="product-card-bottom">
                        <div className="product-price">
                            <span>${product.price} </span>
                            <span className="old-price">{product.oldPrice && `$ ${product.oldPrice}`}</span>
                        </div>
                        <div className="add-cart">
                            <a
                                className="add"
                                onClick={(e) => handleCart(product)}
                            >
                                <i className="fi-rs-shopping-cart mr-5"></i> დამატება
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapDispatchToProps = {
    addToCart,
    addToCompare,
    addToWishlist,
    openQuickView,
};

export default connect(null, mapDispatchToProps)(SingleProduct);
