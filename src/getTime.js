const getTime = () => {
  const now = new Date();
  return now.toLocaleTimeString();
};

module.exports = { getTime };
