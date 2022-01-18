function SelectOp({ selectChange, showLimit }) {
    return (
        <>
            <div className="sort-by-product-wrap">
                <div className="sort-by">
                    <span>
                        <i className="fi-rs-apps"></i>
                        პროდუქცია:
                    </span>
                </div>
                <div className="sort-by-dropdown-wrap custom-select">
                    <select onChange={selectChange}>
                        <option value={showLimit}>{showLimit}</option>
                        <option value={24}>24</option>
                        <option value={48}>48</option>
                    </select>
                </div>
            </div>
        </>
    );
}
export default SelectOp;
