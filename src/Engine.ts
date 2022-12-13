import { Mass } from './Mass.js';
import { Speed } from './Speed.js';
import { Power } from './Power.js';
import { TractiveEffort } from './TractiveEffort.js';
import { TrackGauge } from './TrackGauge.js';
import { Role } from './Role.js';
import { Generation } from './Generation.js';

export interface Engine {
    name: string;
    mass: Mass;
    maxSpeed: Speed;
    power: Power;
    te: TractiveEffort;
    length: number;
    gauge: TrackGauge;
    role: Role;
    generation: Generation;
}
