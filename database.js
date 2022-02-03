import { Low, JSONFile } from 'lowdb';

const adapter = new JSONFile('database.json');
const db = new Low(adapter);

await db.read();
db.data = db.data || { records: [
    // the title, the artist, the year, the cover image and the price
    {
        title: 'Egal',
        artist: 'DJ Egal',
        year: '2015',
        cover: '',
        price: 5.5
    },
]};
await db.write();

export default db;