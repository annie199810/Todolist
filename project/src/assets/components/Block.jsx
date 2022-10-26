/*import React from "react";
import { useState } from "react";
const TodoList = ({}) => {
  const [list, setList] = useState([
    { title: "Arun", description: "descrpiton" },
  ]);
  const [modal, setModal] = useState("");
  const [modals, setModals] = useState([]);
  const [editId, setEditId] = useState(0);
  const handleTask = (e) => {
    e.preventDefault();

    if (modal !== "") {
      setModals([{ id: `${modal}-${Date.now()}`, modal }, ...modals]);
      setModal("");
    }
  };

  const handleSubmit = (id) => {
    const data = {
      title: Math.random().toString(),
      description: "description",
    };
    setList((l) => [...l, data]);
  };

  const handleDelete = (id) => {
    const delmodal = modals.filter((to) => to.id !== id);
    setModals([...delmodal]);
  };

  const handleEdit = (id) => {
    const editmodal = modals.find((i) => i.id === id);
    set(editmodal.modal);
    setEditId(id);
  };
  return (
    <>
      <div>
        <h3>Todo list</h3>
        <button onClick={() => handleTask(t.id)}>Create Task</button>
      </div>
      <div className="task container">
        <label for="myfile"></label>
        <input type="file" id="myfile" name="myfile"></input>
        <br></br>
        <textarea
          name="message"
          rows="1"
          cols="30"
          placeholder="Title"
        ></textarea>
        <br></br>
        <textarea
          name="message"
          rows="10"
          cols="30"
          placeholder="Description"
        ></textarea>
        <br></br>
        <button id="a1" onClick={handleSubmit}>
          submit
        </button>
        <ul>
          {list.map((t) => (
            <li>
              <p key={t.id}>{t.title}</p>
              <p key={t.id}>{t.description}</p>
              <button onClick={() => handleEdit(t.id)}>Edit</button>
              <button onClick={() => handleDelete(t.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default TodoList;
*/
