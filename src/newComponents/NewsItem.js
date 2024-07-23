import React  from 'react'

const NewsItem=(props)=>  {
  
    let {title,description,imageUrl,newsUrl,author,date,source}=props; 
    return ( 
      <div className="my-3">
        <div className="card" >
        <span class="position-absolute top-0 translate-middle badge rounded-pill text-bg-danger" style={{left:'90%',zIndex:'1'}} >{source}</span>
          <img src={!imageUrl?"https://static.toiimg.com/thumb/msid-110952003,width-1070,height-580,imgsize-21762,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg":imageUrl} className="card-img-top" alt="..."/> 
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p class="card-text"><small class="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
            </div> 
        </div>
      </div>
    )
  
}

export default NewsItem
