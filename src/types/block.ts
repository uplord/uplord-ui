import { VariantType } from '@/components/Button/Button'

export type ButtonContent = {
  linkType: 'page' | 'external' | 'email' | 'phone' | 'section'
  label?: string
  link?: string
  newTab?: boolean
  variant?: VariantType
  color?: string
  outline?: boolean
}

export type ColorsStyle = {
  backgroundColor?: string
  color?: string
}

export type ButtonStyle = {
  style?: string
  custom?: {
    type?: 'solid' | 'outline'
    size?: 'sm' | 'md' | 'lg' | 'xl'
    shape?: 'pill' | 'round' | 'square'
  }
}

export type BackgroundImageVideoStyle = {
  src?: string
  overlay?: 'none' | 'light' | 'moderate' | 'strong' | 'very-strong'
  blur?: 'none' | 'light' | 'moderate' | 'strong' | 'very-strong'
}

export type TextSizeStyle = {
  heading?: 'xl' | 'lg' | 'md' | 'sm'
  subtext?: 'lg' | 'md' | 'sm'
}

export type TaglineStyle = 'text' | 'badge'

export type TextAlignStyle = 'default' | 'left' | 'middle' | 'right'

export type ListStyle = 'default' | 'style-1' | 'style-2'

export type ImageStyle = {
  imageFit?: 'cover' | 'contain'
  aspectRagtio?: 'square' | 'portrait' | 'landscape' | 'widescreen'
}

export type RoundedCornersStyle = 'sm' | 'md' | 'lg' | 'none'

export type IconSizeStyle = 'sm' | 'md' | 'lg' | 'xl'

export type ItemSizeStyle = 'sm' | 'md' | 'lg'

export type TextPositionStyle = 'below' | 'above' | 'cover'

export type AnimationsStyle = {
  type?: 'none'
  speed?: 'slow' | 'medium' | 'fast'
}

export type SpacingStyle = {
  top?: 'none' | 'sm' | 'md' | 'lg'
  bottom?: 'none' | 'sm' | 'md' | 'lg'
  minHeight?: 'content' | 'screen'
  horizontalAlignment?: 'left' | 'middle' | 'right'
  verticalAlignment?: 'top' | 'middle' | 'bottom'
}

export type DividerStyle = {
  active?: boolean
}

export type BorderStyle = {
  active?: boolean
  color?: string
  thickness?: number
  type?: 'solid' | 'dashed'
}
