const { get } = require('axios')

const validate = (link) => {
    let href = link.href
    return get(href)
        .then((response) => {
            link.response = response.status
            link.ok = response.statusText
            return link
        }).catch((err) => {
            link.response = err.response.status
            link.ok = "fail"
            return link
        })
  }

module.exports = validate