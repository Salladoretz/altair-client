export const dateForInput = dateString => {
    return dateString?.split('T', 1).toString()
}

export const dateFormatter = dateString => {

    let result = dateForInput(dateString).split('-')

    return `${result[2]}.${result[1]}.${result[0]}`
}



