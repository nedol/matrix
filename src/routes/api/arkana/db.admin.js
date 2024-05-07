import postgres from 'postgres';
let conStr = {
  connectionStringSupabase:
    'postgresql://postgres.abzyzzvokjdnwgjbitga:NissanPathfinder@386/aws-0-eu-central-1.pooler.supabase.com:5432',
};

let sql;

export async function CreatePool(resolve) {
  sql = postgres(conStr.connectionStringSupabase, {
    host: 'aws-0-eu-central-1.pooler.supabase.com', // Postgres ip address[s] or domain name[s]
    port: 5432, // Postgres server port[s]
    database: 'matrix', // Name of database to connect to
    username: 'postgres.abzyzzvokjdnwgjbitga', // Username of database user
    password: 'NissanPathfinder@386', // Password of database user
    idle_timeout: 20,
    max_lifetime: 60 * 30,
  });

  resolve();
}

export async function GetData() {
  try {
    const arkans = await sql`
        SELECT * FROM arkans ORDER BY id ASC
    `;
  
    const levels = await sql`
        SELECT * FROM levels ORDER BY id ASC
    `;

    const types = await sql`
        SELECT * FROM types ORDER BY id ASC
    `;

    return { arkans, levels, types };
  } catch (ex) {
    console.log(ex);
  }
}

export async function GetDataEdit(data) {
  try {
    const text = await sql`
        SELECT * FROM text WHERE arkan=${data.arkan} AND level=${data.level} AND type=${data.type}
    `;

    return  text;
  } catch (ex) {
    console.log(ex);
  }
}

export async function SaveData(par) {
  try {
    const res = await sql`
      INSERT INTO text
			(data, arkan , level, type)
			VALUES(${par.text},${par.arkan},${par.level},${par.type})
			ON CONFLICT (arkan, level, type)
			DO UPDATE SET
			data = EXCLUDED.data`;
    return res;
  } catch (ex) {
    console.log(ex);
  }
}
