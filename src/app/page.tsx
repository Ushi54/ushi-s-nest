'use client';

import { Box, Grid } from '@mui/material';
import ContentsCard from './components/ContentsCard';
import cards from './data/cards.json';

export default function Home() {
  return (
    <Box sx={{ p: 7 }}>
      <Grid container spacing={4}>
        {cards.map((card) => (
          <ContentsCard
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </Grid>
    </Box>
  );
}
