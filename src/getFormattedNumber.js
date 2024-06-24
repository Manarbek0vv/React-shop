export function getFormattedNumber(number) {
    let result = []
    const newNumber = [...String(number)]
    newNumber.reverse()

    let counter = 0

    for (let i = 0; i < newNumber.length; i++) {
        counter += 1
        result.push(newNumber[i])
        if (counter === 3) {
            result.push([' '])
            counter = 0
        }
    }

    result.reverse()

    return result.join('')
}