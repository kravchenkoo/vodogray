const dictionaries: Record<
  string,
  () => Promise<{ blog: { before: string; after: string } }>
> = {
  en: () => import('./en.json').then((module) => module.default),
  ua: () => import('./ua.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  if (!(locale in dictionaries)) {
    throw new Error(`Locale '${locale}' is not supported.`);
  }
  return dictionaries[locale]();
};
