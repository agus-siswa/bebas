

export const method = [
    "GET",
    "POST",
    "PUT",
    "DELETE",
]

export const ucwords = (str) => str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();
});

export const path = () => {
    const { pathname } = new URL(window.location.href)
    const url = pathname.split("/")
    
    return url[1] === "" ? ""  : `/${url[1]}`
}