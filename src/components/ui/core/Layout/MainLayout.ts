import React, { forwardRef } from 'react'
import { getComputedClassNames } from '@/utility/tailwind/tailwind-utility'
import {  BoxProps } from '@/components/ui/core/Box'


const MainLayout = forwardRef<HTMLElement, BoxProps>((props, ref) => {
  const { className, children,  ...restProps } = props
  const computedClassNames = getComputedClassNames(className, `h-full w-full relative grow flex flex-col`)

  return React.createElement(
    'main',
    Object.assign(restProps, {
      ref,
      className: computedClassNames,
    }),
    children,
  )
})

MainLayout.displayName = 'MainLayout'

export default MainLayout
