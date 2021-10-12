//total de links
//iterar los links para ver cuales son únicos y cuales se repiten
//cuantos son únicos
//cuántos se repiten

const stats = (links) => {
    let href = links.map(link => {
        return link.href
    })

    const uniqueFilter = new Set(href)
    let unique = [...uniqueFilter]

    let response = {
        Total: href.length, 
        Unique: unique.length
    }


    //total
    //unique
    return response
}

module.exports = stats