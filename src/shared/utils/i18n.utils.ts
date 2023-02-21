import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { I18nNamespace } from '../constants/i18n.constants'

// If create new namespace, should define that namspace's name at there
export type TranslationNamespaces = ObjectValue<typeof I18nNamespace>

export const loadTranslationResources = async (
  locale: string,
  extraNs: Exclude<TranslationNamespaces, 'common'>[] = []
) => {
  const ns = Array.from(new Set([I18nNamespace.COMMON, ...extraNs]))
  return serverSideTranslations(locale, ns)
}
