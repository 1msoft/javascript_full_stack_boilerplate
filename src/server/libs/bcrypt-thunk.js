var bcrypt = require("bcrypt-nodejs");

// These do not need to be promisified
// module.exports = bcrypt.genSaltSync;
// module.exports = bcrypt.hashSync;
// module.exports = bcrypt.compareSync;
// module.exports.getRounds = bcrypt.getRounds;

exports.genSalt = function (rounds, ignore) {
  return new Promise(function (resolve, reject) {
    bcrypt.genSalt(rounds, function (err, salt) {
      if (err) { return reject(err); }
      return resolve(salt);
    });
  });
};

exports.hash = function (data, salt) {
  return new Promise(function (resolve, reject) {
    bcrypt.hash(data, salt, null, function (err, hash) {
      if (err) { return reject(err); }
      return resolve(hash);
    });
  });
};

exports.compare = function (data, hash) {
  return new Promise(function (resolve, reject) {
    bcrypt.compare(data, hash, function (err, matched) {
      if (err) { return reject(err); }
      return resolve(matched);
    });
  });
};