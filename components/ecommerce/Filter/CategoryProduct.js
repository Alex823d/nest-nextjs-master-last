import { useRouter } from "next/router";
import { connect } from "react-redux";
import { updateProductCategory } from "../../../redux/action/productFiltersAction";

const CategoryProduct = ({ updateProductCategory }) => {
    const router = useRouter();

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
                <li onClick={(e) => selectCategory(e, "")}>
                    <a>ყველა</a>
                </li>
                <li onClick={(e) => selectCategory(e, "jeans")}>
                    <a>
                        <img
                            src="\assets\imgs\theme\icons\new\1.png"
                            alt=""
                        />
                        კატეგორია 1
                    </a>
                    <span className="count">31</span>
                </li>
                <li onClick={(e) => selectCategory(e, "shoe")}>
                    <a>
                        <img
                            src="\assets\imgs\theme\icons\new\2.png"
                            alt=""
                        />
                        კატეგორია 2
                    </a>
                    <span className="count">35</span>
                </li>
                <li onClick={(e) => selectCategory(e, "jacket")}>
                    <a>
                        <img
                            src="\assets\imgs\theme\icons\new\3.png"
                            alt=""
                        />
                        კატეგორია 3{" "}
                    </a>
                    <span className="count">42</span>
                </li>                
            </ul>
        </>
    );
};

export default connect(null, { updateProductCategory })(CategoryProduct);
