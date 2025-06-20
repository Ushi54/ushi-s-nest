'use client';

import { Box, Grid } from '@mui/material';
import ContentsCard from './components/ContentsCard';
import cards from './data/cards.json';

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: 'url("/images/backImage.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* ヘッダー部分 */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          zIndex: 1000,
          p: 2,
          fontSize: '20px',
          fontWeight: 'bold',
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
            textAlign: 'left',
          }}
        >
          <Box
            component="img"
            src="/images/ushi_icon.jpeg"
            alt="Logo"
            sx={{
              borderRadius: '50%',
              maxWidth: {
                xs: '50px',
                sm: '100px',
                md: '100px',
              },
              mr: 2,
            }}
          />
          <Box>
            <Box sx={{ fontSize: '24px', fontWeight: 'bold' }}>Ushi's Nest</Box>
            <Box sx={{ fontSize: '16px', color: 'gray' }}>〜all my contents〜</Box>
          </Box>
        </Box>
      </Box>

      {/* コンテンツ部分 */}
      <Grid container spacing={3} sx={{ pt: { xs: 20, sm: 25, md: 25 }, pb: 3 }}>
        {cards.map((card) => (
          <ContentsCard
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            buttons={card.buttons || []}
          />
        ))}
      </Grid>

      {/* フッター部分 */}
      <Box
        sx={{
          textAlign: 'center',
          fontSize: '14px',
          color: 'gray',
          py: 2,
          mt: 'auto',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          boxShadow: '0px -4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        © {new Date().getFullYear()} Ushi's Nest. All rights reserved.
      </Box>
    </Box>
  );
}
