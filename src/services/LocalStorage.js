export function removeItem(itemToRemove) {
    return window.localStorage.removeItem(itemToRemove);
}

export function getItem(item) {
    return window.localStorage.getItem(item);
}

export function addItem(localeStorageName, newItem) {
    return window.localStorage.setItem(localeStorageName, newItem);
}
