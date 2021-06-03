export class Force {
    private constructor(private _n: number) {
    }

    public static Newtons(n: number) {
        return new Force(n);
    }
}
