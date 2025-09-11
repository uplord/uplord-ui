import type { Meta, StoryObj } from '@storybook/nextjs'

import styles from '@/app/page.module.scss'
import { Banner, BannerProps } from '@/components/blocks/Banner'
import { Header } from '@/components/main/Header'
import { bannerData } from '@/data/data'

const meta: Meta<typeof Banner> = {
  title: 'Blocks/Banner',
  component: Banner,
  args: {
    id: 'banner',
    data: bannerData(),
  },
}

export default meta
type Story = StoryObj<BannerProps>

export const Default: Story = {
  argTypes: {
    hasHeader: {
      table: {
        disable: true,
      },
    },
  },
}

export const WithHeader: Story = {
  parameters: {
    backgrounds: { disable: true },
  },
  args: {
    hasHeader: true,
  },
  argTypes: {
    hasHeader: {
      table: {
        disable: true,
      },
    },
  },
  render: (props) => {
    return (
      <>
        <Header isHome />
        <main className={styles.main}>
          <Banner hasHeader={props.hasHeader} />
        </main>
      </>
    )
  },
}
