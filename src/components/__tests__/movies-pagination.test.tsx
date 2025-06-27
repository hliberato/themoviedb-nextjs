import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import MoviesPagination from '../movies-pagination/movies-pagination';

describe('MoviesPagination', () => {
  const defaultProps = {
    page: 2,
    maxPages: 5,
    handlePaginationChange: jest.fn(),
  };

  it('renders the Pagination component with correct page and count', () => {
    render(<MoviesPagination {...defaultProps} />);
    const pagination = screen.getByRole('navigation');
    expect(pagination).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'page 2' })).toHaveAttribute(
      'aria-current',
      'page'
    );
  });

  it('calls handlePaginationChange when a different page is clicked', () => {
    render(<MoviesPagination {...defaultProps} />);
    const pageButton = screen.getByRole('button', { name: 'Go to page 3' });
    fireEvent.click(pageButton);
    expect(defaultProps.handlePaginationChange).toHaveBeenCalled();
  });

  it('renders the correct number of page buttons', () => {
    render(<MoviesPagination {...defaultProps} />);
    for (let i = 1; i <= defaultProps.maxPages; i++) {
      const label = i === defaultProps.page ? `page ${i}` : `Go to page ${i}`;
      expect(screen.getByRole('button', { name: label })).toBeInTheDocument();
    }
  });
});
