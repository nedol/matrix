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
               res[0].data =  await Translate(res[0].data, 'ru',lang)
            }
            return new Response(JSON.stringify({
                res
            }));
        case 'SaveData':
            res = await SaveData({ text, arkan, level, type, lang });
            return new Response(JSON.stringify({
                res
            }));
    }
}

  async function Translate(text: string, from_lang: string, to_lang: string) {
    try {
      translate.from = from_lang;
        text = text.replace(/\r\n/g, "");
        let res = await translate(text, to_lang);
        return res;
    } catch (error) {
      console.error('Translation error:', error);
      return text; // или другое подходящее значение по умолчанию
    }
  }



