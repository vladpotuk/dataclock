const getDate = () => {
  const today = new Date();
  return today.toLocaleDateString();
};

module.exports = { getDate };
