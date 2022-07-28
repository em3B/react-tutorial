import React from "react";

import Card from "../UI/Card";
import classes from './UsersList.module.css';

const UsersList = props => {

  return (
  <Card className={classes.users}>
    <ul className={classes.users}>
      {props.users[0].map((user) => (
        <li key={user.id} className={classes.users}>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
  </Card>
  );
};

export default UsersList;
