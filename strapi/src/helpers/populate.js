const { createCoreController } = require('@strapi/strapi/lib/factories')

const populateAttribute = ({ components }) => {
  if (components) {
    const populate = components.reduce((currentValue, current) => {
      const [componentDir, componentName] = current.split('.')

      /* Component attributes needs to be explicitly populated */
      const componentAttributes = Object.entries(
        require(`../components/${componentDir}/${componentName}.json`).attributes
      ).filter(([, v]) => v.type === 'component' || v.type === 'media')

      const attrPopulates = componentAttributes.reduce((acc, [curr]) => ({ ...acc, [curr]: { populate: '*' } }), {})
      return {
        ...currentValue,
        [current.split('.').pop()]: { populate: '*' },
        ...attrPopulates
      }
    }, {})

    // add insight statically
    populate.insight = { populate: '*' }
    return { populate }
  }
  return { populate: '*' }
}

const getPopulateFromSchema = function (schema) {
  // console.log('schema', schema)
  const res = Object.keys(schema.attributes).reduce((currentValue, current) => {
    const attribute = schema.attributes[current]
    if (!['dynamiczone', 'component', 'media'].includes(attribute.type)) {
      return { [current]: populateAttribute(attribute) }
    }
    return {
      ...currentValue,
      [current]: populateAttribute(attribute)
    }
  }, {})
  // res[schema?.collectionName] = { populate: '*' }

  return res
}

function createPopulatedController(uid, schema) {
  return createCoreController(uid, () => {
    return {
      async find(ctx) {
        // deeply populate all attributes with ?populate=*, else retain vanilla functionality
        if (ctx.query.populate === '*') {
          const resPopulate = ctx?.query?.resPopulate?.split(',')?.map((res) => ({
            [res]: {
              populate: '*'
            }
          }))
          const populated = resPopulate?.reduce(function (result, item) {
            var key = Object.keys(item)[0]
            result[key] = item[key]
            return result
          }, {})
          let populate = getPopulateFromSchema(schema)

          if (populated) {
            populate = { ...populate, ...populated }
          }
          ctx.query = {
            ...ctx.query,
            populate
          }
        }

        return await super.find(ctx)
      },
      async findOne(ctx) {
        if (ctx.query.populate === '*') {
          // console.log(getPopulateFromSchema(schema))
          ctx.query = {
            ...ctx.query,
            populate: getPopulateFromSchema(schema)
          }
        }
        return await super.findOne(ctx)
      }
    }
  })
}

module.exports = createPopulatedController
