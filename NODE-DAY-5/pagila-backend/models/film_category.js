const db = require("./index");
const Film = require('./film');
const Category = require('./category');
const { DataTypes } = require("sequelize");

const FilmCategory = db.sequelize.define(
    'film_category',
    {   
        category_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {
                model: Film,
                key: 'film_id',
            },
            onDelete: 'CASCADE',
        },
        film_id:{
            type: DataTypes.TEXT,
            allowNull: false,
            primaryKey: true,
            references: {
                model: Film,
                key: 'film_id',
            },
            onDelete: 'CASCADE',
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
)

FilmCategory.hasMany(Film, {foreignKey: 'film_id'});
FilmCategory.hasMany(Category, {foreignKey: 'category_id'});

module.exports = FilmCategory;