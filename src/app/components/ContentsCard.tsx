'use client';

import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Grid, Dialog, DialogTitle, DialogContent, Button } from '@mui/material';
import { useState } from 'react';

interface ContentsCardProps {
  title: string;
  description: string;
  image: string;
  buttons: { name: string; url: string }[];
}

export default function ContentsCard({ title, description, image, buttons }: ContentsCardProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        sx={{
          maxWidth: {
            xs: '300px',
            sm: '300px',
            md: '300px',
          },
          margin: 'auto',
        }}
      >
        <Card
          sx={{
            height: '350px',
            borderRadius: '20px',
          }}
        >
          <CardActionArea onClick={handleOpen}>
            <CardMedia
              component="img"
              height="180"
              image={image}
              alt={title}
              sx={{
                p: 1,
                borderRadius: '20px 20px 0 0',
              }}
            />
            <CardContent
              sx={{
                height: '150px',
              }}
            >
              <Typography gutterBottom variant="h6" component="div">
                {title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      {/* モーダル */}
      <Dialog open={open} onClose={handleClose} PaperProps={{
        sx: {
          borderRadius: {
            xs: '20px',
            sm: '20px',
            md: '20px',
          },
          maxWidth: {
            xs: '90%',
            sm: '40%',
            md: '40%',
          },
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }
      }}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: 'flex',
              flexFlow: 'column',
              justifyContent: 'center',
              gap: 2,
              mb: 2,
            }}>
            {buttons.map((button, index) => (
              <Button
                key={index}
                variant="contained"
                href={button.url}
                target="_blank"
                sx={{
                  textTransform: 'none', backgroundColor: '#80AAA6', color: '#fff', '&:hover': { backgroundColor: '#D2E2E0' }, width: {
                    xs: '50vw',
                    sm: '40vw',
                    md: '30vw',
                  }
                }}
              >
                {button.name}
              </Button>
            ))}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

