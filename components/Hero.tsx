import { useEffect, useState } from 'react';
import styles from '../styles/Hero.module.css';
import { loadWasm } from '../lib/wasm';

interface Item {
  title: string;
}

export default function Hero({ items }: { items: Item[] }) {
  const [sum, setSum] = useState<number | null>(null);
  useEffect(() => {
    loadWasm().then(wasm => setSum(wasm.add(1, 2)));
  }, []);

  const rows = 3;
  const perRow = 6;
  const total = rows * perRow;
  const cards: (Item | null)[] = [
    ...items.slice(0, total),
    ...Array(Math.max(0, total - items.length)).fill(null)
  ];

  return (
    <div className={styles.hero}>
      <div className={styles.cylinder}>
        {cards.map((item, idx) => {
          const row = Math.floor(idx / perRow);
          const angle = (idx % perRow) * (360 / perRow);
          return (
            <div
              key={idx}
              className={`${styles.card} ${item ? styles.filled : styles.empty}`}
              style={{
                transform: `rotateY(${angle}deg) translateZ(240px) translateY(${row * 120}px)`
              }}
            >
              {item ? item.title : 'Empty'}
            </div>
          );
        })}
      </div>
      {sum !== null && <p className={styles.wasmNote}>1 + 2 = {sum} via WASM</p>}
    </div>
  );
}
