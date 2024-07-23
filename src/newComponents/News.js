import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'            //rce
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  // document.title = `${this.capitalizeFirstLetter(props.category)}-NewsMonkey`






const upadateNews = async () => {
  props.setProgress(10);
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1a775627b75f4b54bf78c5f280d3d663&page=${page}&pageSize=${props.pageSize}`
  setLoading(true)
  let data = await fetch(url)
  let parsedData = await data.json()
  console.log(parsedData)

  setArticles(parsedData.articles)
  settotalResults(parsedData.totalResults)
  setLoading(false)

  props.setProgress(100)
}

useEffect(() => {
  upadateNews();
}, [])


// async componentDidMount() {
//   // console.log("cdm");
//   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1a775627b75f4b54bf78c5f280d3d663&page=1&pageSize=${props.pageSize}`
//   // this.setState({loading:true})
//   // let data = await fetch(url)
//   // let parsedData = await data.json() 
//   // console.log(parsedData)
//   // this.setState({ 
//   //   articles: parsedData.articles,
//   //    totalResults: parsedData.totalResults,
//   //    loading:false 

//   // })
//   this.upadateNews()

// }

const handlePrev = async () => {
  console.log("prev")
  // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1a775627b75f4b54bf78c5f280d3d663&page=${this.state.page - 1}&pageSize=${props.pageSize}`
  // this.setState({loading:true})
  // let data = await fetch(url)
  // let parsedData = await data.json()
  // console.log(parsedData)
  // this.setState({
  //   page: this.state.page - 1,
  //   articles: parsedData.articles,
  //   loading:false 
  // }) 
  // this.setState({ page: this.state.page - 1 })
  setPage(page - 1)
  upadateNews()
}

const handleNext = async () => {
  // console.log("next")
  //                 //20 is pageSize ie how many news in 1 page 
  // if (this.state.page + 1 > Math.ceil(this.state.totalResults /props.pageSize)) {

  // }
  // else
  //  {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1a775627b75f4b54bf78c5f280d3d663&page=${this.state.page + 1}&pageSize=${props.pageSize}`
  //   this.setState({loading:true})
  //   let data = await fetch(url)
  //   let parsedData = await data.json()
  //   console.log(parsedData)
  //   this.setState({
  //     page: this.state.page + 1,
  //     articles: parsedData.articles,
  //     loading:false 
  //   })
  // }



  // this.setState({ page: this.state.page + 1 })
  setPage(page + 1)
  upadateNews()
}


const fetchMoreData = async () => {
  setPage(page + 1)
  // this.setState({ page: this.state.page + 1 })
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1a775627b75f4b54bf78c5f280d3d663&page=${page}&pageSize=${props.pageSize}`
  // this.setState({ loading: true })
  let data = await fetch(url)
  let parsedData = await data.json()
  console.log(parsedData)

  setArticles(articles.concat(parsedData.articles))
  settotalResults(parsedData.totalResults)

};


return (
  <div className="container my-3">
    <h2 className="text-center" style={{marginTop:'90px' }}>NewsMonkey -top {capitalizeFirstLetter(props.category)} headlines</h2>
    {loading && <Spinner />}
    <InfiniteScroll
      dataLength={articles.length}
      next={fetchMoreData}
      hasMore={articles.length != totalResults}
      loader={<Spinner />}
    >
      {/*  loading is true then show spinner */}
      <div className="container">
        <div className="row">
          {articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
      </div>
    </InfiniteScroll>

    {/* <div className="container d-flex justify-content-between">

          <button type="button" disabled={this.state.page <= 1} onClick={this.handlePrev} class="btn btn-dark">&larr;Previous</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} onClick={this.handleNext} class="btn btn-dark">Next&rarr;</button>
        </div> */}

  </div>
)

}





News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general"
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News
