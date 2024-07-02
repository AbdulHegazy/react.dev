import React from "react";

const Header = () => {
  return (
    <>
      <header className="hide-when-mobile">
        <h1>Life House</h1>
        <ul className="flex">
          <li className="main-list">
            <a className="main-link" href="/hotels">
              Hotels
            </a>
            <ul className="sub-ul">
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1od8EeWqR4nfha-AXsWM5Cy7pereaLno773d5b2nW5a4/edit?gid=0#gid=0"
                  target="_blank"
                >
                  Hotels Summary
                </a>
              </li>
              <li>
                <a href="https://life-house.my.salesforce.com/" target="_blank">
                  SalesForce
                </a>
              </li>
              <li>
                <a
                  href="https://app.mews.com/Commander/Home/SignIn"
                  target="_blank"
                >
                  MEWS
                </a>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <a className="main-link" href="/qa">
              QA Management
            </a>
            <ul className="sub-ul">
              <li>
                <a href="https://app.dev.life-house.com/" target="_blank">
                  Dev Portal
                </a>
              </li>
              <li>
                <a
                  href="https://booking-engine-widget-dev.webflow.io/"
                  target="_blank"
                >
                  BEW
                </a>
              </li>
              <li className="mini-projects">
                <a href="">mini projects&nbsp; + </a>
                <ul className="sub-sub-ul">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <a className="main-link" href="/enrolled">
              Enrolled
            </a>
            <ul className="sub-ul sub-of-js">
              <li>
                <a href="http://localhost:1415">Our Managment</a>
              </li>
            </ul>
          </li>

          <li className="main-list">
            <a className="main-link" href="/">
              Home
            </a>
          </li>
        </ul>
      </header>

      <header className="show-when-mobile">
        <h1>Life House</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              Hotels <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1od8EeWqR4nfha-AXsWM5Cy7pereaLno773d5b2nW5a4/edit?gid=0#gid=0"
                  target="_blank"
                >
                  Hotels Summary
                </a>
              </li>
              <li>
                <a href="https://life-house.my.salesforce.com/" target="_blank">
                  SalesForce
                </a>
              </li>
              <li>
                <a
                  href="https://app.mews.com/Commander/Home/SignIn"
                  target="_blank"
                >
                  MEWS
                </a>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              QA Management <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="https://app.dev.life-house.com/" target="_blank">
                  Dev Portal
                </a>
              </li>
              <li>
                <a
                  href="https://booking-engine-widget-dev.webflow.io/"
                  target="_blank"
                >
                  BEW
                </a>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              Enrolled <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="http://localhost:1415">Our Managment</a>
              </li>
            </ul>
          </div>

        </div>
      </header>
    </>
  );
};

export default Header;
