import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header className={'mb-4'}>
      <div className="container">
        <nav className={'navbar navbar-light bg-light'}>
          <div class="collapse show navbar-expand">
            <ul className={'navbar-nav'}>
              <li className="nav-item">
                <Link className={'nav-link'} to="/">Главная</Link>
              </li>
              <li className="nav-item">
                <Link className={'nav-link'} to="/news">Новости</Link>
              </li>
              <li className="nav-item">
                <Link className={'nav-link'} to="/profile">Профиль</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
