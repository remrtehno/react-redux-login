import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";
import isLogin from "../utils/isLogin";

export default function Profile() {
  let history = useHistory();

  useEffect(function () {
    if (!isLogin()) history.push('/login');
  }, []);

  const logout = () => {
    localStorage.removeItem('is_login');
    history.push('/');
  };

  return (
    <>
      <div className="container">
        <button onClick={logout}>выйти</button>
      </div>
    </>
  )
}
