UPDATE posts SET body = regexp_replace(
  body,
  '> — \*\*Wale O-Michael\*\*\n> Managing Associate, Stallions Sterling Law Firm\n> Chairman, ICMC Ibadan',
  '> — **Wale O-Michael**  \n> Managing Associate, Stallions Sterling Law Firm  \n> Chairman, ICMC Ibadan',
  'g'
), updated_at = NOW() WHERE id = 'c336a000-e103-43f3-a068-6217a3980fa7';