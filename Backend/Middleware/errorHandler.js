const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? err.statusCode || 500 : res.statusCode;
  res
    .status(statusCode)
    .json({ message: err.message != "" ? err.message : "Something went wrong!" });
};

export default errorHandler;

// So this is a global error handler. If error is called, this middleware handles it. If we dont specify out statusCode, it sets it ti 500, also shows the message we pass with the error.
