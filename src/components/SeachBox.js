import React from "react";

const SearchBox = ({searchChange}) => {
    return(
        <div>
            <input
                className="pa3 ma4 ba br4 b--black bg-lightest-blue" 
                type="seach"
                placeholder="Seach Robots"
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;