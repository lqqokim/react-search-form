import React, { Component } from 'react';

//Model
import KeywordModel from '../models/KeywordModel';
import SearchModel from './../models/SearchModel';

//Component
import RecommendList from './RecommendList';
import RecentList from './RecentList';
import SearchResult from './SearchResult';

class Content extends Component {
    recentTab;
    recommendTab;
    tabName = {
        RECOMMEND: 'recommend',
        RECENT: 'recent',
        RESULT: 'result'
    }

    constructor(props) {
        super(props);

        this.state = {
            recommendKeywords: [],
            recentKeywords: [],
            selectedTab: this.tabName.RECOMMEND,
            searchResult: [],
            keyword: ''
        }
    }

    //Props 변경시에 호출
    componentWillReceiveProps({ keyword }) {
        if (!keyword.length) {
            this.setState({ selectedTab: this.tabName.RECOMMEND })
            return null;
        }

        this.setState({
            recentKeywords: this.state.recentKeywords.concat(keyword),
            selectedTab: this.tabName.RESULT
        }, () => {
            this.getSearchResult(keyword);
        });
    }

    componentDidMount() {
        this.getRecommendKeywords();
    }

    getSearchResult = (keyword) => {
        SearchModel.list()
            .then(searchResult => this.setState({ searchResult }));
    }

    getRecommendKeywords = () => {
        KeywordModel.list()
            .then(recommendKeywords => this.setState({ recommendKeywords }));
    }

    onClickTab = (selectedTab) => {
        this.setState({ selectedTab });
    }

    onClickKeyword = (keyword) => {
        this.setState({ selectedTab: this.tabName.RESULT });
        this.props.onClickKeyword(keyword);
        this.getSearchResult(keyword);
    }

    activeTab = () => {
        if (this.state.selectedTab === this.tabName.RECENT) {
            this.recentTab = 'active';
            this.recommendTab = '';
        } else {
            this.recommendTab = 'active';
            this.recentTab = '';
        }
    }

    render() {
        this.activeTab();

        return (
            <div className="content">
                {this.state.selectedTab !== this.tabName.RESULT &&
                    <ul id="tabs" className="tabs">
                        <li className={this.recommendTab}
                            onClick={() => this.setState({ selectedTab: this.tabName.RECOMMEND })}
                        >추천 검색어</li>
                        <li className={this.recentTab}
                            onClick={() => this.setState({ selectedTab: this.tabName.RECENT })}
                        >최근 검색어</li>
                    </ul>
                }
                <ul className="list">
                    {this.state.selectedTab === this.tabName.RECOMMEND &&
                        <RecommendList //추천 검색어
                            list={this.state.recommendKeywords}
                            onClickKeyword={this.onClickKeyword}
                        />
                    }
                    {this.state.selectedTab === this.tabName.RECENT &&
                        <RecentList //최근 검색어
                            recentKeywords={this.state.recentKeywords}
                            updateRecentKeyword={(recentKeywords) => this.setState({ recentKeywords })}
                            onClickKeyword={this.onClickKeyword}
                        />
                    }
                    {this.state.selectedTab === this.tabName.RESULT &&
                        <SearchResult //검색 결과
                            list={this.state.searchResult}
                        />
                    }
                </ul>
            </div>
        );
    }
}

export default Content;