const db = require("./index");
const Actor = require('../models/actor');
const Film = require('../models/film');
const { DataTypes } = require("sequelize");

const FilmActor = db.sequelize.define(
    'film_actor',
    {   
        actor_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            primaryKey: true,
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

FilmActor.hasMany(Film, {foreignKey: 'film_id'});
FilmActor.hasMany(Actor, {foreignKey: 'actor_id'});

module.exports = FilmActor;