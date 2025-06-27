import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import MovieCard from '../components/movie-card/movie-card';
import movieMock from '../mocks/movie.mock';

const meta: Meta<typeof MovieCard> = {
  title: 'Components/MovieCard',
  component: MovieCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MovieCard>;

export const Default: Story = {
  args: {
    movie: movieMock,
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
