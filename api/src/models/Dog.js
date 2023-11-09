const { DataTypes } = require('sequelize')


module.exports = Dog = (sequelize) => 
    sequelize.define('Dog', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    height: {
        type: DataTypes.STRING,
        allowNull: true
    },
    weight: {
        type: DataTypes.STRING,
        allowNull: true
    },
    life_span: {
        type: DataTypes.STRING,
        allowNull: true
    },
    temperament: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

 