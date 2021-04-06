import React from "react";

function PostList({ posts }) {
  return (
    <ul>
      {posts.slice(0, 5).map((post) => {
        return <li key={post.title}>{post.title}</li>;
      })}
    </ul>
  );
}

export default PostList;
