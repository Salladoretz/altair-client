export const toLocalDate = date => {
    return date?.split('T', 1).toString()
}

export const toRuDate = date => {

    let result = ''

    if (date) {

        result = date.split('T', 1).toString().split('-')

        return `${result[2]}.${result[1]}.${result[0]}`
    }

}



