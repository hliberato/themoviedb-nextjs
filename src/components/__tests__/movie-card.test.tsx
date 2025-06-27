import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import movieMock from '../../mocks/movie.mock';
import MovieCard from '../movie-card/movie-card';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('MovieCard', () => {
  it('renders the movie poster with correct src and alt', () => {
    render(<MovieCard movie={movieMock} />);
    const img = screen.getByAltText(movieMock.title);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute(
      'src',
      expect.stringContaining(movieMock.poster_path)
    );
  });

  it('renders the movie title', () => {
    render(<MovieCard movie={movieMock} />);
    expect(screen.getByText(movieMock.title)).toBeInTheDocument();
  });

  it('renders the rating', () => {
    render(<MovieCard movie={movieMock} />);
    const imgs = screen.getAllByRole('img');
    expect(
      imgs.some((img) => img.getAttribute('aria-label')?.includes('Stars'))
    ).toBe(true);
  });

  it('renders the "See Details" button', () => {
    render(<MovieCard movie={movieMock} />);
    expect(
      screen.getByRole('button', { name: /see details/i })
    ).toBeInTheDocument();
  });

  it('calls router.push with the correct URL when "See Details" is clicked', () => {
    const push = jest.fn();
    jest
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      .spyOn(require('next/navigation'), 'useRouter')
      .mockReturnValue({ push });
    render(<MovieCard movie={movieMock} />);
    fireEvent.click(screen.getByRole('button', { name: /see details/i }));
    expect(push).toHaveBeenCalledWith(`/movie/${movieMock.id}`);
  });
});
