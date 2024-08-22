import React, { Fragment, useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";

function InputTodo() {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      console.log(response);
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
}

export default InputTodo;
// import Badge from "react-bootstrap/Badge";
// import Button from "react-bootstrap/Button";

// function InputTodo() {
//   return (
//     <Fragment>
//       <h1>
//         Example heading
//         <Badge bg="primary" as={Button}>
//           New
//         </Badge>
//       </h1>
//     </Fragment>
//   );
// }

// export default InputTodo;
