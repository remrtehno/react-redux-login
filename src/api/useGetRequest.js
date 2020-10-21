import React from 'react';

const get = async (url, params = {}) => {

  return await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'text/json',
      'Authorization': 'Bearer '
    },
  }).then((result) => {
    if(result.status === 500) return result.status;
    if (result.status === 200) {
      return result.clone().json();
    }
  });
};

export default get;