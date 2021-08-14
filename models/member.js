const Sequelize = require('sequelize');

module.exports = class Member extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      admin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      guest_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Member',
      tableName: 'member',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {
    db.Member.belongsTo(db.User, {
      foreignKey: 'user_id', targetKey: "id",
      onDelete: 'set null'
    });
    db.Member.belongsTo(db.DiaryRoom, {
      foreignKey: 'room_id', targetKey: "id",
      onDelete: 'cascade',
    });
  }
};
