
class Utils {

    static encodeSha256 = async (message) => {
        const msgBuffer = new TextEncoder('utf-8').encode(message);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
        return hashHex;
    }

    static setSessionInfo = (value = null, key = '', clear = false) => {
        if (clear) {
            sessionStorage.clear();
            return;
        }
        sessionStorage.setItem(key, JSON.stringify(value));
    };

}

export default Utils;