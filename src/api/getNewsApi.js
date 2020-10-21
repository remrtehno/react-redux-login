import React from "react";
import get from "./useGetRequest";

export default function getNewsApi() {
  return get('http://newsapi.org/v2/top-headlines?country=ru&apiKey=842cd677e6d54b4ab56b95bce3b6e369').then( result => {
    return result;
  });
}
