import type { Meta, StoryObj } from '@storybook/nextjs'

import styles from '@/app/page.module.scss'

const meta: Meta = {
  title: 'Pages/Home',
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          Page
        </main>
      </div>
    )
  },
}
