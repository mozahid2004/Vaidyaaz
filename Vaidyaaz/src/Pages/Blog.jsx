import React from "react";
import "./Blog.css";
import { blogs } from "./Data/blog";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="blog-wrapper">
      {/* Blog Hero Section */}
      <div className="blog-hero">
        <div className="overlay"></div>
        <h1># Blog</h1>
      </div>

      {/* Blog Cards */}
      <div className="blog-content">
        <h2>Latest Articles</h2>
        <p>Stay updated with our latest wellness tips and guides.</p>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <img src={blog.image} alt={blog.title} />
              <div className="blog-card-content">
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <Link to={`/blog/${blog.id}`} className="read-more">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
