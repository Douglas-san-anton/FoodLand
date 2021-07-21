const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('recipe', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    spoonacularScore: {
      type: DataTypes.INTEGER
    },
    healthScore: {
      type: DataTypes.INTEGER
    },
    analyzedInstructions: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    image : {
      type: DataTypes.STRING
    }
  });

};
