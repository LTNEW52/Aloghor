const GenreAuthorCheckBox = (props) => {
  return (
    <>
      <label htmlFor="checkbox">
        <input type="checkbox" className="mr-3 mb-4 w-4 h-4 accent-green-800" />
        {props.labelName}
      </label>
      <br />
    </>
  );
};

export default GenreAuthorCheckBox;
