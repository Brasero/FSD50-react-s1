export const townAdapter = (towns) => {
    return towns.map((town) => {
        return {
            coordinate: {
                lon: town.geometry.coordinates[0],
                lat: town.geometry.coordinates[1]
            },
            name: town.properties.name,
            context: town.properties.context
        }
    })
}