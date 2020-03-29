export class API {
    private static readonly BASE_URL = '';

    public static get USER_ACTIONS(): { SIGNUP: string } {
        return { SIGNUP: `${this.BASE_URL}/signUp` };
    }
}
