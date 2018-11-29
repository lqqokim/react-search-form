import React from 'react';

const RecentList = ({ recentKeywords }) => {
    console.log('RecentList => ', recentKeywords)

    const onClickRemoveBtn = () => {

    }

    const list = recentKeywords.map((item, index) => {
        return (
            <li key={index}>
                {item}
                <span className="date">{item}</span>
                <button 
                    className="btn-remove"
                    ></button>
            </li>
        )
    });

    return (
        list
    )
}

export default RecentList;