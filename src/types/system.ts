export type SizeType = 'sm' | 'md' | 'lg' | 'xl'

export enum Size {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
  ExtraLarge = 'xl',
}

export type ImageProps = {
  src: string
  alt: string
  sizes: string
  width: number
  height: number
}
