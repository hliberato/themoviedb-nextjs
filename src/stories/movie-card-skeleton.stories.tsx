import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import MovieCardSkeleton from '../components/movie-card-skeleton/movie-card-skeleton';

const meta: Meta<typeof MovieCardSkeleton> = {
  title: 'Components/MovieCardSkeleton',
  component: MovieCardSkeleton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MovieCardSkeleton>;

export const Default: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
