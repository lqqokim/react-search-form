import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar.js';
import Content from './components/Content.js';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: ''
        }
    }

    onSearchKeyword = (keyword) => {
        this.setState({ keyword });
    }

    onClickKeyword = (keyword) =>  {
        this.setState({ keyword })
    }

    render() {
        return (
            <div>
                <header>
                    <h2 className="container">검색</h2>
                </header>

                <div className="container">
                    <SearchBar //검색폼
                        keyword={this.state.keyword}
                        onSearchKeyword={this.onSearchKeyword}
                    />
                    <Content //추천검색, 최근검색, 검색결과
                        keyword={this.state.keyword}
                        onClickKeyword={this.onClickKeyword}
                    />
                </div>
            </div>
        );
    }
}

export default App;
