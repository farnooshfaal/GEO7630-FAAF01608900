const numPoints = 10000;
function generateRandomPoints(numPoints) {
    // Define the bounds of the Island of Montreal
    const bounds = [-73.990959, 45.410154, -73.467327, 45.705839];
  
    // Generate an array of random points within the bounds
    const points = [];
    for (let i = 0; i < numPoints; i++) {
      const position = turf.randomPosition(bounds);
      const point = turf.point(position);
      points.push(point);
    }
  
    // Create a FeatureCollection of the points
    const featureCollection = turf.featureCollection(points);
  
    return featureCollection;
  }
  const randomPoints = generateRandomPoints(numPoints);
  function loadRandomPointsLayer() {
    removeAllLayersAndSources()
    map.addSource('rdp-source', {
        type: "geojson",
        data: randomPoints
    })
    map.addLayer({
        'id': 'rdp',
        'type': 'circle',
        'source': 'rdp-source',
        'paint': {
            'circle-radius': {
                'base': 1.75,
                'stops': [
                    [12, 2],
                    [22, 180]
                ]
            },
        }
    })
}

