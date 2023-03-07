// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ReactNode } from 'react'
import './Button.css'

interface ButtonProps {
  variant?: 'text' | 'contained' | 'outlined'
  size?: 'lg'
  color?: boolean
  label?:
    | 'GET A QUOTE'
    | 'OUR SERVICES'
    | 'VIEW ALL SERVICES'
    | 'GET IN TOUCH'
    | 'VIEW ALL POST'
    | 'CHOOSE PLAN'
    | 'SUBCRIBE'
  style?: string
  className?: string
  icon?: boolean
  children?: ReactNode
  onClick?: () => void
}

export const Button = ({ size = 'lg', color, label, ...props }: ButtonProps) => {
  const chooseBackground = color ? 'storybook-button-bgwhite' : 'storybook-button-bgorange'
  return (
    <Button className={[`storybook-button--${size}`, chooseBackground].join(' ')} {...props}>
      {label}
      {/* {icon && <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: 4 }} />} */}
    </Button>
  )
}

// https://github.com/Future1222/naf-next-react
// https://preview.themeforest.net/item/driller-construction-real-estate-company-wordpress-theme/full_screen_preview/43058376?_ga=2.163776569.702562935.1675347803-2047627071.1675347803
// https://bonnv79.github.io/react-bootstrap-storybook/?path=/story/components-form-form--form
