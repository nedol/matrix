<!-- src/components/AdminMatrixData.svelte -->
<script lang="ts">
  export let data;

  let selectedArkana = '';
  let arkanaData = data.arkans;

  async function saveArkanaData() {
    const response = await fetch('/api/arkana', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: arkanaData[selectedArkana].data,
        id: selectedArkana,
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

  $: console.log(selectedArkana);
</script>

<h1>Ввод и редактирование данных матрицы</h1>

<label for="arcana">Аркана:</label>
<select id="arcana" bind:value={selectedArkana}>
  <option value="">Выберите аркану...</option>
  {#each arkanaData as arkana, t}
    <option value={t}>{arkana.name}</option>
  {/each}
</select>

<div>

  {#if arkanaData && (selectedArkana || selectedArkana=='0')}
    <!-- Отобразите данные выбранной арканы -->
    <textarea
      class="editor"
      rows="20"
      bind:value={arkanaData[selectedArkana].data}
    ></textarea>
    <button on:click={saveArkanaData}>Сохранить</button>
  {/if}
</div>

<style>
  .editor {
    width: 90%;
    margin-top: 20px;
  }
</style>
