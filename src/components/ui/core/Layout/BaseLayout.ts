import React, { forwardRef } from 'react'
import { getComputedClassNames } from '@/utility/tailwind/tailwind-utility'
import {  BoxProps } from '@/components/ui/core/Box'

const BaseLayout = forwardRef<HTMLElement, BoxProps>((props, ref) => {
  const { className, children, ...restProps } = props
  const computedClassNames = getComputedClassNames(className, `flex h-full w-full`)

  return React.createElement(
    'div',
    Object.assign(restProps, {
      ref,
      className: computedClassNames,
    }),
    children,
  )
})

BaseLayout.displayName = 'BaseLayout'

export default BaseLayout
