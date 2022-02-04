// Save state values to local storage
export const saveLS = (val, name) => {
    localStorage.setItem(name, JSON.stringify(val));
}
// Get state values from local storage
export const getLS = (name) => {
    return JSON.parse(localStorage.getItem(name));
}
// Save as browser session
export const saveSession = (val, name) => {
    sessionStorage.setItem(name, JSON.stringify(val));
}
// Get as browser session
export const getSession = (name) => {
    return JSON.parse(sessionStorage.getItem(name));
}