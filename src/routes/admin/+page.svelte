<!-- src/components/AdminMatrixData.svelte -->
<script lang="ts">
  // import { SaveData } from '../api/arkana/db.admin';
  // import { GetData } from '../api/calculate/db';
  import translate from 'translate';
  translate.engine = 'google';

  import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust,
  } from '@smui/top-app-bar';

  // import './smui.1.css';

  import ISO6391 from 'iso-google-locales';

  import langs_list from '$lib/lang_list.json';

  let topAppBar;
  let lang = 'ru';
  let lang_menu = false;

  export let data;

  let selectedArkan = '',
    selectedLevel = '',
    selectedType = '';

  $: if (
    selectedArkan !== '' &&
    selectedLevel !== '' &&
    selectedType !== '' &&
    lang
  ) {
    GetDataEdit(selectedArkan, selectedLevel, selectedType, lang);
  }

  let text = { ru: '' },
    text_editor,
    langs = data.langs;
  // const levels = Array.from({length: 10}, (_, index) => index + 1);

  async function Translate(text: string, from_lang: string, to_lang: string) {
    try {
      translate.from = from_lang;

      return await translate(text.trim(), to_lang);
    } catch (error) {
      console.error('Translation error:', error);
      return text; // или другое подходящее значение по умолчанию
    }
  }

  async function GetDataEdit(arkan, level, type, lang) {

    const response = await fetch('./admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        func: 'GetDataEdit',
        level: level,
        type: type,
        arkan: arkan,
        lang: lang,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result.res[0]);
      if (result.res[0]) {
        text[lang] = result.res[0].data;
      } 
    }
  }

  async function saveArkanaData() {
    const response = await fetch('./admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        func: 'SaveData',
        text: text[lang],
        level: selectedLevel,
        type: selectedType,
        arkan: selectedArkan,
        lang: lang,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Результат:', result);
      // Здесь можно обработать результат, например, отобразить его на странице
    } else {
      console.error('Ошибка при отправке данных');
      // Здесь можно обработать ошибку, например, показать сообщение об ошибке пользователю
    }
  }

  function setLang(ev) {
    let l = ev.currentTarget.outerText;
    let code = ISO6391.getCode(l);
    if (code !== 'English') {
      lang = code;
    }
    lang_menu = false;
  }
</script>

<header>
  <div class="top-app-bar-container flexor">
    <TopAppBar bind:this={topAppBar} variant="fixed" dense>
      <Row>
        <Section align="end">
          <span
            class="lang_span"
            on:click={() => {
              lang_menu = !lang_menu;
            }}
            >{(() => {
              return ISO6391.getNativeName(lang);
            })()}</span
          >
          {#if lang_menu}
            <div class="lang_list">
              {#each langs_list as lang}
                <div
                  style="color:black; margin:10px;font-size:smaller"
                  on:click={setLang}
                >
                  {lang}
                </div>
              {/each}
            </div>
          {/if}
        </Section>
      </Row>
    </TopAppBar>
    <div class="flexor-content"></div>
  </div>
</header>
<br />
<h1>Ввод и редактирование данных матрицы</h1>
<label for="arkan">Аркан:</label>
<select id="arkan" bind:value={selectedArkan}>
  {#each data.arkans as data, t}
    <option value={t + 1}>{data.arkan}</option>
  {/each}
</select>
<label for="level">Уровень:</label>
<select id="level" bind:value={selectedLevel} style="width:50px">
  {#each data.levels as data, t}
    <option value={t + 1}>{data.level}</option>
  {/each}
</select>
<label for="type">Тип:</label>
<select id="type" bind:value={selectedType}>
  {#each data.types as data, t}
    <option value={t + 1}>{data.type}</option>
  {/each}
</select>

<div>
  <!-- {#if selectedArkan && selectedLevel && selectedType} -->
  <!-- Отобразите данные выбранной арканы -->

  <textarea class="editor" rows="20" bind:value={text[lang]}></textarea>

  <button on:click={saveArkanaData}>Сохранить</button>
  <!-- {/if} -->
</div>

<style>
  .editor {
    width: 90%;
    margin-top: 20px;
  }

  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .flexor {
    display: inline-flex;
    flex-direction: column;
  }

  .flexor-content {
    flex-basis: 0;
    /* height: 100vh; */
    flex-grow: 1;
    overflow: auto;
  }

  .top-app-bar-container {
    top: 0;
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
    margin: 0 18px 18px 0;
    background-color: var(--mdc-theme-background, #fff);

    overflow: auto;
    display: inline-block;
  }

  .lang_span {
    position: relative;
    right: 20px;
    font-size: smaller;
  }

  .lang_list {
    position: absolute;
    top: 50px;
    height: 80vh;
    overflow: auto;
    justify-content: center; /* Выравниваем содержимое по центру вертикально */
    align-items: center; /* Выравниваем содержимое по центру горизонтально */
    background-color: whitesmoke;
  }
</style>
