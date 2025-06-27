/* eslint-disable @typescript-eslint/no-unused-vars */
import MoviesPagination from '@/components/movies-pagination/movies-pagination';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof MoviesPagination> = {
  title: 'Components/MoviesPagination',
  component: MoviesPagination,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MoviesPagination>;

export const Default: Story = {
  args: {
    page: 1,
    maxPages: 10,
    handlePaginationChange: (
      event: React.ChangeEvent<unknown>,
      value: number
    ) => void {},
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
