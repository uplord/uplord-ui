import type { Meta, StoryObj } from '@storybook/nextjs'

import styles from './card.module.scss'
import { Card, CardProps } from '@/components/main/Card'
import { Button, ButtonGroup } from '@/components/ui/Button'

const meta: Meta<typeof Card> = {
  title: 'main/Card',
  component: Card,
  args: {
    border: false,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className="padding">
          <Story />
        </div>
      )
    },
  ],
}

export default meta
type Story = StoryObj<CardProps>

export const Default: Story = {
  render: (args: CardProps) => {
    return (
      <Card {...args}>
        <h2>Card title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia egestas nunc, id
          sodales eros bibendum in. Morbi tristique dolor quis dictum condimentum. Curabitur non
          libero ut lorem hendrerit porta non ac tortor. Duis suscipit, quam id luctus pellentesque,
          leo lectus congue dolor, id congue sapien lectus at urna.
        </p>
        <hr />
        <p>
          Integer augue quam, convallis ac efficitur at, maximus eget purus. In facilisis efficitur
          erat iaculis elementum. Nullam posuere eu augue sit amet consequat.
        </p>
        <ButtonGroup className={styles['button-group']}>
          <Button
            label="Button"
            size="md"
            variant="primary"
            className={styles.button}
          />
        </ButtonGroup>
      </Card>
    )
  },
}
