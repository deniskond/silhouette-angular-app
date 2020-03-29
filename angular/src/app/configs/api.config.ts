export class API {
    private static readonly BASE_URL = '';

    public static get USER_ACTIONS(): { SIGNUP: string; SIGNIN: string } {
        return {
            SIGNUP: `${this.BASE_URL}/signUp`,
            SIGNIN: `${this.BASE_URL}/signIn`,
        };
    }
}
