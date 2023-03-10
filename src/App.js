import "./App.css";

import Header from "./component/Header/Header";
import PostList from "./component/PostList/PostList";
import UserList from "./component/UserList/UserList";

function PostListRoot() {
  return (
    <div className="App">
      <Header />
      <PostList />
    </div>
  );
}

function UserListRoot() {
  return (
    <div className="App">
      <Header />
      <UserList />
    </div>
  );
}

export { PostListRoot, UserListRoot };
