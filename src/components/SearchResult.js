import React from 'react';

const SearchResult = ({ list }) => {
    console.log(list)
    const searchResultList = list.map((item, index) => {
        return (
            <li key={index}>
                <img src={item.image} alt={""}/>
                <p>{item.name}</p>
            </li>
        )
    });

    return (
        searchResultList
    )
}

export default SearchResult;