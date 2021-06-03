export class Mass {
    // short ton
    private constructor(private _tons: number) {
    }

    public static Ton(ton: number) {
        return new Mass(ton);
    }

    public static Tonne(tonne: number) {
        return new Mass(tonne * 1.10231131);
    }

    public static Kg(kg: number) {
        return new Mass(kg / 907.18474);
    }

    public toTon() {
        return this._tons;
    }

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
