export function isValidHttpUrl(string) {
    let url;

    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}

export function isValidImgUrl(string) {
    return isValidHttpUrl(string) && string.match(/\.(png|svg|jpg)$/);
}