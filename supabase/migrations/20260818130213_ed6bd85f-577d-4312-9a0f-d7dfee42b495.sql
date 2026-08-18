UPDATE posts SET body = replace(
  replace(
    body,
    E'> — **Wale O-Michael**  \\n> Managing Associate, Stallions Sterling Law Firm  \\n> Chairman, ICMC Ibadan',
    E'> — **Wale O-Michael**  \n> Managing Associate, Stallions Sterling Law Firm  \n> Chairman, ICMC Ibadan'
  ),
  E'> — **Wale O-Michael**\n> Managing Associate, Stallions Sterling Law Firm\n> Chairman, ICMC Ibadan',
  E'> — **Wale O-Michael**  \n> Managing Associate, Stallions Sterling Law Firm  \n> Chairman, ICMC Ibadan'
), updated_at = NOW() WHERE id = 'c336a000-e103-43f3-a068-6217a3980fa7';