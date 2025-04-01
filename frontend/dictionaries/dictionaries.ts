const dictionaries: Record<
  string,
  () => Promise<{
    blog: {
      before: string;
      after: string;
      navName: string;
    };
    contacts: {
      navName: string;
    };
    home: {
      navName: string;
    };
    rules: {
      navName: string;
    };
  }>
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
