

export const method = [
    "GET",
    "POST",
    "PUT",
    "DELETE",
]

export const ucwords = (str) => str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();
});