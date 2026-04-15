import React from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

interface StatsCardProps {
  title: string;
  value: number;
  icon: SvgIconComponent;
  color: string;
  bgColor: string;
}

export default function StatsCard({ title, value, icon: Icon, color, bgColor }: StatsCardProps) {
  return (
    <Card sx={{ backgroundColor: bgColor, color: color }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            <Typography variant="body2" gutterBottom>{title}</Typography>
            <Typography variant="h4" fontWeight={700}>{value}</Typography>
          </Box>
          <Icon fontSize="large" sx={{ opacity: 0.3 }} />
        </Box>
      </CardContent>
    </Card>
  );
}
