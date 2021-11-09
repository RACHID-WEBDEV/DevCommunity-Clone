import React, { useState } from "react";

import {
     Home,
     ReadingList,
     Listings,
     Podcasts,
     Videos,
     Tags,
     Faq,
     DevShop,
     Sponsors,
     AboutSvg,
     Contact,
     CodeOfConduct,
     PrivacyPolicy,
     TermsOfUse,
} from "./AllSvg";

import { IoLogoTwitter, IoLogoFacebook, IoLogoGithub } from "react-icons/io";
import { RiInstagramFill, RiTwitchLine } from "react-icons/ri";
import { CgShapeHexagon } from "react-icons/cg";
import { GrFormClose } from "react-icons/gr";

const tags = [
     "react",
     "graphql",
     "nodejs",
     "sass",
     "javascript",
     "html",
     "css",
     "webdev",
     "opensource",
     "beginners",
     "python",
     "git",
     "vscode",
     "npm",
     "sql",
     "ubuntu",
     "aws",
];

const LeftSidebar = (props) => {
     const [more, setmore] = useState(false);
     const toggle = () => {
          setmore(!more);
     };
     return (
          <>
               <aside className="leftBar">
                    <nav className="leftBar__menu">
                         <ul>
                              <li>
                                   <a href="/home">
                                        <i>
                                             <Home />
                                        </i>
                                        Home
                                   </a>
                              </li>
                              <li>
                                   <a href="/reading">
                                        <i>
                                             <ReadingList />
                                        </i>
                                        Reading List
                                   </a>
                              </li>
                              <li>
                                   <a href="/list">
                                        <i>
                                             <Listings />
                                        </i>
                                        list
                                   </a>
                              </li>
                              <li>
                                   <a href="/podcast">
                                        <i>
                                             <Podcasts />
                                        </i>
                                        Podcasts
                                   </a>
                              </li>
                              <li>
                                   <a href="/videos">
                                        <i>
                                             <Videos />
                                        </i>
                                        Videos
                                   </a>
                              </li>

                              <li>
                                   <a href="/tags">
                                        <i>
                                             <Tags />
                                        </i>
                                        Tags
                                   </a>
                              </li>
                              <li>
                                   <a href="/FAQ">
                                        <i>
                                             <Faq />
                                        </i>
                                        FAQ
                                   </a>
                              </li>

                              {/* <li className={more ? "more hidden" : "more"}>
                                   <i></i>
                                   <a href="/#" onClick={toggle}>
                                        More...
                                   </a>
                              </li> */}

                              {/* <div className={more ? "list" : "list hidden"}>
                                </div>    */}
                              <li>
                                   <a href="/DEV">
                                        <i>
                                             <DevShop />
                                        </i>
                                        DEV Shop
                                   </a>
                              </li>
                              <li>
                                   <a href="/sponsers">
                                        <i>
                                             <Sponsors />
                                        </i>
                                        Sponsers
                                   </a>
                              </li>
                              <li>
                                   <a href="/about">
                                        <i>
                                             <AboutSvg />
                                        </i>
                                        About
                                   </a>
                              </li>
                              <li>
                                   <a href="/contact">
                                        <i>
                                             <Contact />
                                        </i>
                                        Contact
                                   </a>
                              </li>
                         </ul>
                         <header>
                              <h4>Other</h4>
                         </header>
                         <ul>
                              <div>
                                   <li>
                                        <a href="/code">
                                             <i>
                                                  <CodeOfConduct />
                                             </i>
                                             Code of Conduct
                                        </a>
                                   </li>

                                   <li>
                                        <a href="/privacy">
                                             <i>
                                                  <PrivacyPolicy />
                                             </i>
                                             Privacy Policy
                                        </a>
                                   </li>

                                   <li>
                                        <a href="/terms">
                                             <i>
                                                  <TermsOfUse />
                                             </i>
                                             Terms of use
                                        </a>
                                   </li>
                              </div>
                         </ul>
                    </nav>

                    <div
                         className={
                              more
                                   ? "leftBar__social"
                                   : "leftBar__social hidden"
                         }
                    >
                         <a href="/twitter">
                              <i>
                                   <IoLogoTwitter />
                              </i>
                         </a>
                         <a href="/facebook">
                              <i>
                                   <IoLogoFacebook />
                              </i>
                         </a>
                         <a href="/github">
                              <i>
                                   <IoLogoGithub />
                              </i>
                         </a>
                         <a href="/instagram">
                              <i>
                                   <RiInstagramFill />
                              </i>
                         </a>
                         <a href="/twitch">
                              <i>
                                   <RiTwitchLine />
                              </i>
                         </a>
                    </div>
                    <nav className="leftBar__taglist">
                         <header>
                              <h3>My Tags</h3>
                              <i>
                                   <CgShapeHexagon />
                              </i>
                         </header>
                         <ul>
                              {tags.map((tag, id) => {
                                   return (
                                        <li key={id}>
                                             <a href="/#">#{tag}</a>
                                        </li>
                                   );
                              })}
                         </ul>
                    </nav>
               </aside>

               {props.burgerMenu && (
                    <div className="hamburger">
                         <div className="hamburger__content">
                              <header>
                                   <h2>DEV Community</h2>
                                   <button onClick={() => props.closeMenu()}>
                                        <GrFormClose />
                                   </button>
                              </header>

                              <div className="hamburger__content__items">
                                   <nav className="leftBar__menu">
                                        <ul>
                                             <li>
                                                  <a href="/home">
                                                       <i>
                                                            <Home />
                                                       </i>
                                                       Home
                                                  </a>
                                             </li>
                                             <li>
                                                  <a href="/reading">
                                                       <i>
                                                            <ReadingList />
                                                       </i>
                                                       Reading List
                                                  </a>
                                             </li>
                                             <li>
                                                  <a href="/list">
                                                       <i>
                                                            <Listings />
                                                       </i>
                                                       list
                                                  </a>
                                             </li>
                                             <li>
                                                  <a href="/podcast">
                                                       <i>
                                                            <Podcasts />
                                                       </i>
                                                       Podcasts
                                                  </a>
                                             </li>
                                             <li>
                                                  <a href="/videos">
                                                       <i>
                                                            <Videos />
                                                       </i>
                                                       Videos
                                                  </a>
                                             </li>

                                             <li>
                                                  <a href="/tags">
                                                       <i>
                                                            <Tags />
                                                       </i>
                                                       Tags
                                                  </a>
                                             </li>
                                             <li>
                                                  <a href="/FAQ">
                                                       <i>
                                                            <Faq />
                                                       </i>
                                                       FAQ
                                                  </a>
                                             </li>

                                             {/* <li
                                                  className={
                                                       more
                                                            ? "more hidden"
                                                            : "more"
                                                  }
                                             >
                                                  <i></i>
                                                  <a href="/#" onClick={toggle}>
                                                       More...
                                                  </a>
                                             </li>

                                             <div
                                                  className={
                                                       more
                                                            ? "list"
                                                            : "list hidden"
                                                  }
                                             >

                                             </div> */}
                                             <li>
                                                  <a href="/DEV">
                                                       <i>
                                                            <DevShop />
                                                       </i>
                                                       DEV Shop
                                                  </a>
                                             </li>
                                             <li>
                                                  <a href="/sponsers">
                                                       <i>
                                                            <Sponsors />
                                                       </i>
                                                       Sponsers
                                                  </a>
                                             </li>
                                             <li>
                                                  <a href="/about">
                                                       <i>
                                                            <AboutSvg />
                                                       </i>
                                                       About
                                                  </a>
                                             </li>
                                             <li>
                                                  <a href="/contact">
                                                       <i>
                                                            <Contact />
                                                       </i>
                                                       Contact
                                                  </a>
                                             </li>
                                        </ul>
                                        <header>
                                             <h4>Other</h4>
                                        </header>
                                        <ul>
                                             <div>
                                                  <li>
                                                       <a href="/code">
                                                            <i>
                                                                 <CodeOfConduct />
                                                            </i>
                                                            Code of Conduct
                                                       </a>
                                                  </li>

                                                  <li>
                                                       <a href="/privacy">
                                                            <i>
                                                                 <PrivacyPolicy />
                                                            </i>
                                                            Privacy Policy
                                                       </a>
                                                  </li>

                                                  <li>
                                                       <a href="/terms">
                                                            <i>
                                                                 <TermsOfUse />
                                                            </i>
                                                            Terms of use
                                                       </a>
                                                  </li>
                                             </div>
                                        </ul>
                                   </nav>
                                   {/* <div
                                        className={
                                             more
                                                  ? "leftBar__social"
                                                  : "leftBar__social hidden"
                                        }
                                   > */}
                                   <div className={"leftBar__social"}>
                                        <a href="/twitter">
                                             <i>
                                                  <IoLogoTwitter />
                                             </i>
                                        </a>
                                        <a href="/facebook">
                                             <i>
                                                  <IoLogoFacebook />
                                             </i>
                                        </a>
                                        <a href="/github">
                                             <i>
                                                  <IoLogoGithub />
                                             </i>
                                        </a>
                                        <a href="/instagram">
                                             <i>
                                                  <RiInstagramFill />
                                             </i>
                                        </a>
                                        <a href="/twitch">
                                             <i>
                                                  <RiTwitchLine />
                                             </i>
                                        </a>
                                   </div>
                              </div>
                         </div>

                         <div className="hamburger overlay"></div>
                    </div>
               )}
          </>
     );
};

export default LeftSidebar;
