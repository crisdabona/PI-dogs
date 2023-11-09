const { DataTypes } = require('sequelize')

module.exports = Origin = (sequelize) => 
    sequelize.define(
        'Origin',
    {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
    timestamps: false
})
