import React from "react";
import { useState } from "react";

const ListOfUsers = () => {
  let [users, setUsers] = useState([
    { id: 1, name: "GoCool", age: 22 },
    { id: 2, name: "Shyam", age: 23 },
    { id: 3, name: "Karthi", age: 21 },
    { id: 4, name: "Roshan", age: 23 },
    { id: 5, name: "Zunil", age: 25 },
  ]);
  const sortByAge = () => {
    const sorted = users.sort((u1, u2) => u1.age - u2.age);
    setUsers([...sorted]);
  };
  const sortByName = () => {
    const sorted = users.sort((u1, u2) => u1.name.localeCompare(u2.name));
    setUsers([...sorted]);
  };

  return (
    <>
      Sort by:{" "}
      <select
        id="sort"
        onChange={(e) =>
          e.target.value === "byAge" ? sortByAge() : sortByName()
        }
      >
        <option value="default">default</option>
        <option value="byAge">Age</option>
        <option value="byName">Name</option>
      </select>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
        {users.map((u) => (
          <tr>
            <td>{u.id}</td> <td>{u.name}</td> <td>{u.age}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default ListOfUsers;
