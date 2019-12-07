import React, { useContext } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import { friendsContext } from "../contexts/friendsContext";
import { userContext } from "../contexts/userContext";
import Friend from "./Friend";
import Form from "./Form";

const FriendsList = props => {
  const { friendsList, isLoading } = useContext(friendsContext);
  const { userName } = useContext(userContext);
  return (
    <>
      <div className="formContainer">
        <h2>Welcome Back {userName}!</h2>
        <Form />
      </div>
      {isLoading ? (
        <div className="loading">
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <>
          <div className="friendsListContainer">
            {friendsList.length < 1 && <h2>Go Socialize!</h2>}
            {friendsList.map(friend => (
              <Friend friend={friend} key={friend.id} history={props.history} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default FriendsList;
