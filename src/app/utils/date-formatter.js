export const dateFormatter = dateString => {

    if (dateString != null) {
        let result = dateString?.split('T', 1).toString().split('-')

        return `${result[2]}.${result[1]}.${result[0]}`
    }
}