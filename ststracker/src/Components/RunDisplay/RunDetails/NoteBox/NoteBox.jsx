import { useState } from "react";

import axios from "axios";

const NoteBox = (props) => {
  const [notes, setNotes] = useState(props.notes);

  const handleInputChange = (event) => {
    setNotes(event.target.value);
  };

  axios.defaults.baseURL = "http://localhost:3000/";
  const url = `api/v1/sts_runs/${props.run_id}`;

  const handleSubmit = (event) => {
    // event.preventDefault();

    axios
      .patch(url, { sts_run: { notes: notes } })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <label htmlFor="textInput">Notes:</label>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="textInput"
          name="sts_run[notes]"
          defaultValue={props.notes}
          onChange={handleInputChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default NoteBox;
