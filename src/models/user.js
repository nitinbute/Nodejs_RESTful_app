const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    type: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    isEmailVerified: DataTypes.BOOLEAN
  }, {});

  //Instance Method verify password
  User.prototype.isPasswordMatch = function (password) {
    return bcrypt.compareSync(password, this.password);
  }

  //Instance Method Remove password from returning response.
  User.prototype.toJSON = function () {
    var values = Object.assign({}, this.get());
    delete values.password;
    return values;
  }

  //Hook to insert password with bcrypt
  User.beforeCreate(async (user, options) => {
    user.password = await bcrypt.hash(user.password, 8);
  });

  //static function to check if email exist before Insert
  User.isEmailTakenCreate = async function (email) {
    const user = await this.findOne({where: { email } });
    return !!user;
  };

  //static function to check if email exist before Update
  User.isEmailTakenUpdate = async function (email, excludeUserId) {
    const user = await this.findOne({where: { email, _id: { $not: excludeUserId } } });
    return !!user;
  };

  /* User.associate = function (models) {
      // associations can be defined here
  };
  */

  return User
};