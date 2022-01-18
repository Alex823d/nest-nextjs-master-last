import { useRouter } from "next/router";
import { connect } from "react-redux";
import { updateProductCategory } from "../../../redux/action/productFiltersAction";

const CategoryProduct2 = ({ updateProductCategory }) => {




    const router = useRouter();

    // const removeSearchTerm = () => {
    //     router.push({
    //         pathname: "/products",
    //     });
    // };

    const selectCategory = (e, category) => {
        e.preventDefault();
        // removeSearchTerm();
        updateProductCategory(category);
        router.push({
            pathname: "/products",
            query: {
                cat: category, //
            },
        });
    };
    return (
        <>
            <ul>
                <li onClick={(e) => selectCategory(e, "jeans")}>
                    <a>
                        <img
                            src="\assets\imgs\theme\icons\new\1.png"
                            alt=""
                        />
                        კატეგორია 1
                    </a>
                    
                </li>
                <li onClick={(e) => selectCategory(e, "shoe")}>
                    <a>
                        <img
                            src="\assets\imgs\theme\icons\new\2.png"
                            alt=""
                        />
                        კატეგორია 2
                    </a>
                    
                </li>
                <li onClick={(e) => selectCategory(e, "jacket")}>
                    <a>
                        <img
                            src="\assets\imgs\theme\icons\new\3.png"
                            alt=""
                        />
                        კატეგორია 3{" "}
                    </a>
                    
                </li>
                <li onClick={(e) => selectCategory(e, "trousers")}>
                    <a>
                        <img
                            src="\assets\imgs\theme\icons\new\4.png"
                            alt=""
                        />
                        კატეგორია 4
                    </a>
                    
                </li>
                <li onClick={(e) => selectCategory(e, "accessories")}>
                    <a>
                        <img
                            src="\assets\imgs\theme\icons\new\5.png"
                            alt=""
                        />
                        კატეგორია 5
                    </a>
                </li>
            </ul>
        </>
    );
};

export default connect(null, { updateProductCategory })(CategoryProduct2);
