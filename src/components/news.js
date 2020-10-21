import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {newsItems, getNews} from "../redux/reducers";
import getNewsApi from "../api/getNewsApi";
import Spinner from "./spinner";

export default function News() {
  const {news} = useSelector(newsItems);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let news = await getNewsApi();
      dispatch(getNews(news));
    })();
  }, []);

  return (
    <div className='container'>
      <Spinner toggle={news}/>
      <div className="row">
        {news && news.map((item, key) => {
          return (
            <div key={key} className="col-md-3 mb-5">
              <div className="border-bottom pb-3">
                <img src={item.urlToImage} className='img-fluid mb-3' alt={item.title}/>
                <a target="_blank" href={item.url}><h5>{item.title}</h5></a>
                <p>{item.description}</p>
                <a target="_blank" href={item.url}>Подробнее</a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
