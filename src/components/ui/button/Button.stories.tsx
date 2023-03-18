import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Button } from '../button/Button'

export default {
  title: 'DESIGN SYSTEM/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const GAQ = Template.bind({})
GAQ.args = {
  label: 'GET A QUOTE',
  color: true,
  icon: true,
}

export const OSV = Template.bind({})
OSV.args = {
  label: 'OUR SERVICES',
  color: false,
  icon: true,
}

export const VAS = Template.bind({})
VAS.args = {
  label: 'VIEW ALL SERVICES',
  color: false,
}

export const GIT = Template.bind({})
GIT.args = {
  label: 'GET IN TOUCH',
  color: true,
}

export const VAP = Template.bind({})
VAP.args = {
  label: 'VIEW ALL POST',
  color: false,
  icon: true,
}

export const CHOOSE = Template.bind({})
CHOOSE.args = {
  label: 'CHOOSE PLAN',
  color: true,
  icon: true,
}

export const SUBCRIBE = Template.bind({})
SUBCRIBE.args = {
  label: 'SUBCRIBE',
  color: false,
  icon: true,
}
