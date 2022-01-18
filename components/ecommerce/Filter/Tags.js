import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { updateProductFilters } from "../../../redux/action/productFiltersAction";

const Tags = ({ updateProductFilters }) => {
    const router = useRouter();
    const tags = [
        { value: "" },
        { value: "კატეგორია 1" },
        { value: "კატეგორია 2" },
        { value: "კატეგორია 3" },
        { value: "კატეგორია 4" },
        { value: "კატეგორია 5" },
    ];
    const [selectedTags, setTags] = useState([]);
    const [active, setActive] = useState(0);
    useEffect(() => {
        const filters = {
            tags: selectedTags, //
        };

        updateProductFilters(filters);
    }, [selectedTags]);

    const handleClick = (i, target) => {
        setTags(target);
        setActive(active == i ? 0 : i);
    };
    return (
        <>
            <ul className="tags-list">
                {tags.map((tag, i) => (
                    <li  className="hover-up" onClick={() => handleClick(i, tag.value)}>
                        <a
                            class={
                                active == i
                                    ? "cat-item text-brand-2"
                                    : "cat-item text-brand"
                            }
                        ><i className="fi-rs-cross mr-10"></i>
                            {i == 0 ? "ყველა" : `${tag.value}`}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
};

const mapDidpatchToProps = {
    updateProductFilters,
};

export default connect(null, mapDidpatchToProps)(Tags);
