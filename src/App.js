import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  const [editingMember, setEditingMember] = useState();
  const [editingOrder, setEditingOrder] = useState();
  const [members, setMembers] = useState([
    {
      username: "Grotesque",
      password: "grotesque@test.com",
      language: "Wolof",
    },
    {
      username: "Burlesque",
      password: "burlesque@test.com",
      language: "Tagalog",
    },
    {
      username: "Baroque",
      password: "baroque@test.com",
      language: "Tamil",
    },
  ]);

  function addMember(newMember) {
    console.log("editingOrder", editingOrder);
    if (editingOrder !== undefined) {
      const updatedMembers = [...members];
      updatedMembers.splice(editingOrder, 1, newMember);
      setMembers(updatedMembers);
    } else {
      setMembers([...members, newMember]);
    }
    setEditingOrder();
  }

  function editHelper(memberData, order) {
    setEditingMember(memberData);
    setEditingOrder(order);
  }

  return (
    <div className="App App-header">
      <ul>
        {members.map((member, i) => {
          return (
            <li key={i}>
              {/* <a className="App-link" href={`mailto:${member.email}`}>
                {member.name} - {member.role} //Tıklayınca amail göndermek için//
              </a> */}
              <a className="App-link" href={`mailto:${member.password}`}>
                {member.username} - {member.language}
              </a>
              <button onClick={() => editHelper(member, i)}>Edit</button>
            </li>
          );
        })}
      </ul>
      <Form addMember={addMember} editMode={editingMember} />
    </div>
  );
}

export default App;
