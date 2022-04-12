import React from 'react';

const FilterBar = ({ onChangeFilter }) => {

    const onChangeGender = (event) => {
        if (event.target.name === 'filterByGender') {
            onChangeFilter(event.target.value);
        }
    }

    return (
        <>
            <span className='text-dark'>Filter by:</span>
            <div className="d-inline-block form-check" style={{ 'marginLeft': '1em' }}>
                <input className="form-check-input" type="radio" onChange={onChangeGender} value={'All'} name="filterByGender" id="filterByAll" />
                <label className="form-check-label" htmlFor="filterByAll">
                    All
                </label>
            </div>
            <div className="d-inline-block form-check" style={{ 'marginLeft': '1em' }}>
                <input className="form-check-input" type="radio" onChange={onChangeGender} value={'Male'} name="filterByGender" id="filterByMale" />
                <label className="form-check-label" htmlFor="filterByMale">
                    Male
                </label>
            </div>
            <div className="d-inline-block form-check" style={{ 'marginLeft': '1em' }}>
                <input className="form-check-input" type="radio" onChange={onChangeGender} value={'Female'} name="filterByGender" id="filterByFemale" />
                <label className="form-check-label" htmlFor="filterByFemale">
                    Female
                </label>
            </div>
        </>
        
    );
}

export default FilterBar;