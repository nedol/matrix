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

export async function GetData(par) {
  let resp;

  return { resp };
}
