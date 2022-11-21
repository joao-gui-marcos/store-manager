const validateName = (req, res, next) => {
  const product = req.body;

  const hasNameProperty = Object.keys(product).some((e) => e === 'name');
  
  if (!hasNameProperty) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const hasMinimumLength = product.name.length > 5;
  if (!hasMinimumLength) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }

  next();
};

module.exports = {
  validateName,
};