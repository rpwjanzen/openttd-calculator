export class Mass {
    // short (imperial) ton
    private constructor(private _tons: number) {
    }

    /**
     * @param ton Imperial ton
     * @returns 
     */
    public static Ton(ton: number) {
        return new Mass(ton);
    }

    /**
     * @param tonne Metric tonne
     * @returns 
     */
    public static Tonne(tonne: number) {
        return new Mass(tonne * 1.10231131);
    }

    public static Kg(kg: number) {
        return new Mass(kg / 907.18474);
    }

    /**
     * 
     * @returns Imperial ton
     */
    public toTon() {
        return this._tons;
    }

    /**
     * @returns Metric tonne
     */
    public toTonne() {
        return this._tons / 1.10231131;
    }

    public toKg() {
        return this._tons * 907.18474;
    }

    public mul(n: number) {
        return new Mass(this._tons * n);
    }

    public add(o: Mass) {
        return new Mass(this._tons + o._tons);
    }
}
