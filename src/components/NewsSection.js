import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class NewsSection extends Component {

  static defaultProps = {
    country: 'us',
    pageSize: 9,
    category: "general"
  }

  static propTypes = {
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number,
    category: PropTypes.string.isRequired
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async updateNewsSection() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=66d2128a876d4de595fac26a02f73a16&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    console.log(parsedData)
  }

  async componentDidMount() {
    this.updateNewsSection();
  }

  prevClick = async () => {
    await this.setState({ page: this.state.page - 1 })
    this.updateNewsSection();
  }

  nextClick = async () => {
    await this.setState({ page: this.state.page + 1 })
    this.updateNewsSection();
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center" style={{ margin: "30px 0px" }} >MAK News - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">

          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description} newsURL={element.url} imgURL={element.urlToImage} author={element.author} datePublished={element.publishedAt} newsSource={element.source.name} />
            </div>
          })}

        </div>

        <div className="container d-flex justify-content-between my-3">
          <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.prevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.nextClick}>Next &rarr;</button>
        </div>

      </div>
    )
  }
}
