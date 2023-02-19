import * as yup from 'yup'

interface CreateForm {
  email: string
  name: string
  enquiry: string
  phone: string
}

export const createForm = ({ email, name, enquiry, phone }: CreateForm) =>
  yup.object().shape({
    email: yup.string().trim().email().required(email),
    name: yup.string().trim().required(name),
    enquiry: yup.string().trim().required(enquiry),
    phone: yup
      .string()
      .trim()
      .required(phone)
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(5, 'Enter the correct numbers')
      .max(15, 'Must be exactly 15 digits'),
  })

/**
 *
 * @param id
 * @param TypeRoutes
 * @param articlesRoutes
 * @returns
 */
export const validationRoutes = (
  id: string,
  typeRoutes: Array<string>,
  articlesRoutes: Array<string>
) => {
  let isType = false
  let isArticle = false
  if (typeRoutes && typeRoutes.indexOf(id) > -1) isType = true
  if (articlesRoutes && articlesRoutes.indexOf(id) > -1) isArticle = true

  return [isType, isArticle]
}
