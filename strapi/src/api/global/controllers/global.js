'use strict'

/**
 *  global controller
 */

const collectionType = 'global'

const schema = require(`../content-types/${collectionType}/schema.json`)
const createPopulatedController = require('../../../helpers/populate')

module.exports = createPopulatedController(`api::${collectionType}.${collectionType}`, schema)
