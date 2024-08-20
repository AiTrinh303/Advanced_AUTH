const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500); 
    res.json({
      error: {
        message: err.message
      }
    });
  };
export default errorHandler;  
