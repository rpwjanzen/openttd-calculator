import { SpeedUnits } from './SpeedUnits.js';

export class Speed {
    static Zero = new Speed(0);

    private constructor(private _kmPerHour: number) {
    }

    public static KmPerHour(kmPerHour: number) {
        return new Speed(kmPerHour);
    }

    public static Value(value: number) {
        return new Speed(value);
    }

    public static MilesPerHour(milesPerHour: number) {
        return new Speed(milesPerHour * 1.6);
    }

    public toKmPerHour() { return this._kmPerHour; }
    public toMilesPerHour() { return this._kmPerHour / 1.6; }
    public toTilesPerDay() { return this._kmPerHour / 28; }
    public toMetersPerSecond() { return this._kmPerHour / 3.6; }

    public toSpeedUnit(speedUnits: SpeedUnits): number {
        switch (speedUnits) {
            case SpeedUnits.kmPerHour:
                return this.toKmPerHour();
            case SpeedUnits.milesPerHour:
                return this.toMilesPerHour();
            case SpeedUnits.metersPerSecond:
                return this.toMetersPerSecond();
            case SpeedUnits.tilesPerDay:
                return this.toTilesPerDay();
            default:
                throw new Error();
        }
    }

    public toText(speedUnits: SpeedUnits): string {
        switch (speedUnits) {
            case SpeedUnits.kmPerHour:
                return this.toKmPerHour().toFixed(0) + ' km/h';
            case SpeedUnits.milesPerHour:
                return this.toMilesPerHour().toFixed(0) + 'mph';
            case SpeedUnits.metersPerSecond:
                return this.toMetersPerSecond().toFixed(1) + ' m/s';
            case SpeedUnits.tilesPerDay:
                return this.toTilesPerDay().toFixed(1) + ' tiles/day';
            default:
                throw new Error();
        }
    }

    public valueOf() { return this._kmPerHour; }
    public greaterThan(a: Speed) {
        return this._kmPerHour > a._kmPerHour;
    }
    public lessThanOrEqualTo(o: Speed) {
        return this._kmPerHour <= o._kmPerHour;
    }
    public mul(n: number) {
        return new Speed(this._kmPerHour * n);
    }
    public div(n: number) {
        return new Speed(this._kmPerHour / n);
    }
    public divSpeed(s: Speed) {
        return this._kmPerHour / s._kmPerHour;
    }

    public sub(s: Speed) {
        return new Speed(this._kmPerHour - s._kmPerHour);
    }
    public add(s: Speed) {
        return new Speed(this._kmPerHour + s._kmPerHour);
    }

    public static max(a: Speed, b: Speed) {
        return b._kmPerHour > a._kmPerHour ? b : a;
    }

    public static min(a: Speed, b: Speed) {
        return b._kmPerHour < a._kmPerHour ? b : a;
    }
}
