export class TractiveEffort {
    private constructor(private _kN: number) {
    }

    public static LbF(lbf: number) {
        return new TractiveEffort(lbf / 224.808943);
    }

    public static KgF(kgF: number) {
        return new TractiveEffort(kgF / 101.971621);
    }

    public static Kn(kN: number) {
        return new TractiveEffort(kN);
    }

    public toKn() {
        return this._kN;
    }

    public toLbF() {
        return this._kN * 224.808943;
    }

    public toKgF() {
        return this._kN * 101.971621;
    }

    public mul(n: number) {
        return new TractiveEffort(this._kN * n);
    }
}
