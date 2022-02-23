import { Low, JSONFile } from 'lowdb';

const adapter = new JSONFile('database.json');
const db = new Low(adapter);

await db.read();
db.data = db.data || {
  records: [
    // the title, the artist, the year, the cover image and the price
    {
      id: 1,
      title: 'Egal',
      artist: 'DJ Egal',
      year: '2015',
      cover: '',
      price: 5.5,
    },
  ],
  user: [],
  orders: [],
};

if (!db.data.user) {
    db.data.user = [];
}

await db.write();

export default db;
