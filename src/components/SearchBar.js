import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: ''
        }
    }

    componentWillReceiveProps({ keyword }) {
        this.setState({ keyword });
    }

    onKeyUpInput = (event) => {
        !event.target.value.length && this.props.onSearchKeyword('');
        event.keyCode === 13 && this.props.onSearchKeyword(event.target.value);
    }

    onChangeInput = (event) => {
        this.setState({ keyword: event.target.value });
    }

    onClickRemoveBtn() {
        this.setState({ keyword: '' });
        this.props.onSearchKeyword('');
    }

    render() {
        return (
            <form onSubmit={event => event.preventDefault()}>
                <input
                    value={this.state.keyword}
                    type="text"
                    onKeyUp={event => this.onKeyUpInput(event)}
                    onChange={event => this.onChangeInput(event)}
                    placeholder="검색어를 입력하세요"
                    autoFocus
                />
                {this.state.keyword.length ?
                    (
                        <button
                            type="reset"
                            className="btn-reset"
                            onClick={() => this.onClickRemoveBtn()}
                        ></button>
                    ) : null
                }
            </form>
        )
    }
}

export default SearchBar;

