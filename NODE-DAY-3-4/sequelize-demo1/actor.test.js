const Actor = require("./actor");

test("find all actors", async () => {
  const actors = await Actor.findAll();
  expect(actors.length > 0);
  //   console.log(actors.every((actor) => actor instanceof Actor)); // true
  //   console.log("All actors:", JSON.stringify(actors, null, 2));
});
