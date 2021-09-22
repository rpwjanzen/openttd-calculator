export class Power {
    private constructor(private _kWh: number) {
    }

    public static KilowattHour(kWh: number) {
        return new Power(kWh);
    }

    /**
     * 
     * @param hp Imperial HP
     * @returns 
     */
    public static Hp(hp: number) {
        return new Power(hp / 1.34102209);
    }

    public tokWh() { return this._kWh; }
    /**
     * @returns Power in Imperial HP
     */
    public toHp() { return this._kWh * 1.34102209; }

    public valueOf() { return this._kWh; }

    public mul(n: number) {
        return new Power(this._kWh * n);
    }
}
