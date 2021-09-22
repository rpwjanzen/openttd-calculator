import { Mass } from './Mass.js';
import { Speed } from './Speed.js';
import { Power } from './Power.js';
import { TractiveEffort } from './TractiveEffort.js';
import { TrackGauge } from './TrackGauge.js';
import { Role } from './Role.js';

// length is divided into 1/16 units
export const allEngines = [
    {
        name: "1 Horse",
        mass: Mass.Tonne(1),
        maxSpeed: Speed.MilesPerHour(18),
        power: Power.Hp(5),
        te: TractiveEffort.Kn(2),
        length: 0.25,
        gauge: TrackGauge.plateway,
        role: Role.GeneralPurpose,
        year: 1700,
    },
    {
        name: "2 Horses",
        mass: Mass.Tonne(2),
        maxSpeed: Speed.MilesPerHour(18),
        power: Power.Hp(10),
        te: TractiveEffort.Kn(5),
        length: 0.25,
        gauge: TrackGauge.plateway,
        role: Role.GeneralPurpose,
        year: 1700,
    },
    {
        name: "Puffing Billy",
        mass: Mass.Tonne(7),
        maxSpeed: Speed.MilesPerHour(20),
        power: Power.Hp(15),
        te: TractiveEffort.Kn(6),
        length: 0.5,
        gauge: TrackGauge.plateway,
        role: Role.GeneralPurpose,
        year: 1700,
    },
    {
        name: "Cycloped",
        mass: Mass.Tonne(3),
        maxSpeed: Speed.MilesPerHour(22),
        power: Power.Hp(10),
        te: TractiveEffort.Kn(7),
        length: 0.375,
        gauge: TrackGauge.plateway,
        role: Role.GeneralPurpose,
        year: 1700,
    },
];
