// src/routes/api/calculate.js

import { sql } from 'postgres';
import {  GetData } from './db.js'; 

export async function POST({ request }) {
    const { firstName, lastName, dob } = await request.json();

    // Обработка данных и запрос к базе данных
    try {
        const result = GetData({ firstName, lastName, dob });
        
        return new Response({
            status: 200,
            body: result.rows[0] // Возвращаем добавленного пользователя
        });
    } catch (error) {
        return new Response({
            status: 500,
            body: { error: 'Произошла ошибка при обработке данных' }
        });
    }
}
