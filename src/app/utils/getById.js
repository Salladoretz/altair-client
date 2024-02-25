export const getById = (id, arr) => {
    return arr.find(el => el.id === id)
}

export const getNameById = (id, arr) => {
    if (id === undefined) {
        return
    }
    return arr.find(el => el.id === id).name
}

export const getTitleById = (id, arr) => {
    return arr.find(el => el.id === id).title
}