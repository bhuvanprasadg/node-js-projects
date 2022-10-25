const Actor = require('../models/actor');
const FilmActor = require('../models/film_actor');

FilmActor.belongsTo(Actor, {target_key:'actor_id', foreignKey:'actor_id'});

test("find all actors", async () => {
    try{
        const actors = await FilmActor.findAll({
            offset:10, limit:10,
            include: [{
                model: Actor,
                required: true,
            },],
            through:{ attributes: []},
        });  
        // console.log(JSON.stringify(actors, null, 2));
        expect(actors.length > 0);
    }
    catch(error){
        console.log(error)
    }
});