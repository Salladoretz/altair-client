export const toLocalDate = date => {
    return date?.split('T', 1).toString()
}

export const toInputDate = date => {
    let result = toLocalDate(date).split('-')

    return `${result[2]}.${result[1]}.${result[0]}`
}



