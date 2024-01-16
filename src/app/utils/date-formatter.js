export const toLocalDate = date => {
    let result = ''

    if (date) {

        result = date.split('T', 1).toString()

        return result
    }
}

export const toRuDate = date => {

    let result = ''

    if (date) {

        result = date.split('T', 1).toString().split('-')

        return `${result[2]}.${result[1]}.${result[0]}`
    }

}



