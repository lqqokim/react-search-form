import React from 'react';

const RecommendList = ({ list, onClickKeyword }) => {
    if (!list.length) return null;

    const recommendKeywordList = list.map((item, index) => {
        return (
            <li key={index} onClick={() => onClickKeyword(item.keyword)}>
                <span className="number">{index + 1}</span>{item.keyword}
            </li>
        );
    });

    return (
        recommendKeywordList
    );
}

export default RecommendList;