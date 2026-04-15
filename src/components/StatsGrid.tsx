import React from 'react';
import { Grid } from '@mui/material';
import StatsCard from './StatsCard';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { useTodoContext } from '../context/TodoContext';

export default function StatsGrid() {
  const { state } = useTodoContext(); // z TodoContext z LAB4
  const total = state.todos.length;
  const completed = state.todos.filter(t => t.completed).length;
  const pending = total - completed;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
        <StatsCard 
          title="Wszystkie zadania" 
          value={total} 
          icon={FormatListBulletedIcon}
          color="#1565C0" bgColor="#E3F2FD" 
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <StatsCard 
          title="Ukończone" 
          value={completed} 
          icon={CheckCircleIcon}
          color="#4CAF50" bgColor="#E8F5E9" 
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <StatsCard 
          title="Oczekujące" 
          value={pending} 
          icon={PendingActionsIcon}
          color="#FFA000" bgColor="#FFF8E1" 
        />
      </Grid>
    </Grid>
  );
}

