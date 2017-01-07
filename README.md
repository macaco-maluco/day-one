# Day One

[![Build Status](https://travis-ci.org/macaco-maluco/day-one.svg)](https://travis-ci.org/macaco-maluco/day-one)

The game runs on top of a **procedural generated universe**, with solar systems, planets and other celestial objects that are born and die.

It was implemented as part of the [Node Knockout 2016 hackathon](https://www.nodeknockout.com/entries/55-batata-frita). Check a [video](https://www.youtube.com/watch?v=l-iS5pEy7V8) to see it in action.

You start the game very close to the beginning of time (hence Day One) and must fight to survive for as long as you can before the [heat death of the universe](https://en.wikipedia.org/wiki/Heat_death_of_the_universe). Each game session will last at maximum 6 minutes, which is the lifespan of the universe.

Your goals as the commander of the ship are:

- Construct [Dyson Swarms](https://en.wikipedia.org/wiki/Dyson_sphere#Dyson_swarm) around stars to "harvest" their energy to keep your ship running;
- Find suitable planets (**with water**) to settle populations so that they can grow.

## Features:

- Procedural generated universe with a time arrow (things born and die);
- All the different celestial objects (stars, accretion disks, supernovas, black holes...);
- Complete life-cycle of stars (formation to death);

## Instructions

We recommend Chrome to test the game, but it should also work in mobile devices (try adding it to the Home Screen so that you get a fullscreen experience). **In Firefox, the accretion disk animation is a little bit broken**, but the game is fully playable;

### Interface

- As the player you control the ship in the middle of the screen by clicking on where you want it to go.
- You can interact with any stellar object by clicking on it. On selection, a contextual interface appears in the bottom of the screen with additional information.
- On the top hud you will see a "progress bar" growing from the "Day One"  to "Heath Death" that indicates the time left in the game;

### Energy

- Your ship needs energy constantly to keep functioning, If it runs out of energy the game is over;
- By clicking on a star, it is possible to construct a "Dyson Swarm" to harvest the energy produced by it. It costs 1000 energy units to build a swarm and you can collect energy back in increments of 2000 units.
- Different stars have different lifespans; try to choose stars with longer lifespans ([Red dwarfs](https://en.wikipedia.org/wiki/Red_dwarf)) to construct the swarms.

### Population

*This is a feature that we didn't fully complete, so it won't interfere with the outcome of the game, but nevertheless you can play with it.*

- Your ship contains a number of survivors in cryo-pods;
- You can find planets with water to populate with survivors;
- You can later come back to a planet and off-load parts of its population back to the ship to continually colonize the universe.

### Procedural generation

- Refresh the browser window, the infinite universe restarts from day-one... but it is still the same; Stars will be in the same place and will follow the same lifespan.
- Travel any amount of distance to any direction and come back, whatever you saw, will still be there;
- The only thing that exists is what is on the screen, all derived from a function of (x, y, width, height, time).

### Known issues

- No introduction screen: we had an introduction screen that explained how to play... but we had to remove it because it prevented people from seeing the game. Hope you find the information above was sufficient;
- The Firefox rendering issue mentioned above.

## Resources

- [Sagui](http://sagui.js.org/)
- React
- Redux
- React Motion
- SVG for all the game rendering
- [Alea](https://www.npmjs.com/package/alea) (for the seedable random function)
- Express

The game idea and visuals were heavely inspired by the [Kurzgesagt videos](https://www.youtube.com/user/Kurzgesagt) and [No Man's Sky](https://www.youtube.com/watch?v=nLtmEjqzg7M).
