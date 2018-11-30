import React, { Component } from 'react';

class RecentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recentKeywords: props.recentKeywords
        };
    }

    componentWillReceiveProps(props) {
        const { recentKeywords } = props;
        this.setState({ recentKeywords });
    }

    onClickRemoveBtn(item) {
        const recentKeywords = this.props.recentKeywords.filter(keyword => keyword !== item);
        this.props.updateRecentKeyword(recentKeywords);
    }

    render() {
        const date = new Date();
        const list = this.state.recentKeywords.map((item, index) => {
            return (
                <li key={index}>
                    {item}
                    <span className="date">{`${date.getMonth() + 1}.${date.getDate()}`}</span>
                    <button
                        className="btn-remove"
                        onClick={() => this.onClickRemoveBtn(item)}
                    ></button>
                </li>
            );
        });

        return (
            list
        )
    }
}

export default RecentList;