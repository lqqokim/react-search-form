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

    onSearch(keyword) {
        this.setState({ keyword });
    }

    onClickKeyword(keyword) {
        console.log('onClickKeyword => ', keyword)
        this.setState({ keyword })
    }

    render() {
        return (
            <div>
                <header>
                    <h2 className="container">검색</h2>
                </header>

                <div className="container">
                    <SearchBar
                        keyword={this.state.keyword}
                        onSearchKeyword={(keyword) => this.onSearch(keyword)}
                    />
                    <Content
                        keyword={this.state.keyword}
                        onClickKeyword={(keyword) => this.onClickKeyword(keyword)}
                    />
                </div>
            </div>
        );
    }
}

export default App;
