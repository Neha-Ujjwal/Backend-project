// const asyncHandler = () => {

// };

// export { asyncHandler };

const asyncHandler = (requestHandler) => {
  return async (req, res, next) => {
    try {
      await requestHandler(req, res, next);
    } catch (error) {
      res.status(error.code || 500).json({
        success: false,
        message: error.message,
      });
      console.log(error);
    }
  };
};

export { asyncHandler };
