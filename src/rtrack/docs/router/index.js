/*
 * Created Date: 2019-07-14
 * Author: 宋慧武
 * ------
 * Last Modified: Thursday 2019-08-22 16:51:31 pm
 * Modified By: the developer formerly known as 宋慧武 at <songhuiwu001@ke.com>
 * ------
 * HISTORY:
 * ------
 * Javascript will save your soul!
 */
import React from "react";
import { Prompt } from "react-router";
import { HashRouter, Route, Link } from "react-router-dom";
import Started from "@/views/started";
import Trigger from "@/views/trigger";
import PageInit from "@/views/page-init";
import BlockShow from "@/views/block-show";

const routes = [
  {
    path: "/",
    component: Started
  },
  {
    path: "/trigger",
    component: Trigger
  },
  {
    path: "/page-init",
    component: PageInit
  },
  {
    path: "/block-show",
    component: BlockShow
  }
];

function RouteWithSubRoutes(route) {
  return (
    <Route
      exact={route.path === "/"}
      path={route.path}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
}

export default () => {
  return (
    <HashRouter>
      <main>
        <header>
          <h1 className="title">r-track</h1>
          <div className="command">
            yarn add r-track or npm install r-track --save
          </div>
          <nav>
            <a className="badge" href="https://travis-ci.org/l-hammer/r-track">
              <img
                alt="Travis (.org) branch"
                src="https://img.shields.io/travis/l-hammer/r-track/master.svg?logoColor=%23666666&style=flat-square"
              />
            </a>
            <a
              className="badge"
              href="https://unpkg.com/r-track/dist/r-track.min.js"
            >
              <img
                src="http://img.badgesize.io/https://unpkg.com/r-track/dist/r-track.min.js?compression=gzip&style=flat-square"
                alt="Gzip Size"
              />
            </a>
            <a className="badge" href="https://www.npmjs.com/package/r-track">
              <img
                src="https://img.shields.io/npm/v/r-track.svg?colorB=brightgreen&style=flat-square"
                alt=""
              />
            </a>
            <a
              className="badge"
              href="http://hits.dwyl.io/l-hammer/r-track"
              alt="hit count"
            >
              <img src="http://hits.dwyl.io/l-hammer/r-track.svg" alt="" />
            </a>
            <a className="badge" href="https://github.com/l-hammer/r-track">
              <img
                src="https://img.shields.io/github/stars/l-hammer/r-track.svg?style=social&label=Star"
                alt=""
              />
            </a>
          </nav>
          <div className="description">
            🕹一个基于装饰器 & React的埋点业务插件
          </div>
          <Link className="link" to="/">
            快速开始
          </Link>
          <Link className="link" to="/trigger">
            事件行为埋点
          </Link>
          <Link className="link" to="/page-init">
            页面行为埋点
          </Link>
          <Link className="link" to="/block-show">
            区域展现埋点
          </Link>
          <a className="link" href="https://github.com/l-hammer/r-track/issues">
            打开一个 issue
          </a>
        </header>
        <Prompt message={() => true}></Prompt>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
        <footer className="footer">
          <div className="footer-content mini">
            Copyright © 2019-present LHammer
          </div>
        </footer>
      </main>
    </HashRouter>
  );
};
