import React, { Component } from 'react';

class RecentList extends Component {
    date = new Date();

    constructor(props) {
        super(props);

        this.state = {
            recentKeywords: props.recentKeywords
        };
    }

    //Props 변경시 호출
    componentWillReceiveProps(props) {
        const { recentKeywords } = props;
        this.setState({ recentKeywords });
    }

    onClickRemoveBtn(item, index) {
        this.state.recentKeywords.splice(index, 1);
        this.props.updateRecentKeyword(this.state.recentKeywords);
    }

    onClickItem() {

    }

    render() {
        const list = this.state.recentKeywords.map((item, index) => {
            return (
                <li key={index}>
                    <span onClick={() => this.props.onClickKeyword(item)}>{item}</span>
                    <span className="date">{`${this.date.getMonth() + 1}.${this.date.getDate()}`}</span>
                    <button
                        className="btn-remove"
                        onClick={() => this.onClickRemoveBtn(item, index)}
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