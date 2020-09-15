import React from "react";

function Form() {
  return (
    <form>
      <h2 className="label-wrapper">
        <label className="label__lg" htmlFor="new-todo-input">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
