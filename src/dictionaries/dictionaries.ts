import { DictionariesType } from '@/dictionaries/dictionariesType'

const dictionaries: Record<string, () => Promise<DictionariesType>> = {
  en: () => import('./en.json').then((module) => module.default as DictionariesType),
  uk: () => import('./uk.json').then((module) => module.default as DictionariesType),
}

export const getDictionary = async (locale: string): Promise<DictionariesType> => {
  if (!(locale in dictionaries)) {
    throw new Error(`Locale '${locale}' is not supported.`)
  }
  return dictionaries[locale]()
}
