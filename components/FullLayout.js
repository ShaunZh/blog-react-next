/*
 * @Author: Hexon
 * @Date: 2018-12-05 00:01:18
 * @LastEditTime: 2018-12-17 23:17:25
 * @Description: 整个页面的框架布局
 */
import MetaHead from "next/head";
import React from "react";

import Header from "./Header";
import LeftAside from "./LeftAside";
import RightAside from "./RightAside";

const FullLayout = ({
  contactsList = [],
  categorysList = [],
  recommendArticlesList = [],
  tagsList = [],
  children
}) => (
  <div className="full-layout-wrap fs-middle">
    <MetaHead title="放风筝的小小马" />
    <Header />
    <div className="container bk-normal">
      <LeftAside
        className="left-wrap2"
        contactsList={contactsList}
        categorysList={categorysList}
      />
      <div className="right-wrap flex">
        <div className="content">{children}</div>
        <RightAside
          recommendArticlesList={recommendArticlesList}
          tagsList={tagsList}
        />
      </div>
    </div>
    <style jsx global>{`
      
      div.full-layout-wrap {
        margin: 20;
        padding: 20;
        border: 1px solid #ddd;
      }
      .full-layout-wrap > .container {
        padding-top: 15px;
        display: flex;
      }
      .full-layout-wrap > .container > .right-wrap {
      }
      .full-layout-wrap > .container > .right-wrap > .content {
        width: 600px;
        margin: 0 15px;
      }
    `}</style>
  </div>
);

export default FullLayout;
