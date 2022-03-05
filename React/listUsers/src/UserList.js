import React from "react";
import AverageAge from "./AverageAge";
import UserItem from "./UserItem";
import useres from "./users.json";
const UserList = () => {
  const admin = useres.filter((item) => item.role == "admin");
  console.log(admin);
  let totalAge = 0;
  for (let item of admin) {
    totalAge += item.age;
  }
  console.log(totalAge);
  let avrageAdmin = totalAge / admin.length;
  return (
    <>
      {useres.map((item, index) => (
        <>{item.role === "user" && <UserItem name={item.name} />}</>
      ))}
      <AverageAge average={avrageAdmin} />
    </>
  );
};

export default UserList;
