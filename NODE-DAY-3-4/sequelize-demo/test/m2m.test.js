const Film = require("../models/film");
const Actor = require("../models/actor");

const FilmActor = require("../models/film_actor");

Film.belongsToMany(Actor, { through: FilmActor, foreignKey: 'film_id'});
Actor.belongsToMany(Film, { through: FilmActor, foreignKey: 'actor_id'});

test("find all film_actors", async () => {
    const film_actor = await FilmActor.findOne({
        where: {film_id:60},
        include: [{
            model: Film,
            include: [{
              model: Actor,
            }]
        }]
    });
    expect(film_actor.length == 10);
    console.log("All actors:", JSON.stringify(film_actor, null, 2));
});