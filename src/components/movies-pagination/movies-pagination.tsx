'use client';

import { Grid, Pagination } from '@mui/material';

type MoviesPaginationProps = {
  page: number;
  maxPages: number;
  handlePaginationChange: (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => void;
};

export default function MoviesPagination(props: MoviesPaginationProps) {
  return (
    <Grid
      size={12}
      alignItems="center"
      display="flex"
      justifyContent="center"
      sx={{ margin: 2 }}
    >
      <Pagination
        page={props.page}
        count={props.maxPages}
        shape="rounded"
        onChange={props.handlePaginationChange}
      />
    </Grid>
  );
}
