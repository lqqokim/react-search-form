import React from 'react';

const SearchResult = ({ list }) => {
    const searchResultList = list.map((item, index) => {
        return (
            <li key={index}>
                <img src={item.image} />
                <p>{item.name}</p>
            </li>
        )
    });

    return (
        searchResultList
    )
}

export default SearchResult;