export type BannerData = {
  title: string
  subtitle: string
  content: string
  image: string
  buttons: {
    label: string
    href: string
  }[]
}

export type SectionData = {
  title: string
  subtitle: string
  content: string
  image: string
  buttons: {
    label: string
    href: string
  }[]
}

export type TimelineData = {
  date: string
  role: string
  location: string
  description: string[]
  icon: string
}

export type ProjectsData = {
  title: string
  description: string
  icon: string
  alt: string
  bgColor: string
  textColor: string
  width: number
  height: number
}
