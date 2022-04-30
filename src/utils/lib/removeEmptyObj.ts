export const removeEmptyObj = (obj: Record<string, any>) => {
  const newObj: Record<string, any> = {}
  Object.keys(obj).forEach((key) => {
    if (obj[key] === Object(obj[key]) || obj[key] === '') newObj[key] = removeEmptyObj(obj[key])
    else if (obj[key] !== undefined) newObj[key] = obj[key]
  })
  return newObj
}
