
import { CreatePool } from './api/calculate/db.js'; //src\lib\server\server.db.js



/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, cookies, route, url, stuff }) {
    console.log();

    
    const prom = new Promise((resolve, reject) => {
      CreatePool(resolve);
    });

  const pool = await prom;
  
}
