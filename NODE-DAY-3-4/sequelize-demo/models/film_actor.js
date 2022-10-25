const db = require("./index");
const Film = require("../models/film");
const Actor = require("../models/actor");
const { DataTypes } = require("sequelize");

const FilmActor = db.sequelize.define(
    'film_actor',{
        film_id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Film,
                key: 'film_id',
            },
            onDelete: 'CASCADE',
            allowNull: false,
        },
        actor_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            references: {
                model: Actor,
                key: 'actor_id'
            },
            onDelete: 'CASCADE',
            allowNull: false,
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
)

FilmActor.hasMany(Film, {foreignKey: 'film_id'});
FilmActor.hasMany(Actor, {foreignKey: 'actor_id'});

module.exports = FilmActor;