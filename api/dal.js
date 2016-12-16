const path = require('path')
const PouchDB = require('pouchdb-http')
PouchDB.plugin(require('pouchdb-mapreduce'))
PouchDB.plugin(require('pouchdb-find'))
PouchDB.debug.enable('pouchdb:find')

const {pluck} = require('ramda')
// const fetchConfig = require('zero-config')
//
// var config = fetchConfig(path.join(__dirname, '..'), {dcValue: 'test'})
// const urlFormat = require('url').format

const db =new PouchDB('https://lytorcherestiounderstres:758abd2e31c53501231f4f5900996632a6b4442b@alingenfelter.cloudant.com/vehiclerepairrecord');

const dal = {
  createVehicle: createVehicle,
  getVehicles: getVehicles,
  getVehicle: getVehicle,
  deleteVehicle: deleteVehicle,
  updateVehicle: updateVehicle,
  //
  createService: createService,
  getServices: getServices,
  getService: getService,
  deleteService: deleteService,
  updateService: updateService,
  //
  createCategory: createCategory,
  getCategories: getCategories,
  getCategory: getCategory,
  deleteCategory: deleteCategory,
  updateCategory: updateCategory,
  //
  createView: createView
}

function createVehicle(data, cb) {
    data._id = "vehicle_" + data.vin
    data.id = "vehicle_" + data.vin
    data.type = "vehicle"
    db.put(data, function(err, response) {
        if (err) {
            console.log(err)
            return cb(err)
        }
        console.log("Vehicle added ", response)
        return cb(null, response)
    })
}

function getVehicle(data, cb) {
    getDocByID(data, cb)
}

function updateVehicle(data, cb) {
    updateDoc(data, cb)
}

function deleteVehicle(data, cb) {
    deleteDoc(data, cb)
}
function getVehicles(data, cb) {
    listDocsByType(data, cb)
}

function createService(data, cb) {
    data._id = data.vehicle_id + "_service_" + data.category_id + '_' + data.date
    data.id = data.vehicle_id + "_service_" + data.category_id + '_' + data.date
    data.type = "service"
    db.put(data, function(err, response) {
        if (err) {
            console.log(err)
            return cb(err)
        }
        console.log("Service Record Added ", response)
        return cb(null, response)
    })
}

function getService(data, cb) {
    getDocByID(data, cb)
}

function updateService(data, cb) {
    updateDoc(data, cb)
}

function deleteService(data, cb) {
    deleteDoc(data, cb)
}
function getServices(data, cb) {
    listDocsByType(data, cb)
}


function createCategory(data, cb) {
    data._id = data.name
    data.id = data.name
    data.type = "category"

    db.put(data, function(err, response) {
        if (err) {
            console.log(err)
            return cb(err)
        }
        console.log("New Service Category added ", response)
        return cb(null, response)
    })
}

function getCategory(data, cb) {
    getDocByID(data, cb)
}

function updateCategory(data, cb) {
    updateDoc(data, cb)
}

function deleteCategory(data, cb) {
    deleteDoc(data, cb)
}
function getCategories(data, cb) {
    listDocsByType(data, cb)
}


function createView(designDoc, callback) {
    if (typeof designDoc == "undefined" || designDoc === null) {
        return callback(new Error('400Missing design document.'));
    } else {
        db.put(designDoc).then(function(response) {
          console.log('Design doc has been created.')
            return callback(null, response);
        }).catch(function(err) {
            return callback(err);
        });
    }
}

function listDocs(sortBy, startKey, limit, callback) {
  db.query(sortBy, {
    include_docs: true,
    startkey: startKey,
    limit: limit
  }, function(err, data) {
    if (err) return callback(err)
    if (startKey !== '') data.rows.shift()
    callback(null, data)
  })
}



function getDocByID(id, callback) {
    if (typeof id == "undefined" || id === null) {
        return callback(new Error('400Missing ID parameter'));
    } else {
        db.get(id, function(err, data) {
            if (err)
                return callback(err);
            if (data)
                return callback(null, data);
            }
        );
    }
}

function updateDoc(data, callback) {
    // Call to couch retrieving a document with the given _id value.
    if (typeof data == "undefined" || data === null) {
        return callback(new Error('400Missing data for update'));
    } else if (data.hasOwnProperty('_id') !== true) {
        return callback(new Error('400Missing id property from data'));
    } else if (data.hasOwnProperty('_rev') !== true) {
        return callback(new Error('400Missing rev property from data'));
    } else {
        db.put(data, function(err, response) {
            if (err)
                return callback(err);
            if (response)
                return callback(null, response);
            }
        );
    }
}

function deleteDoc(data, callback) {
    if (typeof data == "undefined" || data === null) {
        return callback(new Error('400Missing data for delete'));
    } else if (data.hasOwnProperty('_id') !== true) {
        return callback(new Error('400Missing _id property from data'));
    } else if (data.hasOwnProperty('_rev') !== true) {
        return callback(new Error('400Missing _rev property from data'));
    } else {
        db.remove(data, function(err, response) {
            if (err)
                return callback(err);
            if (response)
                return callback(null, response);
            }
        );
    }
}

function listDocsByType(data, cb) {
    db.query(data, {include_docs: true})
    .then(function(result) {
        console.log("results: ", result)
        const docs = pluck('doc',result.rows)
        console.log("plucked!: ", docs)
        return cb(null, docs)
    }).catch(function(err) {
        console.log("err: ", err)
        return cb(err)
    })
}

module.exports = dal
