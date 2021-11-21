import forceEdgeBundling from './algorithm';

const latLng2WebMercator = function (lng: number, lat: number) {
  var earthRad = 6378137.0;
  var x = ((lng * Math.PI) / 180) * earthRad;
  var a = (lat * Math.PI) / 180;
  var y = (earthRad / 2) * Math.log((1.0 + Math.sin(a)) / (1.0 - Math.sin(a)));
  return [x, y];
};

const webMercator2LngLat = function (x: number, y: number) {
  var lng = (x / 20037508.34) * 180;
  var lat = (y / 20037508.34) * 180;
  lat =
    (180 / Math.PI) *
    (2 * Math.atan(Math.exp((lat * Math.PI) / 180)) - Math.PI / 2);
  return [lng, lat];
};

const euclideanDistance = (x1: number, y1: number, x2: number, y2: number) =>
  Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2));

const bundle = (
  data: { start: [number, number]; end: [number, number] }[],
  compatibility = 0.6,
  stepSize?: number,
) => {
  const idGenerator = () => {
    let id = 0;
    return () => {
      id++;
      return id.toString();
    };
  };

  const getId = idGenerator();

  const nodeMap: { [K in string]: { x: number; y: number } } = {};
  const edges: { source: string; target: string }[] = [];

  const coordsToIdMap: { [K in string]: string } = {};

  let avgSpan = 0;
  let count = 0;

  data.forEach(({ start, end }) => {
    const findOrGenerateNodeId = (lng: number, lat: number) => {
      const key = '' + lng + lat;
      let id: string;
      if (!coordsToIdMap[key]) {
        id = getId();

        const [x, y] = latLng2WebMercator(lng, lat);

        nodeMap[id] = {
          x,
          y,
        };

        coordsToIdMap[key] = id;
      } else {
        id = coordsToIdMap[key];
      }

      return id;
    };

    const startNodeId = findOrGenerateNodeId(start[0], start[1]);
    const endNodeId = findOrGenerateNodeId(end[0], end[1]);

    const distance = euclideanDistance(
      nodeMap[startNodeId].x,
      nodeMap[startNodeId].y,
      nodeMap[endNodeId].x,
      nodeMap[endNodeId].y,
    );

    avgSpan = (avgSpan * count + distance) / (count + 1);
    count++;

    edges.push({ source: startNodeId, target: endNodeId });
  });

  if (!stepSize) stepSize = avgSpan / 60; // 60 is iteration cycles

  return (
    forceEdgeBundling()
      // @ts-ignore
      .compatibility_threshold(compatibility)
      .step_size(stepSize)
      .nodes(nodeMap)
      .edges(edges)()
      .map((coords: any[]) =>
        coords.map((coord: any) => webMercator2LngLat(coord.x, coord.y)),
      )
  );
};

export default bundle;
