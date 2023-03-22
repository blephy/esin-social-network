import { Fragment, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import "./UserItem.css";

// UserItem
function UserItem(props) {
  const { user, editMode, save, isLoading } = props;

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [image, setImage] = useState(user.image);
  const [favoriteColor, setFavoriteColor] = useState(user.favoriteColor);

  const isEdited = () => {
    return Boolean(
      firstName !== user.firstName ||
      lastName !== user.lastName ||
      Number(age) !== Number(user.age) ||
      image !== user.image ||
      favoriteColor !== user.favoriteColor
    );
  };

  return (
    <Fragment>
      {editMode ? (
        <div className="userItem">
          <input
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <br />
          <input
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <br />
          <input value={age} onChange={(event) => setAge(event.target.value)} />
          <br />
          <input
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
          <br />
          <input
            value={favoriteColor}
            onChange={(event) => setFavoriteColor(event.target.value)}
          />
          <br />
          <br />
          {isEdited() && !isLoading && (
            <button
              onClick={() =>
                save({
                  id: user.id,
                  firstName,
                  lastName,
                  age,
                  image,
                  favoriteColor,
                })
              }
            >
              save
            </button>
          )}
          {isLoading && <CircularProgress />}
        </div>
      ) : (
        <div
          style={{ backgroundColor: user.favoriteColor }}
          className="userItem"
        >
          {user.firstName}
          <br />
          {user.lastName}
          <br />
          {user.age}
          <br />
          <img src={user.image} width="100" height="100" />
        </div>
      )}
    </Fragment>
  );
}

export default UserItem;
