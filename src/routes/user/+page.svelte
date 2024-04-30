<!-- src/routes/Calculate.svelte -->
<script lang="ts">
  let firstName = 'Test';
  let lastName = 'Test';
  let dob = '01/01/1970';

  async function handleSubmit(event: any) {
    event.preventDefault();

    const response = await fetch('/api/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, dob }),
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

<h1>Калькулятор Матрицы Судьбы</h1>
<!-- svelte-ignore a11y-img-redundant-alt -->


<form on:submit={handleSubmit}>
  <label for="firstName">Имя:</label>
  <input type="text" id="firstName" bind:value={firstName} required /><br /><br
  />
  <label for="lastName">Фамилия:</label>
  <input type="text" id="lastName" bind:value={lastName} required /><br /><br />
  <label for="dob">Дата рождения:</label>
  <input type="date" id="dob" bind:value={dob} required /><br /><br />
  <button type="submit">Рассчитать</button>
</form>

