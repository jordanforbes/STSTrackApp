const NoteBox = (props) => {
  return (
    <>
      <label for="textInput">Notes:</label>
      <form action="/api/v1/update" method="post">
        <input
          type="text"
          id="textInput"
          name="textInput"
          value={props.notes}
        ></input>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default NoteBox;
