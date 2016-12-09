const http = require('http')
const app = require('express')()
const cors = require('cors')
app.use(cors({origin: true, credentials: true}))
const bodyParser = require('body-parser')
const HTTPError = require('node-http-error')
const port = process.env.PORT || 4000
const dal = require('./dal.js')

app.use(bodyParser.json())


app.use(function(req, res, next) {
  console.log(`${req.url}: ${req.method}`)
  next()
})

app.post('/vehicles', function(req, res, next) {
    dal.createVehicle(req.body, function(err, result) {
        if (err) {
            var responseError = BuildResponseError(err)
            return next(new HTTPError(responseError.status, responseError.message))
        }
        res.status(201).send(result)
    })
})

app.get('/vehicles/:id', function(req, res, next) {
    const vehicleID = req.params.id
    dal.getVehicle(vehicleID, function(err, result) {
        if (err) {
            var responseError = BuildResponseError(err)
            return next(new HTTPError(responseError.status, responseError.message))
        }
        if (result) {
            res.status(200).send(result)
        }
    })
})

app.get('/vehicles', function(req, res, next) {
    dal.getVehicles("vehicles", function(err, result) {
        if (err) {
            var responseError = BuildResponseError(err)
            return next(new HTTPError(responseError.status, responseError.message))
        }
        if (result) {
            res.status(200).send(result)
        }
    })
})

app.put('/vehicles/:id', function(req, res, next) {
    dal.getVehicle(req.params.id, function callback(err, data) {
        if (err) {
            var responseError = BuildResponseError(err)
            return next(new HTTPError(responseError.status, responseError.message))
        }
        if (data) {
            dal.updateCategory(req.body, function callback(updattederr, updatteddoc) {
                if (updattederr) {
                    var responseError = BuildResponseError(updattederr)
                    return next(new HTTPError(responseError.status, responseError.message))
                }
                if (updatteddoc)
                    res.append('Content-type', 'application/json')
                res.status(200).send(updatteddoc)
            })
        }
    })

})

