// src/routes/api/calculate.js


import {  GetDataEdit , SaveData} from './db.admin.js'; 

/** @type {import('./$types').RequestHandler} */
export async function GET( event ) {
    let id = event.url.searchParams.get('id');

    // Обработка данных и запрос к базе данных
    try {
        const result = await GetData( id );
        
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
    let { func, text, arkan, level, type } = await request.json();
    let res;
    switch (func) {
        case 'GetDataEdit':
            res = await GetDataEdit({ arkan, level, type });
            return new Response(JSON.stringify({
                res
            }));
        case 'SaveData':
            res = await SaveData({ text, arkan, level, type });
            return new Response(JSON.stringify({
                res
            }));
    }
}



