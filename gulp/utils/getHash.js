function getHash() {
  return (Math.random() + 1).toString(36).slice(4);
}

module.exports = getHash;
