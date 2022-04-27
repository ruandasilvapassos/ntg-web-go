import { useIntl } from 'react-intl'

import DefaultLanguage from '@shared/locales/out/es.json'

import type { PrimitiveType } from 'intl-messageformat'

export type LocaleMessages = typeof DefaultLanguage
export type LocaleKey = keyof LocaleMessages

export function useFormatMessage(): (id: LocaleKey | string, values?: Record<string, PrimitiveType>) => string {
  const intl = useIntl()
  return (id, values) => {
    const generate = {
      id,
      defaultMessage: id
    }
    return intl.formatMessage(generate, values)
  }
}
