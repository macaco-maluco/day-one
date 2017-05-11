export default universeAge => solarSystem => {
  return {
    ...solarSystem,
    planets: solarSystem.planets.map(planet => ({
      ...planet,
      translation: universeAge / (planet.orbit * planet.orbit)
    }))
  }
}
