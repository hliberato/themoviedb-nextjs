import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import movieMock from '../../mocks/movie.mock';
import MovieDetails from '../movie-details/movie-details';

describe('MovieDetails', () => {
  it('renders without crashing', () => {
    render(<MovieDetails movie={movieMock} />);
    expect(screen.getByText(movieMock.title)).toBeInTheDocument();
  });

  it('renders the movie title, tagline, and overview', () => {
    render(<MovieDetails movie={movieMock} />);
    expect(screen.getByText(movieMock.title)).toBeInTheDocument();
    expect(screen.getByText(movieMock.tagline)).toBeInTheDocument();
    expect(screen.getByText(movieMock.overview)).toBeInTheDocument();
  });

  it('renders all genres', () => {
    render(<MovieDetails movie={movieMock} />);
    const genresText = movieMock.genres.map((g) => g.name).join(', ');
    expect(screen.getByText(genresText)).toBeInTheDocument();
  });

  it('shows the release date formatted as DD/MM/YYYY', () => {
    render(<MovieDetails movie={movieMock} />);
    const formattedDate = new Date(movieMock.release_date).toLocaleDateString(
      'en-GB'
    );
    expect(screen.getByText(formattedDate)).toBeInTheDocument();
  });

  it('shows empty release date if missing', () => {
    const movieNoDate = { ...movieMock, release_date: '' };
    render(<MovieDetails movie={movieNoDate} />);
    const releaseDate = screen.getAllByText('', { selector: 'p' });
    expect(releaseDate.length).toBeGreaterThan(0);
  });

  it('renders headings and alt attributes for accessibility', () => {
    render(<MovieDetails movie={movieMock} />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      movieMock.title
    );
    expect(screen.getByRole('heading', { level: 6 })).toHaveTextContent(
      movieMock.tagline
    );
    expect(screen.getByAltText('Movie poster')).toBeInTheDocument();
    expect(screen.getByAltText('Movie backdrop')).toBeInTheDocument();
  });
});
