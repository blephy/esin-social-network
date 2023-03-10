import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./PostList.css";

function PostList() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5000/posts", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      setPostList(await response.json());
    }

    fetchData();
  }, []);

  return (
    <div className="border container">
      {postList.length === 0 ? (
        <CircularProgress />
      ) : (
        postList.map((post, index) => (
          <div key={index}>
            {post.timestamp}
            <br />
            {post.content}
          </div>
        ))
      )}
    </div>
  );
}

export default PostList;
