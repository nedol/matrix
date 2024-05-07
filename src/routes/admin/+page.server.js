
import { CreatePool } from '../api/arkana/db.admin.js'; //src\lib\server\server.db.js
import { GetData,GetDataEdit } from '../api/arkana/db.admin.js';


/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, cookies, route, url, stuff }) {
  console.log();
    
  const prom = new Promise((resolve, reject) => {
    CreatePool(resolve);
  });

  const pool = await prom;

  let res = await GetData();

  return res
  
}
