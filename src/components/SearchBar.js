import React from 'react';

const SearchBar = ({ onChangeSearchKeyword }) => {

    const onChangeSearchKey = (event) => {
        if (event.target.id === 'searchKey') {
            onChangeSearchKeyword(event.target.value);
        }
    }

    return (
        <div className="input-group mb-3">
            <input type="text" id='searchKey' onChange={onChangeSearchKey} className="form-control" placeholder="Search" />
        </div>
    );
}

export default SearchBar;