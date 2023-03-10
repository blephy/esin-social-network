import "./PostItem.css";

function PostItem(props) {
  const {post} = props

  return(
    <div className="PostItem">
      <span className="postProperty">{post.userId}</span>
      <br />
      <span className="postProperty">{post.timestamp}</span>
      <br />
      <span className="postProperty">{post.content}</span>
      <br />
    </div>
  )

}
export default PostItem;
