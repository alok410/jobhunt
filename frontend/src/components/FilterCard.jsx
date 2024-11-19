import React from 'react';
import styles from './FilterCard.module.css';

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "Fullstack Developer"]
  },
  {
    filterType: "Salary",
    array: ["8-40k", "42-1 lakh", "1 lakh to 5 lakh"]
  }
];

function FilterCard() {
  return (
    <div className={styles.filterCardContainer}>
      <div className={styles.filterCardTitle}>Filter Job</div>
      <hr className={styles.filterSeparator} />
      {filterData.map((data, index) => (
        <div key={index}>
          <h1 className={styles.filterCardTitle}>{data.filterType}</h1>
          {data.array.map((item, index) => (
            <div className={styles.filterOption} key={index}>
              <input type="radio" name={data.filterType} value={item} id={item} />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default FilterCard;
