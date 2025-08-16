import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "./Data/blog";
import ReactMarkdown from "react-markdown";
import "./BlogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="blog-not-found">
        <h2>Blog not found</h2>
        <Link to="/blog" className="back-link">← Back to Blogs</Link>
      </div>
    );
  }

  return (
    <div className="blog-details">
      {blog.image && <img src={blog.image} alt={blog.title} className="blog-image" />}
      {/* <h1 className="blog-title">{blog.title}</h1> */}

      {/* Render Markdown */}
      <div className="blog-content">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>

      <Link to="/blog" className="back-button"><span>←</span> Back to Blogs</Link>
    </div>
  );
};

export default BlogDetails;
