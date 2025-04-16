export type DictionariesType = {
  blog: {
    before: string
    after: string
    navName: string
  }
  contacts: {
    navName: string
    schedule: Record<string, string> // Ensure this matches the keys in workTime
  }
  home: {
    navName: string
  }
  rules: {
    navName: string
  }
}
