import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./PostItem.css";

function PostItem(props) {
  const params = useParams();
  const [post, setPost] = useState({});
  const { id } = props;

  const defaultId = id || params.id


  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:5000/post/${defaultId}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      setPost(await response.json());
    }

    fetchData();
  }, [defaultId]);

  return (
    <div className="PostItem">
      <span className="postProperty">{post.userId}</span>
      <br />
      <span className="postProperty">{post.timestamp}</span>
      <br />
      <span className="postProperty">{post.content}</span>
      <br />
    </div>
  );
}

export default PostItem;
