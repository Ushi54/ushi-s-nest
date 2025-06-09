'use client';

import { Box, cardClasses, Stack } from '@mui/material';
import ContentsCard from './components/ContentsCard';
import cards from './data/cards.json';

export default function Home() {
  return (
    <Box sx={{ p: 4 }}>

      {/* ドラム */}
<ContentsCard title={cards[0].title} description={cards[0].description} image={cards[0].image} />
    </Box>
  );
}
