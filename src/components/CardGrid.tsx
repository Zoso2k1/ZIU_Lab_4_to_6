import React from 'react';
import CardItem from './CardItem';
import styles from './CardGrid.module.css';

interface CardGridProps {
  items: { title: string; image: string }[];
}

export default function CardGrid({ items }: CardGridProps) {
  return (
    <div className={styles.grid}>
      {items.map((item, index) => (
        <CardItem key={index} title={item.title} image={item.image} />
      ))}
    </div>
  );
}
