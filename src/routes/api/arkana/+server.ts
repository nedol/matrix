// src/routes/api/calculate.js


import {  GetDataEdit , SaveData} from './db.admin.js'; 

/** @type {import('./$types').RequestHandler} */
export async function GET( event ) {
    let id = event.url.searchParams.get('id');

    // Обработка данных и запрос к базе данных
    try {
        const result = await GetDataEdit( id );
        
        return new Response(JSON.stringify({
            status: 200,
            arkan: result // Возвращаем добавленного пользователя
        }));
    } catch (error) {
        return new Response(JSON.stringify({
            status: 500,
            error: 'Произошла ошибка при обработке данных' 
        }));
    }
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    let { id, text } = await request.json();
    console.log()
    const res = SaveData({ id, text });

    return new Response(JSON.stringify({
        res
    }));
}


