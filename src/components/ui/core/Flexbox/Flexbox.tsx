import React from 'react'
import { getComputedClassNames } from '@/utility/tailwind/tailwind-utility'
import { FlexboxProps } from '@/components/ui/core/Flexbox/Flexbox.types'
import {
  AlignClassMapping,
  DirectionClassMapping,
  FlexClassMapping,
  JustifyClassMapping,
  WrapClassMapping,
} from './Flexbox.schema'


const Flexbox = React.forwardRef<HTMLElement, FlexboxProps>((props, ref) => {
  const {
    as,
    display = 'flex',
    children,
    className,
    align = 'flex-start',
    justify = 'flex-start',
    direction = 'row',
    wrap = 'nowrap',
    ...restProps
  } = props
  const computedClasses = getComputedClassNames(
    FlexClassMapping[display],
    AlignClassMapping[align],
    DirectionClassMapping[direction],
    JustifyClassMapping[justify],
    WrapClassMapping[wrap],
    className,
  )
  return React.createElement('div', { ...restProps, as, className: computedClasses, ref }, children)
})

Flexbox.displayName = 'Flexbox'

export { Flexbox }
