export default class Suite {
    public static instance: Suite = null;

    public static getInstance(): Suite {
        if (Suite.instance === null) {
            Suite.instance = new Suite();
        }

        return Suite.instance;
    }

    public fail: number = 0;
    public success: number = 0;

    private constructor() {}

    /**
     * Resets the test counters to default values.
     */
    public reset(): void {
        this.fail = 0;
        this.success = 0;
    }
}
