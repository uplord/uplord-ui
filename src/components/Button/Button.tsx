'use client'

import clsx from 'clsx'
import Link from 'next/link'

import styles from './button.module.scss'
import { getContrastOklch, getHoverOklch, hexToOklch } from '@/lib/color'
import { RoundedCornersStyle } from '@/types/block'

export type VariantType = 'default' | 'primary' | 'text' | 'custom'

export enum Variant {
  Default = 'default',
  Primary = 'primary',
  Custom = 'custom',
}

export enum Theme {
  Dark = 'dark',
  Light = 'light',
}

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children?: React.ReactNode
  label?: string

  href?: string
  target?: '_self' | '_blank'

  size?: 'sm' | 'md'
  variant?: VariantType
  color?: string
  theme?: Theme

  hasIcon?: boolean
  outline?: boolean
  rounded?: RoundedCornersStyle

  hasPadding?: boolean
  hasInteration?: boolean
  hasHover?: boolean
  hasActive?: boolean

  isDisabled?: boolean
  isLoading?: boolean
  isSkeleton?: boolean

  className?: string
}

export const Button = ({
  children,
  label,
  href,
  target = '_self',
  size = 'md',
  variant = 'default',
  color,
  theme = Theme.Light,
  outline = false,
  rounded = 'sm',
  hasIcon = false,
  hasPadding = true,
  hasInteration = true,
  hasHover = true,
  hasActive = true,
  isDisabled = false,
  isLoading = false,
  isSkeleton = false,
  className = '',
  ...restProps
}: ButtonProps) => {
  const content = <>{children ? children : label}</>
  const currentVariant = variant === 'primary' ? 'custom' : variant
  const currentColor = variant === 'primary' ? '#e61919' : color

  const classes = clsx(
    styles.main,
    styles[`size-${size}`],
    styles[`variant-${currentVariant}`],
    theme && styles[`theme-${theme}`],
    outline && styles.outline,
    rounded && styles[`rounded-${rounded}`],
    hasIcon && styles.icon,
    hasPadding && styles.padding,
    hasHover && hasInteration && hasPadding && styles.hover,
    hasActive && hasInteration && hasPadding && styles.active,
    (isDisabled || isLoading || isSkeleton) && styles['is-disabled'],
    isLoading && styles['is-loading'],
    isSkeleton && styles['is-skeleton'],
    className,
  )

  const style = currentColor
    ? ({
        '--btn-color': (() => {
          const { l, c, h } = hexToOklch(currentColor)
          return `oklch(${l}% ${c} ${h})`
        })(),
        '--btn-hover-color': getHoverOklch(currentColor),
        '--btn-text': getContrastOklch(currentColor),
      } as React.CSSProperties)
    : undefined

  if ((!hasInteration && !restProps.onClick) || (href && isSkeleton)) {
    return (
      <span
        className={classes}
        style={style}
        aria-disabled="true">
        {content}
      </span>
    )
  } else if (href) {
    if (target === '_blank') {
      return (
        <a
          href={href}
          target={target}
          rel="noopener noreferrer"
          className={classes}
          style={style}>
          {content}
        </a>
      )
    } else {
      return (
        <Link
          href={href}
          className={classes}
          style={style}>
          {content}
        </Link>
      )
    }
  } else {
    return (
      <button
        className={classes}
        style={style}
        type="button"
        onClick={(e) => {
          if (isLoading) return
          if (restProps.onClick) restProps.onClick(e)
        }}>
        {content}
      </button>
    )
  }
}

export type ButtonGroupProps = {
  children: React.ReactNode
  className?: string
  justify?: 'center' | 'start' | 'end'
}

export const ButtonGroup = ({ children, className, justify }: ButtonGroupProps) => {
  return (
    <div className={clsx(styles.group, className, justify && styles[`justify-${justify}`])}>
      {children}
    </div>
  )
}