app.delete('/vehicles/:id', function(req, res, next) {
    dal.getVehicle(req.params.id, function callback(err, data) {
        if (err) {
            var responseError = BuildResponseError(err)
            return next(new HTTPError(responseError.status, responseError.message))
        }
        if (data) {
            dal.deleteVehicle(req.body, function callback(updattederr, updatteddoc) {
                if (updattederr) {
                    var responseError = BuildResponseError(updattederr)
                    return next(new HTTPError(responseError.status, responseError.message))
                }
                if (updatteddoc)
                    res.append('Content-type', 'application/json')
                res.status(200).send(updatteddoc)
            })
        }
    })

})

    app.post('/services', function(req, res, next) {
        dal.createService(req.body, function(err, result) {
            if (err) {
                var responseError = BuildResponseError(err)
                return next(new HTTPError(responseError.status, responseError.message))
            }
            res.status(201).send(result)
        })
    })

    app.get('/services/:id', function(req, res, next) {
        const serviceID = req.params.id
        dal.getService(serviceID, function(err, result) {
            if (err) {
                var responseError = BuildResponseError(err)
                return next(new HTTPError(responseError.status, responseError.message))
            }
            if (result) {
                res.status(200).send(result)
            }
        })
    })

    app.get('/services', function(req, res, next) {
        dal.getServices("services", function(err, result) {
            if (err) {
                var responseError = BuildResponseError(err)
                return next(new HTTPError(responseError.status, responseError.message))
            }
            if (result) {
                res.status(200).send(result)
            }
        })
    })

    app.put('/services/:id', function(req, res, next) {
        dal.getService(req.params.id, function callback(err, data) {
            if (err) {
                var responseError = BuildResponseError(err)
                return next(new HTTPError(responseError.status, responseError.message))
            }
            if (data) {
                dal.updateService(req.body, function callback(updattederr, updatteddoc) {
                    if (updattederr) {
                        var responseError = BuildResponseError(updattederr)
                        return next(new HTTPError(responseError.status, responseError.message))
                    }
                    if (updatteddoc)
                        res.append('Content-type', 'application/json')
                    res.status(200).send(updatteddoc)
                })
            }
        })

    })

    app.delete('/services/:id', function(req, res, next) {
        dal.getService(req.params.id, function callback(err, data) {
            if (err) {
                var responseError = BuildResponseError(err)
                return next(new HTTPError(responseError.status, responseError.message))
            }
            if (data) {
                dal.deleteService(req.body, function callback(updattederr, updatteddoc) {
                    if (updattederr) {
                        var responseError = BuildResponseError(updattederr)
                        return next(new HTTPError(responseError.status, responseError.message))
                    }
                    if (updatteddoc)
                        res.append('Content-type', 'application/json')
                    res.status(200).send(updatteddoc)
                })
            }
        })

    })

   app.post('/categories', function(req, res, next) {
        dal.createCategories(req.body, function(err, result) {
            if (err) {
                var responseError = BuildResponseError(err)
                return next(new HTTPError(responseError.status, responseError.message))
            }
            res.status(201).send(result)
        })
    })

    app.get('/categories/:id', function(req, res, next) {
        const categoryID = req.params.id
        dal.getCategory(categoryID, function(err, result) {
            if (err) {
                var responseError = BuildResponseError(err)
                return next(new HTTPError(responseError.status, responseError.message))
            }
            if (result) {
                res.status(200).send(result)
            }
        })
    })

    app.get('/categories', function(req, res, next) {
        dal.getCategories("categories", function(err, result) {
            if (err) {
                var responseError = BuildResponseError(err)
                return next(new HTTPError(responseError.status, responseError.message))
            }
            if (result) {
                res.status(200).send(result)
            }
        })
    })

    app.put('/categories/:id', function(req, res, next) {
        dal.getCategory(req.params.id, function callback(err, data) {
            if (err) {
                var responseError = BuildResponseError(err)
                return next(new HTTPError(responseError.status, responseError.message))
            }
            if (data) {
                dal.updateCategory(req.body, function callback(updattederr, updatteddoc) {
                    if (updattederr) {
                        var responseError = BuildResponseError(updattederr)
                        return next(new HTTPError(responseError.status, responseError.message))
                    }
                    if (updatteddoc)
                        res.append('Content-type', 'application/json')
                    res.status(200).send(updatteddoc)
                })
            }
        })

    })

    app.delete('/categories/:id', function(req, res, next) {
        dal.getCategory(req.params.id, function callback(err, data) {
            if (err) {
                var responseError = BuildResponseError(err)
                return next(new HTTPError(responseError.status, responseError.message))
            }
            if (data) {
                dal.deleteCategory(req.body, function callback(updattederr, updatteddoc) {
                    if (updattederr) {
                        var responseError = BuildResponseError(updattederr)
                        return next(new HTTPError(responseError.status, responseError.message))
                    }
                    if (updatteddoc)
                        res.append('Content-type', 'application/json')
                    res.status(200).send(updatteddoc)
                })
            }
        })

    })

app.get('*', (req, res) => res.send({ok: true}))

/////Build Response Error

function BuildResponseError(err) {
const statuscheck = isNaN(err.message.substring(0, 3)) === true
    ? "400"
    : err.message.substring(0, 3)
const status = err.status
    ? Number(err.status)
    : Number(statuscheck)
const message = err.status
    ? err.message
    : err.message.substring(3)
const reason = message
const error = status === 400
    ? "Bad Request"
    : err.name
const name = error

var errormsg = {}
errormsg.error = error
errormsg.reason = reason
errormsg.name = name
errormsg.status = status
errormsg.message = message
console.log("BuildResponseError-->", errormsg)
return errormsg
}

// Server
var server = http.createServer(app)
server.listen(port, () => console.log('Server is open on ', server.address().port))
