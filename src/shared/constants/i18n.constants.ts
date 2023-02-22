export const I18nNamespace = {
  COMMON: 'common',
  VALIDATION: 'validation',
} as const

export const I18nValidationKey = {
  REQUIRED: 'required',
  INVALID: 'invalid',
  MAX_LENGTH: 'maxLength',
  IS_NUMBER: 'isNumber',
  IS_BEFORE_DAY: 'isBeforeDay',
  ONLY_ONE: 'onlyOne',
  IS_MATCHED: 'isMatched',
  IS_FUTURE: 'isFuture',
} as const
