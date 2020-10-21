import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import {userData} from "../mockup/userData";

export default function Login() {
  let history = useHistory();
  const [state, setState] = useState({
    error: false,

  });
  const login = () => {
    console.log(state);
    if(
      state.userName !== userData.userName
      ||
      state.password !== userData.password
    ) {

      setState(
        (prev) => {
          return {
            ...prev,
            error: true,
          }
        })
      return;
    }
    localStorage.setItem('is_login', true);
    history.push('/profile');
  };

  const formHandler = (event) => {
    const target = event.target;

    setState(
      (prev) => {
        return {
          ...prev,
          [target.name]: target.value
        }
      })
  };

  return (
    <div className={'login-page'}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className={'mb-2'}>Авторизация</h1>
            { state.error &&
              <div className="alert alert-danger" role="alert">
                Имя пользователя или пароль введены не верно
              </div>
            }
          </div>
          <div className="col-md-6">
            <div className="input-group mb-3">
              <input
                name={'userName'}
                value={state.userName}
                onChange={formHandler}
                type="text"
                className="form-control"
                placeholder="Логин"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-group mb-3">
              <input
                name={'password'}
                value={state.password}
                onChange={formHandler}
                type="text"
                className="form-control"
                placeholder="Пароль"
              />
            </div>
          </div>
          <div className="col-md-12">
            <button onClick={login} className={'btn btn-success'}>Войти</button>
          </div>
        </div>
      </div>
    </div>
  )
}
