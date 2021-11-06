import { SERVER_URL } from "./constants";

class Auth {
    static isAuthenticated = sessionStorage.getItem("jwt") !== null;
    
    static login(user, cbOk, cbError) {
        fetch(SERVER_URL + "api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        }).then((res) => {
            const jwtToken = res.headers.get('Authorization');
            if (jwtToken !== null) {
                sessionStorage.setItem("jwt", jwtToken);
                cbOk();
            } else {
                cbError();
            }
        }).catch(err => console.error(err));
    }
    static logout() {
        sessionStorage.removeItem("jwt");
    }
}
export default Auth;