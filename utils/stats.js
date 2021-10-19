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

    return response
}

module.exports = stats