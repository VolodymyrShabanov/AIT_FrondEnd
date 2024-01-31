console.log("React first steps!");

interface Airplane {
  numberOfEngines: number;
  isJet: boolean;
  maxHeight: number;
  capacity?: number;
}

let airBus: Airplane = {
  numberOfEngines: 4,
  isJet: true,
  maxHeight: 4_0000,
  capacity: 200,
};

console.log(airBus);

let planer: Airplane = {
  numberOfEngines: 0,
  isJet: false,
  maxHeight: 1_000,
  capacity: 2,
};

console.log(planer);

interface SpaceShuttle extends Airplane {
  isReusable: boolean;
}

const apollo135: SpaceShuttle = {
  numberOfEngines: 5,
  isJet: true,
  maxHeight: 291_000,
  capacity: 3,
  isReusable: true,
};

console.log(apollo135);
