export const checkFormValidation = (formData: any, schema: any) => {
  schema
    .validate(formData, { abortEarly: false })
    .then(() => {
      return {
        isError: false,
      }
    })
    .catch((validationErrors: any) => {
      const errors: any[] = []
      validationErrors.inner.forEach((error: any) => {
        errors.push(error)
      })
      return { isError: true, errors }
    })
}
