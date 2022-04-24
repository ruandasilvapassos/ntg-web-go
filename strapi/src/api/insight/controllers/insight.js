'use strict'

/**
 *  insight controller
 */

const collectionType = 'insight'

const schema = require(`../content-types/${collectionType}/schema.json`)
const createPopulatedController = require('../../../helpers/populate')

module.exports = createPopulatedController(`api::${collectionType}.${collectionType}`, schema)
