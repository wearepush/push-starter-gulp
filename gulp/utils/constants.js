const IS_DEV = process.env.MODE === 'development';

const IS_PROD = process.env.MODE === 'production';

module.exports = {
  IS_DEV,
  IS_PROD,
};
