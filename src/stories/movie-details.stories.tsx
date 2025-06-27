import MovieDetails from '@/components/movie-details/movie-details';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import movieMock from '../mocks/movie.mock';

const meta: Meta<typeof MovieDetails> = {
  title: 'Components/MovieDetails',
  component: MovieDetails,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MovieDetails>;

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
