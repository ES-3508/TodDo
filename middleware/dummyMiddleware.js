const dummyAuthMiddleware = (req, res, next) => {
    // ToDo: Add authentication logic here
    const isAuthenticated = true;
    
    if (isAuthenticated) {
      // If authenticated, proceed to the next middleware or route handler
      next();
    } else {
      // If not authenticated, return unauthorized status
      res.status(401).json({ message: 'Unauthorized' });
    }
  };
  
  module.exports = dummyAuthMiddleware;
  