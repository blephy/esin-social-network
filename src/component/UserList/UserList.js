import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import "./UserList.css";

import UserItem from "../UserItem/UserItem";

function UserList() {
  const [userList, setUserList] = useState([]);
  const [userSelected, setUserSelected] = useState(""); // hooks
  const [isLoading, setIsLoading]= useState(false)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5000/users", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      setUserList(await response.json());
    }

    fetchData();
  }, []);

  function resetUserSelected() {
    setUserSelected("");
  }

  async function handlePost(user) {
    setIsLoading(true)
    const response = await fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    setUserList(await response.json());
    resetUserSelected();
    setIsLoading(false)
  }

  const isEditMode = userList.some((user) => user.id === userSelected);

  return (
    <div className="border container">
      {isEditMode && <button onClick={resetUserSelected}>cancel</button>}
      {userList.length === 0 ? (<CircularProgress />) : userList.map((user, index) => (
        <div key={index} onClick={() => setUserSelected(user.id)}>
          <UserItem
            key={index}
            user={user}
            editMode={user.id === userSelected}
            save={handlePost}
            isLoading={isLoading}
          />
        </div>
      ))}
    </div>
  );
}

export default UserList;
