// src/routes/api/calculate.js

  import translate from 'translate';
translate.engine = 'google';
  
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
    let { func, text, arkan, level, type , lang} = await request.json();
    let res;
    switch (func) {
        case 'GetDataEdit':
            res = await GetDataEdit({ arkan, level, type, lang });
            if (res[1]) {
                res[0].data = res[1].data
            } else if (res[0] && res[0].lang!==lang && !res[1]) {
               res[0].data =  await Translate(res[0].data, lang)
            }
            return new Response(JSON.stringify({
                res
            }));
        case 'SaveData':
            res = await SaveData({ text, arkan, level, type, lang });
            return new Response(JSON.stringify({
                res
            }));
        case 'Translate':
            res = await Translate( text, lang );
            return new Response(JSON.stringify({
                res
            }));
    }
}

 async function Translate(text, lang) {
     try {
         if (lang === 'ru')
             return text;
        translate.from = 'ru';
        text = text.replace(/\r\n/g, "");

        // Разделение текста на предложения
        const sentences = text.split(/[.!?]/);
        let translatedText = '';

        // Перевод каждой части текста (по 10 предложений)
        for (let i = 0; i < sentences.length; i += 10) {
            const chunk = sentences.slice(i, i + 10).join('. '); // Объединение 10 предложений в одну часть
            const res = await translate(chunk, lang);
            translatedText += res + ' '; // Добавление переведенной части к полному тексту
        }

        return translatedText.trim(); // Удаление лишних пробелов в конце текста
    } catch (error) {
        console.error('Translation error:', error);
        return text; // или другое подходящее значение по умолчанию
    }
}




