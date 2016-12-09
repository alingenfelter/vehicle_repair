const fetch = require('isomorphic-fetch')
const url = process.env.REACT_APP_API

const toJSON = res => res.json()

const data = function () {
  const list = (model) => {
    return fetch (`${url}/${model}`)
      .then(toJSON)
  }
  const get = (model, id) => {
    return fetch (`${url}/${model}/${id}`)
      .then(toJSON)
  }
  const post = (model, doc) => {
    return fetch (`${url}/${model}`, {
      method: 'post',
      body: JSON.stringify(doc),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(toJSON)
  }
  const put = function(model, id, doc) {
    return fetch(`${url}/${model}/${id}`, {
      method: 'put',
      body: JSON.stringify(doc),
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => res.json())
  }

  const remove = (model, id, doc) => {
    return fetch (`${url}/${model}/${id}`, {
      method: 'delete',
      body: JSON.stringify(doc),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(toJSON)
  }



  return {
    list,
    get,
    post,
    put,
    remove
  }
}

module.exports = data
