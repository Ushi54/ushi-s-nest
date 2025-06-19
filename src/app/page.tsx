'use client';

import { Box, Grid } from '@mui/material';
import ContentsCard from './components/ContentsCard';
import cards from './data/cards.json';

export default function Home() {
  return (
    <Box
      sx={{
        p: 3,
        minHeight: '100vh',
        backgroundImage: 'url("/images/backImage.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <Box
        sx={{
          pb: 10,
          fontSize: '20px',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Ushi's Nest
      </Box>
      <Grid container spacing={3}>
        {cards.map((card) => (
          <ContentsCard
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            url={card.url}
          />
        ))}
      </Grid>
    </Box>
  );
}
