import React, { useState } from "react";
import { Logo, Message, Notification, SearchIcon } from "./AllSvg";

const Navigation = (props) => {
     const [showMenu, setshowMenu] = useState(false);

     const toggle = () => {
          setshowMenu(!showMenu);
     };

     return (
          <header className="header">
               <div className="headerContainer">
                    <div
                         className="headerContainer__hamburgerMenu"
                         onClick={() => props.openMenu()}
                    ></div>
                    <a href="https://dev.to" className="headerContainer__logo">
                         <Logo />
                    </a>

                    <div className="headerContainer__searchBox">
                         <form>
                              <input
                                   type="text"
                                   placeholder="Search..."
                                   aria-label="search"
                              />
                              <SearchIcon className="searchicon" />
                         </form>
                    </div>

                    <div className="headerContainer__right">
                         <button>Create Post</button>
                         <i className="hidden-search">
                              <SearchIcon />
                         </i>
                         <i>
                              <Message />
                         </i>
                         <i>
                              <Notification />
                         </i>

                         <span onClick={toggle}>
                              <img
                                   src="https://picsum.photos/200"
                                   alt="Profile Pictrure"
                              />
                         </span>
                    </div>
               </div>

               <div
                    className={
                         showMenu ? "dropdown-menu" : "dropdown-menu-close"
                    }
               >
                    <ul>
                         <li onClick={toggle}>
                              <a href="/profile">
                                   <div className="u-name">Adeyemo Rasheed</div>
                                   <small className="u-name-id">
                                        @rachidwebdev
                                   </small>
                              </a>
                         </li>

                         <li onClick={toggle}>
                              <a href="/dashboard">Dashboard</a>
                         </li>
                         <li onClick={toggle}>
                              <a href="/post">Writing a Post</a>
                         </li>
                         <li onClick={toggle}>
                              <a href="/list">Reading list</a>
                         </li>
                         <li onClick={toggle}>
                              <a href="/settings">Settings</a>
                         </li>
                         <li onClick={toggle}>
                              <a href="/signout">Signout</a>
                         </li>
                    </ul>
               </div>
          </header>
     );
};

export default Navigation;
