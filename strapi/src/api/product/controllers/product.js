'use strict'

/**
 *  product controller
 */

const collectionType = 'product'

const schema = require(`../content-types/${collectionType}/schema.json`)
const createPopulatedController = require('../../../helpers/populate')

module.exports = createPopulatedController(`api::${collectionType}.${collectionType}`, schema)
