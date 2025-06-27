'use client';

import { Skeleton } from '@mui/material';
import Card from '@mui/material/Card';

export default function MovieCardSkeleton() {
  const lineHeight: number = 28;
  return (
    <Card>
      <Skeleton variant="rectangular" animation="wave" height={300} />
      <Skeleton
        animation="wave"
        height={lineHeight}
        style={{ margin: '1.33rem 1rem 0' }}
      />
      <Skeleton
        animation="wave"
        height={lineHeight}
        style={{ margin: '0 1rem 0' }}
      />
      <Skeleton
        animation="wave"
        height={lineHeight}
        width="40%"
        style={{ margin: '0 1rem 1.34rem' }}
      />
    </Card>
  );
}
