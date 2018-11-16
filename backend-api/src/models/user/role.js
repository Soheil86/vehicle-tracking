
module.exports = (sequelize, DataTypes) => {

  var role = sequelize.define('role', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: false, allowNull: false },
    roleName: DataTypes.STRING
  }, { 'freezeTableName': true, 'timestamps': false });
  return role;
};
