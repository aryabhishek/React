function Error({ title, message }) {
  return (
    <div className="error">
      {" "}
      // TODO: Add styles to this class
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Error;
