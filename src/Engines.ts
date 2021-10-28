import { Engine } from './Engine.js';
import { Mass } from './Mass.js';
import { Speed } from './Speed.js';
import { Power } from './Power.js';
import { TractiveEffort } from './TractiveEffort.js';
import { TrackGauge } from './TrackGauge.js';
import { Role } from './Role.js';

// length is divided into 1/16 units
export const allEngines: Engine[] = [
    {
        name: "4-4-2 Lark (Steam)",
        // units on page use Metric Tonne, not Ton (even though mph and hp are used). wtf
        mass: Mass.Tonne(35),
        maxSpeed: Speed.MilesPerHour(60),
        power: Power.Hp(500),
        te: TractiveEffort.Kn(68),
        length: 0.375,
        gauge: TrackGauge.standard,
        role: Role.GeneralPurposeExpress,
        year: 1860,
        expireYear: 1900,
    },
    {
        name: "2-6-2 Merrylegs (Steam)",
        mass: Mass.Tonne(49),
        maxSpeed: Speed.MilesPerHour(75),
        power: Power.Hp(650),
        te: TractiveEffort.Kn(95),
        length: 0.375,
        gauge: TrackGauge.standard,
        role: Role.GeneralPurposeExpress,
        year: 1900,
        expireYear: 1930,
    },
    {
        name: "2-6-2 Proper Job (Steam)",
        role: Role.GeneralPurposeExpress,
        year: 1930,
        maxSpeed: Speed.MilesPerHour(90),
        power: Power.Hp(800),
        mass: Mass.Tonne(57),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(111),
        length: 0.375,
        expireYear: 1960,
    },
    {
        name: "Kelpie (Diesel)",
        role: Role.GeneralPurposeExpress,
        year: 1958,
        maxSpeed: Speed.MilesPerHour(105),
        power: Power.Hp(1450),
        mass: Mass.Tonne(72),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(212),
        length: 0.375,
        expireYear: 1990,
    },
    {
        name: "Griffon (Diesel)",
        role: Role.GeneralPurposeExpress,
        year: 1990,
        maxSpeed: Speed.MilesPerHour(115),
        power: Power.Hp(1650),
        mass: Mass.Tonne(74),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(218),
        length: 0.375,
        expireYear: 3000,
    },

    {
        name: "Pinhorse (Electric)",
        role: Role.GeneralPurposeExpressJoker,
        year: 1903,
        maxSpeed: Speed.MilesPerHour(75),
        power: Power.Hp(900),
        mass: Mass.Tonne(60),
        gauge: TrackGauge.electric,
        te: TractiveEffort.Kn(176),
        length: 0.25,
        expireYear: 1936,
    },
    {
        name: "Argus (Electric)",
        role: Role.GeneralPurposeExpressJoker,
        year: 1936,
        maxSpeed: Speed.MilesPerHour(90),
        power: Power.Hp(1250),
        mass: Mass.Tonne(67),
        gauge: TrackGauge.electric,
        te: TractiveEffort.Kn(197),
        length: 0.25,
        expireYear: 1969,
    },
    {
        name: "Booster (Electric)",
        role: Role.GeneralPurposeExpressJoker,
        year: 1969,
        maxSpeed: Speed.MilesPerHour(105),
        power: Power.Hp(1600),
        mass: Mass.Tonne(70),
        gauge: TrackGauge.electric,
        te: TractiveEffort.Kn(206),
        length: 0.375,
        expireYear: 2002,
    },
    {
        name: "Booster (Diesel)",
        role: Role.GeneralPurposeExpressJoker,
        year: 1969,
        maxSpeed: Speed.MilesPerHour(105),
        power: Power.Hp(600),
        mass: Mass.Tonne(70),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(206),
        length: 0.375,
        expireYear: 2002,
    },
    {
        name: "Tornado (Electric)",
        role: Role.GeneralPurposeExpressJoker,
        year: 2002,
        maxSpeed: Speed.MilesPerHour(115),
        power: Power.Hp(1900),
        mass: Mass.Tonne(70),
        gauge: TrackGauge.electric,
        te: TractiveEffort.Kn(206),
        length: 0.375,
        expireYear: 3000,
    },
    {
        name: "Tornado (Diesel)",
        role: Role.GeneralPurposeExpressJoker,
        year: 2002,
        maxSpeed: Speed.MilesPerHour(115),
        power: Power.Hp(750),
        mass: Mass.Tonne(70),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(206),
        length: 0.375,
        expireYear: 3000,
    },

    {
        name: "4-2-2 Spinner (Steam)",
        mass: Mass.Tonne(78),
        maxSpeed: Speed.MilesPerHour(60),
        power: Power.Hp(950),
        te: TractiveEffort.Kn(92),
        length: 0.5,
        gauge: TrackGauge.standard,
        role: Role.Express,
        year: 1860,
        expireYear: 1897,
    },
    {
        name: "4-4-0 Carrack (Steam)",
        role: Role.GeneralPurposeExpress,
        year: 1897,
        maxSpeed: Speed.MilesPerHour(75),
        power: Power.Hp(1150),
        mass: Mass.Tonne(90),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(158),
        length: 0.5,
        expireYear: 1930,
    },
    {
        name: "4-4-0 Tencendur (Steam)",
        role: Role.GeneralPurposeExpress,
        year: 1930,
        maxSpeed: Speed.MilesPerHour(90),
        power: Power.Hp(1400),
        mass: Mass.Tonne(110),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(193),
        length: 0.5,
        expireYear: 1961,
    },
    {
        name: "Daring (Diesel)",
        role: Role.GeneralPurposeExpress,
        year: 1961,
        maxSpeed: Speed.MilesPerHour(105),
        power: Power.Hp(1750),
        mass: Mass.Tonne(75),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(221),
        length: 0.5,
        expireYear: 1958,
    },
    {
        name: "Shredder (Diesel)",
        role: Role.GeneralPurposeExpress,
        year: 1997,
        maxSpeed: Speed.MilesPerHour(125),
        power: Power.Hp(2100),
        mass: Mass.Tonne(76),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(224),
        length: 0.5,
        expireYear: 3000,
    },

    {
        name: "2-4-0 Reliance (Steam)",
        role: Role.GeneralPurposeExpressJoker,
        year: 1860,
        maxSpeed: Speed.MilesPerHour(60),
        power: Power.Hp(950),
        mass: Mass.Tonne(86),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(102),
        length: 0.5,
        expireYear: 1897,
    },
    {
        name: "Shoebox (Electro)",
        role: Role.GeneralPurposeExpressJoker,
        year: 1963,
        maxSpeed: Speed.MilesPerHour(105),
        power: Power.Hp(2300),
        mass: Mass.Tonne(86),
        gauge: TrackGauge.electric,
        te: TractiveEffort.Kn(197),
        length: 0.5,
        expireYear: 1990,
    },
    {
        name: "Shoebox (Diesel)",
        role: Role.GeneralPurposeExpressJoker,
        year: 1963,
        maxSpeed: Speed.MilesPerHour(105),
        power: Power.Hp(950),
        mass: Mass.Tonne(86),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(197),
        length: 0.5,
        expireYear: 1990,
    },
    {
        name: "Super Shoebox (Electric)",
        role: Role.GeneralPurposeExpressJoker,
        year: 1990,
        maxSpeed: Speed.MilesPerHour(115),
        power: Power.Hp(2600),
        mass: Mass.Tonne(73),
        gauge: TrackGauge.electric,
        te: TractiveEffort.Kn(212),
        length: 0.5,
        expireYear: 2020,
    },
    {
        name: "Super Shoebox (Diesel)",
        role: Role.GeneralPurposeExpressJoker,
        year: 1990,
        maxSpeed: Speed.MilesPerHour(115),
        power: Power.Hp(1250),
        mass: Mass.Tonne(73),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(212),
        length: 0.5,
        expireYear: 2020,
    },
    {
        name: "Ultra Shoebox (Electric)",
        role: Role.GeneralPurposeExpressJoker,
        year: 2020,
        maxSpeed: Speed.MilesPerHour(125),
        power: Power.Hp(2800),
        mass: Mass.Tonne(70),
        gauge: TrackGauge.electric,
        te: TractiveEffort.Kn(229),
        length: 0.5,
        expireYear: 3000,
    },
    {
        name: "Ultra Shoebox (Diesel)",
        role: Role.GeneralPurposeExpressJoker,
        year: 2020,
        maxSpeed: Speed.MilesPerHour(125),
        power: Power.Hp(1650),
        mass: Mass.Tonne(70),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(229),
        length: 0.5,
        expireYear: 3000,
    },


    {
        name: "4-4-2 Swift (Steam)",
        role: Role.HeavyGeneralPurposeExpress,
        year: 1900,
        maxSpeed: Speed.MilesPerHour(75),
        power: Power.Hp(1550),
        mass: Mass.Tonne(115),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(202),
        length: 0.625,
        expireYear: 1930,
    },
    {
        name: "4-6-0 Strongbow (Steam)",
        role: Role.HeavyGeneralPurposeExpress,
        year: 1930,
        maxSpeed: Speed.MilesPerHour(90),
        power: Power.Hp(1900),
        mass: Mass.Tonne(130),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(228),
        length: 0.625,
        expireYear: 1954,
    },
    {
        name: "Wyvern (Diesel)",
        role: Role.HeavyGeneralPurposeExpress,
        year: 1954,
        maxSpeed: Speed.MilesPerHour(105),
        power: Power.Hp(2200),
        mass: Mass.Tonne(130),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(383),
        length: 0.5,
        expireYear: 1992,
    },
    {
        name: "Vanguard (Diesel)",
        role: Role.HeavyGeneralPurposeExpress,
        year: 1992,
        maxSpeed: Speed.MilesPerHour(115),
        power: Power.Hp(2550),
        mass: Mass.Tonne(115),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(449),
        length: 0.5,
        expireYear: 2018,
    },
    {
        name: "Revolution (Diesel)",
        role: Role.HeavyGeneralPurposeExpress,
        year: 2018,
        maxSpeed: Speed.MilesPerHour(125),
        power: Power.Hp(2750),
        mass: Mass.Tonne(95),
        gauge: TrackGauge.electric,
        te: TractiveEffort.Kn(280),
        length: 0.5,
        expireYear: 3000,
    },
    {
        name: "Revolution (Electro)",
        role: Role.HeavyGeneralPurposeExpress,
        year: 2018,
        maxSpeed: Speed.MilesPerHour(125),
        power: Power.Hp(4200),
        mass: Mass.Tonne(95),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(280),
        length: 0.5,
        expireYear: 3000,
    },

    {
        name: "4-6-0 Thunderer (Steam)",
        role: Role.HeavyGeneralPurposeExpressJoker,
        year: 1910,
        maxSpeed: Speed.MilesPerHour(75),
        power: Power.Hp(1500),
        mass: Mass.Tonne(112),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(218),
        length: 0.625,
        expireYear: 1960,
    },
    {
        name: "Tenacious (Diesel)",
        role: Role.HeavyGeneralPurposeExpressJoker,
        year: 1960,
        maxSpeed: Speed.MilesPerHour(105),
        power: Power.Hp(2150),
        mass: Mass.Tonne(80),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(0),
        length: 0.5,
        expireYear: 1986,
    },



    {
        name: "2-6-2 Arrow (Steam)",
        role: Role.HeavyGeneralPurposeExpressJoker,
        year: 1934,
        maxSpeed: Speed.MilesPerHour(90),
        power: Power.Hp(1900),
        mass: Mass.Tonne(140),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(383),
        length: 0.625,
        expireYear: 1962,
    },
    {
        name: "Intrepid (Diesel)",
        role: Role.HeavyGeneralPurposeExpressJoker,
        year: 1962,
        maxSpeed: Speed.MilesPerHour(105),
        power: Power.Hp(2200),
        mass: Mass.Tonne(115),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(383),
        length: 0.5,
        expireYear: 1986,
    },
    {
        name: "Resilient (Diesel)",
        role: Role.HeavyGeneralPurposeExpressJoker,
        year: 1986,
        maxSpeed: Speed.MilesPerHour(115),
        power: Power.Hp(2550),
        mass: Mass.Tonne(112),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(330),
        length: 0.5,
        expireYear: 2018,
    },
    {
        name: "Evolution (Diesel)",
        role: Role.HeavyGeneralPurposeExpressJoker,
        year: 2018,
        maxSpeed: Speed.MilesPerHour(125),
        power: Power.Hp(2750),
        mass: Mass.Tonne(112),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(330),
        length: 0.5,
        expireYear: 3000,
    },

    {
        name: "2-8-2 Pegasus (Steam)",
        role: Role.HeavyGeneralPurposeExpress,
        year: 1930,
        maxSpeed: Speed.MilesPerHour(90),
        power: Power.Hp(2200),
        mass: Mass.Tonne(150),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(367),
        length: 0.75,
        expireYear: 1961,
    },
    {
        name: "Dragon (Diesel)",
        role: Role.HeavyGeneralPurposeExpress,
        year: 1961,
        maxSpeed: Speed.MilesPerHour(105),
        power: Power.Hp(2750),
        mass: Mass.Tonne(99),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(291),
        length: 0.5,
        expireYear: 1982,
    },
    {
        name: "Onslaught (Diesel)",
        role: Role.HeavyGeneralPurposeExpress,
        year: 1982,
        maxSpeed: Speed.MilesPerHour(115),
        power: Power.Hp(3300),
        mass: Mass.Tonne(100),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(294),
        length: 0.5,
        expireYear: 2013,
    },
    {
        name: "Relentless (Diesel)",
        role: Role.HeavyGeneralPurposeExpress,
        year: 2013,
        maxSpeed: Speed.MilesPerHour(125),
        power: Power.Hp(3950),
        mass: Mass.Tonne(95),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(280),
        length: 0.5,
        expireYear: 3000,
    },

    {
        name: "4-6-4 Streamer (Steam)",
        role: Role.HeavyGeneralPurposeExpressJoker,
        year: 1934,
        maxSpeed: Speed.MilesPerHour(90),
        power: Power.Hp(2200),
        mass: Mass.Tonne(150),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(213),
        length: 0.625,
        expireYear: 1961,
    },
    {
        name: "Vulcan (Diesel)",
        role: Role.HeavyFreight,
        year: 1961,
        maxSpeed: Speed.MilesPerHour(105),
        power: Power.Hp(2750),
        mass: Mass.Tonne(105),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(309),
        length: 0.5,
        expireYear: 1982,
    },

    {
        name: "Hurly Burly (Electric)",
        role: Role.SuperHeavyGeneralPurposeExpress,
        year: 1905,
        maxSpeed: Speed.MilesPerHour(75),
        power: Power.Hp(1800),
        mass: Mass.Tonne(90),
        gauge: TrackGauge.electric,
        te: TractiveEffort.Kn(220),
        length: 0.5,
        expireYear: 1935,
    },
    {
        name: "Moor Gallop (Electric)",
        role: Role.SuperHeavyGeneralPurposeExpress,
        year: 1935,
        maxSpeed: Speed.MilesPerHour(90),
        power: Power.Hp(2400),
        mass: Mass.Tonne(105),
        gauge: TrackGauge.electric,
        te: TractiveEffort.Kn(257),
        length: 0.5,
        expireYear: 1963,
    },
    {
        name: "Roarer (Electric)",
        role: Role.SuperHeavyGeneralPurposeExpress,
        year: 1963,
        maxSpeed: Speed.MilesPerHour(105),
        power: Power.Hp(3000),
        mass: Mass.Tonne(80),
        gauge: TrackGauge.electric,
        te: TractiveEffort.Kn(235),
        length: 0.5,
        expireYear: 1991,
    },
    {
        name: "Fury (Electric)",
        role: Role.SuperHeavyGeneralPurposeExpress,
        year: 1991,
        maxSpeed: Speed.MilesPerHour(115),
        power: Power.Hp(3600),
        mass: Mass.Tonne(82),
        gauge: TrackGauge.electric,
        te: TractiveEffort.Kn(241),
        length: 0.5,
        expireYear: 2021,
    },
    {
        name: "Hector (Electric)",
        role: Role.SuperHeavyGeneralPurposeExpress,
        year: 2021,
        maxSpeed: Speed.MilesPerHour(125),
        power: Power.Hp(4040),
        mass: Mass.Tonne(83),
        gauge: TrackGauge.electric,
        te: TractiveEffort.Kn(244),
        length: 0.5,
        expireYear: 3000,
    },

    {
        name: "Zebedee (Electric)",
        role: Role.SuperHeavyGeneralPurposeExpressJoker,
        year: 1969,
        maxSpeed: Speed.MilesPerHour(105),
        power: Power.Hp(4000),
        mass: Mass.Tonne(82),
        gauge: TrackGauge.electric,
        te: TractiveEffort.Kn(0),
        length: 0.5,
        expireYear: 1992,
    },
    {
        name: "Screamer (Electric)",
        role: Role.SuperHeavyGeneralPurposeExpressJoker,
        year: 1992,
        maxSpeed: Speed.MilesPerHour(115),
        power: Power.Hp(4800),
        mass: Mass.Tonne(85),
        gauge: TrackGauge.electric,
        te: TractiveEffort.Kn(0),
        length: 0.5,
        expireYear: 2023,
    },
    {
        name: "Numbus (Electric)",
        role: Role.SuperHeavyGeneralPurposeExpressJoker,
        year: 2023,
        maxSpeed: Speed.MilesPerHour(125),
        power: Power.Hp(5400),
        mass: Mass.Tonne(85),
        gauge: TrackGauge.electric,
        te: TractiveEffort.Kn(0),
        length: 0.5,
        expireYear: 3000,
    },



    {
        name: "Avenger (Electric)",
        role: Role.SuperHeavyGeneralPurposeExpress,
        year: 1988,
        maxSpeed: Speed.MilesPerHour(115),
        power: Power.Hp(5800),
        mass: Mass.Tonne(100),
        gauge: TrackGauge.electric,
        te: TractiveEffort.Kn(294),
        length: 0.5,
        expireYear: 3000,
    },
    {
        name: "Sizzler (Electric)",
        role: Role.SuperHeavyGeneralPurposeExpress,
        year: 2022,
        maxSpeed: Speed.MilesPerHour(125),
        power: Power.Hp(6600),
        mass: Mass.Tonne(82),
        gauge: TrackGauge.electric,
        te: TractiveEffort.Kn(241),
        length: 0.5,
        expireYear: 3000,
    },

    {
        name: "0-6-0 Hercules (Steam)",
        role: Role.Freight,
        year: 1860,
        maxSpeed: Speed.MilesPerHour(45),
        power: Power.Hp(1100),
        mass: Mass.Tonne(89),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(207),
        length: 0.5,
        expireYear: 3000,
    },
    {
        name: "2-6-0 Braf (Steam)",
        role: Role.Freight,
        year: 1900,
        maxSpeed: Speed.MilesPerHour(45),
        power: Power.Hp(1250),
        mass: Mass.Tonne(98),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(228),
        length: 0.5,
        expireYear: 3000,
    },
    {
        name: "0-8-0 Haar (Steam)",
        role: Role.Freight,
        year: 1930,
        maxSpeed: Speed.MilesPerHour(60),
        power: Power.Hp(1500),
        mass: Mass.Tonne(110),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(256),
        length: 0.5,
        expireYear: 3000,
    },
    {
        name: "Growler (Diesel)",
        role: Role.Freight,
        year: 1960,
        maxSpeed: Speed.MilesPerHour(75),
        power: Power.Hp(1750),
        mass: Mass.Tonne(100),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(294),
        length: 0.5,
        expireYear: 3000,
    },
    {
        name: "Slug (Diesel)",
        role: Role.Freight,
        year: 1990,
        maxSpeed: Speed.MilesPerHour(87),
        power: Power.Hp(1950),
        mass: Mass.Tonne(110),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(324),
        length: 0.5,
        expireYear: 3000,
    },
    {
        name: "Phoenix (Diesel)",
        role: Role.Freight,
        year: 2020,
        maxSpeed: Speed.MilesPerHour(87),
        power: Power.Hp(2100),
        mass: Mass.Tonne(120),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(353),
        length: 0.5,
        expireYear: 3000,
    },

    {
        name: "0-6-2 Buffalo (Steam)",
        role: Role.FreightJoker,
        year: 1860,
        maxSpeed: Speed.MilesPerHour(45),
        power: Power.Hp(650),
        mass: Mass.Tonne(46),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(135),
        length: 0.375,
        expireYear: 3000,
    },
    {
        name: "0-8-0 Saxon (Steam)",
        role: Role.Freight,
        year: 1922,
        maxSpeed: Speed.MilesPerHour(60),
        power: Power.Hp(1000),
        mass: Mass.Tonne(65),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(238),
        length: 0.375,
        expireYear: 3000,
    },
    {
        name: "Captain Steel (Diesel)",
        role: Role.Freight,
        year: 1960,
        maxSpeed: Speed.MilesPerHour(75),
        power: Power.Hp(1150),
        mass: Mass.Tonne(70),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(257),
        length: 0.375,
        expireYear: 3000,
    },



    {
        name: "Little Bear (Diesel)",
        role: Role.Freight,
        year: 1954,
        maxSpeed: Speed.MilesPerHour(75),
        power: Power.Hp(1150),
        mass: Mass.Tonne(68),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(249),
        length: 0.375,
        expireYear: 3000,
    },
    {
        name: "Goliath (Diesel)",
        role: Role.Freight,
        year: 1992,
        maxSpeed: Speed.MilesPerHour(87),
        power: Power.Hp(1300),
        mass: Mass.Tonne(71),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(260),
        length: 0.375,
        expireYear: 3000,
    },

    {
        name: "Stoat (Electric)",
        role: Role.Freight,
        year: 1903,
        maxSpeed: Speed.MilesPerHour(60),
        power: Power.Hp(1050),
        mass: Mass.Tonne(54),
        gauge: TrackGauge.electric,
        te: TractiveEffort.Kn(159),
        length: 0.375,
        expireYear: 3000,
    },
    {
        name: "Zest (Electric)",
        role: Role.Freight,
        year: 1966,
        maxSpeed: Speed.MilesPerHour(75),
        power: Power.Hp(1600),
        mass: Mass.Tonne(54),
        gauge: TrackGauge.electric,
        te: TractiveEffort.Kn(159),
        length: 0.5,
        expireYear: 3000,
    },

    {
        name: "4-6-0 Blind Smuir (Steam)",
        role: Role.HeavyFreightJoker,
        year: 1932,
        maxSpeed: Speed.MilesPerHour(75),
        power: Power.Hp(1850),
        mass: Mass.Tonne(136),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(291),
        length: 0.625,
        expireYear: 3000,
    },

    {
        name: "2-8-0 Vigilant (Steam)",
        role: Role.HeavyFreight,
        year: 1900,
        maxSpeed: Speed.MilesPerHour(45),
        power: Power.Hp(1850),
        mass: Mass.Tonne(132),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(414),
        length: 0.625,
        expireYear: 3000,
    },
    {
        name: "4-8-0 Lemon (Steam)",
        role: Role.HeavyFreight,
        year: 1930,
        maxSpeed: Speed.MilesPerHour(75),
        power: Power.Hp(2400),
        mass: Mass.Tonne(165),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(467),
        length: 0.75,
        expireYear: 3000,
    },
    {
        name: "Chinook (Diesel)",
        role: Role.HeavyFreight,
        year: 1960,
        maxSpeed: Speed.MilesPerHour(75),
        power: Power.Hp(2900),
        mass: Mass.Tonne(160),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(471),
        length: 0.75,
        expireYear: 3000,
    },
    {
        name: "Grid (Diesel)",
        role: Role.HeavyFreight,
        year: 1980,
        maxSpeed: Speed.MilesPerHour(87),
        power: Power.Hp(3300),
        mass: Mass.Tonne(120),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(353),
        length: 0.5,
        expireYear: 3000,
    },
    {
        name: "Blackthorn (Diesel)",
        role: Role.HeavyFreight,
        year: 2020,
        maxSpeed: Speed.MilesPerHour(87),
        power: Power.Hp(3650),
        mass: Mass.Tonne(124),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(365),
        length: 0.5,
        expireYear: 3000,
    },

    {
        name: "0-10-0 Girt Licker (Steam)",
        year: 1906,
        maxSpeed: Speed.MilesPerHour(45),
        power: Power.Hp(1850),
        mass: Mass.Tonne(145),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(466),
        length: 0.625,
        role: Role.HeavyFreightJoker,
        expireYear: 1930,
    },
    {
        name: "2-6-0+0-6-2 Esk (Steam)",
        year: 1930,
        maxSpeed: Speed.MilesPerHour(60),
        power: Power.Hp(2400),
        mass: Mass.Tonne(180),
        te: TractiveEffort.Kn(702),
        length: 0.75,
        gauge: TrackGauge.standard,
        role: Role.HeavyFreightJoker,
        expireYear: 1960,
    },
    {
        name: "Withershins (Diesel)",
        role: Role.Freight,
        year: 1960,
        maxSpeed: Speed.MilesPerHour(75),
        power: Power.Hp(2900),
        mass: Mass.Tonne(164),
        te: TractiveEffort.Kn(483),
        length: 0.75,
        gauge: TrackGauge.standard,
        expireYear: 1988,
    },
    {
        name: "Bone (Diesel)",
        year: 1988,
        maxSpeed: Speed.MilesPerHour(87),
        power: Power.Hp(3300),
        mass: Mass.Tonne(125),
        te: TractiveEffort.Kn(368),
        length: 0.5,
        gauge: TrackGauge.standard,
        role: Role.HeavyFreightJoker,
        expireYear: 2016,
    },
    {
        name: "Defiant (Diesel)",
        year: 2016,
        maxSpeed: Speed.MilesPerHour(87),
        power: Power.Hp(3650),
        mass: Mass.Tonne(100),
        te: TractiveEffort.Kn(348),
        length: 0.5,
        gauge: TrackGauge.standard,
        role: Role.HeavyFreightJoker,
        expireYear: 3000,
    },

    {
        name: "2-6-0 Diablo (Steam)",
        role: Role.FreightJoker,
        year: 1934,
        maxSpeed: Speed.MilesPerHour(75),
        power: Power.Hp(1500),
        mass: Mass.Tonne(106),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(227),
        length: 0.5,
        expireYear: 1958,
    },
    {
        name: "Merlion (Diesel)",
        role: Role.GeneralPurposeExpress,
        year: 1958,
        maxSpeed: Speed.MilesPerHour(105),
        power: Power.Hp(1750),
        mass: Mass.Tonne(105),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(265),
        length: 0.5,
        expireYear: 1996,
    },
    {
        name: "Viking (Diesel)",
        role: Role.FreightJoker,
        year: 1996,
        maxSpeed: Speed.MilesPerHour(87),
        power: Power.Hp(1950),
        mass: Mass.Tonne(95),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(280),
        length: 0.5,
        expireYear: 3000,
    },
    {
        name: "2-8-0 Mainstay (Steam)",
        role: Role.HeavyFreight,
        year: 1930,
        maxSpeed: Speed.MilesPerHour(60),
        power: Power.Hp(1850),
        mass: Mass.Tonne(145),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(329),
        length: 0.625,
        expireYear: 3000,
    },
    {
        name: "Yillen",
        role: Role.HeavyFreight,
        year: 1958,
        maxSpeed: Speed.MilesPerHour(75),
        power: Power.Hp(2200),
        mass: Mass.Tonne(140),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(412),
        length: 0.625,
        expireYear: 3000,
    },

    {
        name: "Cheddar Valley (Diesel)",
        role: Role.SuperHeavyFreight,
        year: 1993,
        maxSpeed: Speed.MilesPerHour(87),
        power: Power.Hp(4050),
        mass: Mass.Tonne(125),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(488),
        length: 0.5,
        expireYear: 2019,
    },
    {
        name: "Highlander (Diesel)",
        role: Role.SuperHeavyFreight,
        year: 2019,
        maxSpeed: Speed.MilesPerHour(87),
        power: Power.Hp(4550),
        mass: Mass.Tonne(128),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(499),
        length: 0.5,
        expireYear: 3000,
    },

    {
        name: "Stentor (Diesel)",
        role: Role.SuperHeavyFreightJoker,
        year: 1993,
        maxSpeed: Speed.MilesPerHour(87),
        power: Power.Hp(4050),
        mass: Mass.Tonne(128),
        gauge: TrackGauge.standard,
        te: TractiveEffort.Kn(499),
        length: 0.5,
        expireYear: 2020,
    },
    {
        name: "Toaster (Diesel)",
        year: 2020,
        maxSpeed: Speed.MilesPerHour(87),
        power: Power.Hp(4550),
        mass: Mass.Tonne(130),
        te: TractiveEffort.Kn(507),
        length: 0.5,
        gauge: TrackGauge.standard,
        role: Role.SuperHeavyFreightJoker,
        expireYear: 3000,
    },

    {
        name: "Flindermouse (Electric)",
        role: Role.SuperHeavyFreight,
        year: 1907,
        maxSpeed: Speed.MilesPerHour(60),
        power: Power.Hp(2500),
        mass: Mass.Tonne(130),
        gauge: TrackGauge.electric,
        te: TractiveEffort.Kn(383),
        length: 0.5,
        expireYear: 1947,
    },
    {
        name: "Peasweep (Electric)",
        role: Role.SuperHeavyFreight,
        year: 1947,
        maxSpeed: Speed.MilesPerHour(75),
        power: Power.Hp(3700),
        mass: Mass.Tonne(150),
        gauge: TrackGauge.electric,
        te: TractiveEffort.Kn(442),
        length: 0.75,
        expireYear: 1987,
    },
    {
        name: "Flanders Storm (Electric)",
        role: Role.SuperHeavyFreight,
        year: 1987,
        maxSpeed: Speed.MilesPerHour(87),
        power: Power.Hp(5800),
        mass: Mass.Tonne(120),
        gauge: TrackGauge.electric,
        te: TractiveEffort.Kn(468),
        length: 0.5,
        expireYear: 2024,
    },
    {
        name: "Triton (Electric)",
        role: Role.SuperHeavyFreight,
        year: 2024,
        maxSpeed: Speed.MilesPerHour(87),
        power: Power.Hp(7200),
        mass: Mass.Tonne(128),
        gauge: TrackGauge.electric,
        te: TractiveEffort.Kn(499),
        length: 0.5,
        expireYear: 3000,
    },

    {
        name: "2-6-2 Cheese Bug (Steam)",
        mass: Mass.Tonne(16),
        maxSpeed: Speed.MilesPerHour(45),
        power: Power.Hp(300),
        te: TractiveEffort.Kn(31),
        length: 0.25,
        gauge: TrackGauge.narrow,
        role: Role.GeneralPurpose,
        year: 1860,
        expireYear: 1905,
    },
    {
        name: "2-6-4 Bean Feast (Steam)",
        year: 1905,
        maxSpeed: Speed.MilesPerHour(45),
        power: Power.Hp(400),
        mass: Mass.Tonne(22),
        te: TractiveEffort.Kn(42),
        length: 0.25,
        gauge: TrackGauge.narrow,
        role: Role.GeneralPurpose,
        expireYear: 1950,
    },
    {
        name: "Pikel (Diesel)",
        year: 1950,
        maxSpeed: Speed.MilesPerHour(55),
        power: Power.Hp(500),
        mass: Mass.Tonne(22),
        te: TractiveEffort.Kn(64),
        length: 0.25,
        gauge: TrackGauge.narrow,
        role: Role.GeneralPurpose,
        expireYear: 2000,
    },
    {
        name: "Boar Cat (Diesel)",
        year: 2000,
        maxSpeed: Speed.MilesPerHour(65),
        power: Power.Hp(600),
        mass: Mass.Tonne(23),
        te: TractiveEffort.Kn(67),
        length: 0.25,
        gauge: TrackGauge.narrow,
        role: Role.GeneralPurpose,
        expireYear: 3000,
    },

    {
        name: "0-4-4-0 Thor (Steam)",
        year: 1875,
        maxSpeed: Speed.MilesPerHour(45),
        power: Power.Hp(600),
        mass: Mass.Tonne(30),
        te: TractiveEffort.Kn(88),
        length: 0.375,
        gauge: TrackGauge.narrow,
        role: Role.GeneralPurpose,
        expireYear: 1965,
    },
    {
        name: "Gargouille (Diesel)",
        year: 1965,
        maxSpeed: Speed.MilesPerHour(55),
        power: Power.Hp(750),
        mass: Mass.Tonne(30),
        te: TractiveEffort.Kn(88),
        length: 0.375,
        gauge: TrackGauge.narrow,
        role: Role.GeneralPurpose,
        expireYear: 2010,
    },
    {
        name: "Maximillian (Diesel)",
        year: 2010,
        maxSpeed: Speed.MilesPerHour(65),
        power: Power.Hp(900),
        mass: Mass.Tonne(31),
        te: TractiveEffort.Kn(91),
        length: 0.375,
        gauge: TrackGauge.narrow,
        role: Role.GeneralPurpose,
        expireYear: 3000,
    },

    {
        name: "Grub (Steam)",
        mass: Mass.Tonne(36),
        maxSpeed: Speed.MilesPerHour(35),
        power: Power.Hp(350),
        te: TractiveEffort.Kn(132),
        length: 0.25,
        gauge: TrackGauge.standard,
        role: Role.Joker,
        year: 1860,
        expireYear: 1951,
    },
    {
        name: "Gronk (Diesel)",
        mass: Mass.Tonne(36),
        maxSpeed: Speed.MilesPerHour(35),
        power: Power.Hp(400),
        te: TractiveEffort.Kn(202),
        length: 0.25,
        gauge: TrackGauge.standard,
        role: Role.Joker,
        year: 1951,
        expireYear: 3000,
    },
    {
        name: "0-6-0 Lamia (Steam)",
        year: 1862,
        maxSpeed: Speed.MilesPerHour(35),
        power: Power.Hp(350),
        mass: Mass.Tonne(35),
        te: TractiveEffort.Kn(128),
        length: 0.25,
        gauge: TrackGauge.standard,
        role: Role.Joker,
        expireYear: 1951,
    },
    {
        name: "Chuggypig (Diesel)",
        year: 1960,
        maxSpeed: Speed.MilesPerHour(35),
        power: Power.Hp(400),
        mass: Mass.Tonne(48),
        te: TractiveEffort.Kn(176),
        length: 0.25,
        gauge: TrackGauge.standard,
        role: Role.Joker,
        expireYear: 2014,
    },
    {
        name: "Magnum 70 (Diesel)",
        year: 2014,
        maxSpeed: Speed.MilesPerHour(35),
        power: Power.Hp(500),
        mass: Mass.Tonne(70),
        te: TractiveEffort.Kn(257),
        length: 0.25,
        gauge: TrackGauge.standard,
        role: Role.Joker,
        expireYear: 3000,
    },
    {
        name: "Snowplough",
        year: 1900,
        maxSpeed: Speed.MilesPerHour(75),
        power: Power.Hp(100),
        mass: Mass.Tonne(50),
        te: TractiveEffort.Kn(49),
        length: 0.25,
        gauge: TrackGauge.standard,
        role: Role.Joker,
        expireYear: 3000,
    },

    {
        name: "Serpentine (Metro)",
        year: 1900,
        maxSpeed: Speed.MilesPerHour(45),
        power: Power.Hp(600),
        mass: Mass.Tonne(72),
        te: TractiveEffort.Kn(212),
        length: 1,
        gauge: TrackGauge.metro,
        role: Role.PassengerRailcarHighCapacitySuburban,
        expireYear: 3000,
    },
    {
        name: "Longwater (Metro)",
        year: 1900,
        maxSpeed: Speed.MilesPerHour(45),
        power: Power.Hp(600),
        mass: Mass.Tonne(64),
        te: TractiveEffort.Kn(188),
        length: 1,
        gauge: TrackGauge.metro,
        role: Role.PassengerRailcarHighCapacitySuburban,
        expireYear: 3000,
    },

    {
        name: "Autocoach Set",
        year: 1915,
        maxSpeed: Speed.MilesPerHour(75),
        power: Power.Hp(10),
        mass: Mass.Tonne(32),
        te: TractiveEffort.Kn(0),
        length: 0.625,
        gauge: TrackGauge.metro,
        role: Role.DrivingCab,
        expireYear: 3000,
    },

    {
        name: "Deasil (Diesel)",
        year: 1925,
        maxSpeed: Speed.MilesPerHour(60),
        power: Power.Hp(200),
        mass: Mass.Tonne(30),
        te: TractiveEffort.Kn(88),
        length: 0.5,
        gauge: TrackGauge.standard,
        role: Role.PassengerRailcarHighCapacitySuburban,
        expireYear: 3000,
    },
   
    {
        name: "Athena (Electric)",
        year: 1927,
        maxSpeed: Speed.MilesPerHour(60),
        power: Power.Hp(320),
        mass: Mass.Tonne(28),
        te: TractiveEffort.Kn(82),
        length: 0.5,
        gauge: TrackGauge.electric,
        role: Role.PassengerRailcarHighCapacitySuburban,
        expireYear: 3000,
    },

    {
        name: "Geronimo (Electric)",
        year: 1957,
        maxSpeed: Speed.MilesPerHour(75),
        power: Power.Hp(420),
        mass: Mass.Tonne(35),
        te: TractiveEffort.Kn(103),
        length: 0.5,
        gauge: TrackGauge.electric,
        role: Role.PassengerRailcarHighCapacitySuburban,
        expireYear: 3000,
    },
    {
        name: "Blaze HST (Diesel)",
        year: 1980,
        maxSpeed: Speed.MilesPerHour(125),
        power: Power.Hp(5000),
        mass: Mass.Tonne(140),
        te: TractiveEffort.Kn(412),
        length: 1,
        gauge: TrackGauge.standard,
        role: Role.HighSpeed,
        expireYear: 3000,
    },

    {
        name: "Quietus (Diesel)",
        year: 2028,
        maxSpeed: Speed.MilesPerHour(87),
        power: Power.Hp(3250),
        mass: Mass.Tonne(136),
        te: TractiveEffort.Kn(499),
        length: 0.5,
        gauge: TrackGauge.standard,
        role: Role.HeavyFreightJoker,
        expireYear: 3000,
    },
    {
        name: "Quietus (Electric)",
        year: 2028,
        maxSpeed: Speed.MilesPerHour(87),
        power: Power.Hp(6700),
        mass: Mass.Tonne(136),
        te: TractiveEffort.Kn(499),
        length: 0.5,
        gauge: TrackGauge.electric,
        role: Role.HeavyFreightJoker,
        expireYear: 3000,
    },
];
