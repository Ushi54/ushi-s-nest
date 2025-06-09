'use client';

import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

// カスタムボタンのスタイルを定義
const StyledButton = styled(MuiButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  textTransform: 'none',
  fontWeight: 600,
  padding: '8px 24px',
  '&:hover': {
    transform: 'translateY(-2px)',
    transition: 'transform 0.2s ease-in-out',
  },
}));

// ボタンのプロパティの型定義
interface ButtonProps extends MuiButtonProps {
  label: string;
}

// カスタムボタンコンポーネント
export const Button = ({ label, variant = 'contained', color = 'primary', ...props }: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      color={color}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

export default Button; 