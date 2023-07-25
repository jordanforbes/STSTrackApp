import { useState } from "react";

import axios from "axios";

const NoteBox = (props) => {
  const [notes, setNotes] = useState(props.notes);

  const handleInputChange = (event) => {
    setNotes(event.target.value);
  };

  axios.defaults.baseURL = "http://localhost:3000/";

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .patch(`api/v1/sts_runs/${props.run_id}`, { sts_run: { notes: notes } })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="container">
        <div className="col-md-3"></div>
        <label htmlFor="textInput">Notes:</label>
        <form onSubmit={handleSubmit}>
          <div className="col-md-6">
            <textarea
              className="form-control"
              rows="3"
              type="text"
              id="textInput"
              style={{ resize: "none" }}
              name="sts_run[notes]"
              defaultValue={props.notes}
              onChange={handleInputChange}
            />
          </div>

          <input type="submit" value="Submit" />
        </form>
        <div className="col-md-3"></div>
      </div>
    </>
  );
};

export default NoteBox;
