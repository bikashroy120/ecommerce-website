import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";

const Blog = () => {
  return (
    <div className="container_margin_top">
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-md-3 col-12">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Find By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9 col-12">
            <div className="row">
              <div className="col-md-6 col-12 mb-3">
                <BlogCard />
              </div>
              <div className="col-md-6 col-12 mb-3">
                <BlogCard />
              </div>
              <div className="col-md-6 col-12 mb-3">
                <BlogCard />
              </div>
              <div className="col-md-6 col-12 mb-3">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
