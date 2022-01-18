import { useRouter } from "next/router";
import React, { useState } from "react";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();

    const handleSearch = () => {
        console.log("click");
        router.push({
            pathname: "/products",
            query: {
                search: searchTerm,
            },
        });
        setSearchTerm("");
    };

    const handleInput = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
        }
    };
    return (
        <>
            <form>
                <select className="select-active">
                <option>ყველა კატეგორია</option>
                <option>ქალის თანსაცმელი</option>
                <option>კაცის ტანსაცმელი</option>
                <option>ტელეფონის აქსესუარები</option>
                <option>სამკაულები და აქსესუარები</option>
                <option>ფეხსაცმლები და ჩანთები</option>
                <option>ბავშვის სათამაშოები</option>
                </select>
                <input
                    value={searchTerm}
                    onKeyDown={handleInput}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text"
                    placeholder="პრდუციის ძებნა..."
                />
            </form>
        </>
    );
};

export default Search;
