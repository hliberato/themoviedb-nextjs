'use client';

import { queryStore } from '@/store';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, InputBase, Toolbar, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const handleInputChangeWithDebounce = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let queryValue = event.target.value;
    setQuery(queryValue);
    queryValue = queryValue.trim();
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      queryStore.setState({ query: queryValue });
    }, 800);
  };

  return (
    <AppBar>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ cursor: 'pointer', marginRight: 'auto' }}
          onClick={() => router.push('/')}
        >
          The Movie Database
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            value={query}
            onChange={handleInputChangeWithDebounce}
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                router.push('/');
              }
            }}
          />
        </Search>
      </Toolbar>
    </AppBar>
  );
}
