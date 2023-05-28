const NotFound = () => {
  const sad = `:'(`;
  return (
    <div className="notFoundContainer">
      <img width="35%" src="images/error.png" alt="not found" />
      <p className="notFoundText">Oops! Looks like you're lost {sad}</p>
    </div>
  );
};

export default NotFound;
