<!-- src/components/AdminMatrixData.svelte -->
<script lang="ts">
  // import { SaveData } from '../api/arkana/db.admin';
  // import { GetData } from '../api/calculate/db';

  export let data;

  let selectedArkan = '',
    selectedLevel = '',
    selectedType = '';

  $: if (selectedArkan !== '' && selectedLevel !== '' && selectedType !== '') {
    GetDataEdit(selectedArkan, selectedLevel, selectedType);
  }

  let text = '';
  // const levels = Array.from({length: 10}, (_, index) => index + 1);

  async function GetDataEdit(arkan, level, type) {
    const response = await fetch('/api/arkana', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        func: 'GetDataEdit',
        level: level,
        type: type,
        arkan: arkan
      })
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result.res[0])
      if(result.res[0]){
        text = result.res[0].data
      }else{
        text = ''
      }
    }
  }

  async function saveArkanaData() {
    const response = await fetch('/api/arkana', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        func: 'SaveData',
        text: text,
        level: selectedLevel,
        type: selectedType,
        arkan: selectedArkan
      })
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
</script>

<h1>Ввод и редактирование данных матрицы</h1>

<label for="arkan">Аркан:</label>
<select id="arkan" bind:value={selectedArkan}>
  {#each data.arkans as data, t}
    <option value={t+1}>{data.arkan}</option>
  {/each}
</select>
<label for="level">Уровень:</label>
<select id="level" bind:value={selectedLevel} style="width:50px">
  {#each data.levels as data, t}
    <option value={t+1}>{data.level}</option>
  {/each}
</select>
<label for="type">Тип:</label>
<select id="type" bind:value={selectedType}>
  {#each data.types as data, t}
    <option value={t+1}>{data.type}</option>
  {/each}
</select>

<div>
  <!-- {#if selectedArkan && selectedLevel && selectedType} -->
  <!-- Отобразите данные выбранной арканы -->
  <textarea class="editor" rows="20" bind:value={text}></textarea>
  <button on:click={saveArkanaData}>Сохранить</button>
  <!-- {/if} -->
</div>

<style>
  .editor {
    width: 90%;
    margin-top: 20px;
  }
</style>
