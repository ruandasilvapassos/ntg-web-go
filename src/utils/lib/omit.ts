/**
 * Omit object
 * @param obj Record<string, string>
 * @param omitKey string
 * @returns Record<string, string>
 */

type OmitType = (obj: Record<string, any>, key: string) => Record<string, string>

export const omit: OmitType = (obj, omitKey) => {
  return Object.keys(obj)
    .filter((key) => key != omitKey)
    .reduce((result, key) => ({ ...result, [key]: obj[key] }), {})
}
