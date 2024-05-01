<script>
  let birthDate = '24.02.1982';
  let personalSquare = [];
  let familySquare = [];

  function calculateSquare() {
    // Функция для расчета личного квадрата
    function calculatePersonalSquare(day, month, year) {
      let personalPoints = [];

      // Расчет первой точки (левая)
      let firstPoint = day;
      if (firstPoint > 22) {
        firstPoint = firstPoint % 10 + Math.floor(firstPoint / 10);
      }
      personalPoints.push(firstPoint);

      // Расчет второй точки (верхняя)
      let secondPoint = month;
      personalPoints.push(secondPoint);

      // Расчет третьей точки (правая)
      let thirdPoint = 0;
      year.toString().split('').forEach(digit => {
        thirdPoint += parseInt(digit);
      });
      if (thirdPoint > 22) {
        thirdPoint = thirdPoint % 10 + Math.floor(thirdPoint / 10);
      }
      personalPoints.push(thirdPoint);

      // Расчет четвертой точки (нижняя)
      let fourthPoint = firstPoint + secondPoint + thirdPoint;
      if (fourthPoint > 22) {
        fourthPoint = fourthPoint % 10 + Math.floor(fourthPoint / 10);
      }
      personalPoints.push(fourthPoint);

      // Расчет пятой точки (центр)
      let fifthPoint = firstPoint + secondPoint + thirdPoint + fourthPoint;
      if (fifthPoint > 22) {
        fifthPoint = fifthPoint % 10 + Math.floor(fifthPoint / 10);
      }
      personalPoints.push(fifthPoint);

      return personalPoints;
    }

    // Функция для расчета родового квадрата
    function calculateFamilySquare(personalSquare) {
      let familyPoints = [];

      // Расчет верхней левой точки (род папы)
      familyPoints.push(personalSquare[0] + personalSquare[1]);

      // Расчет верхней правой точки (род мамы)
      familyPoints.push(personalSquare[1] + personalSquare[2]);

      // Расчет нижней правой точки (род папы)
      familyPoints.push(personalSquare[2] + personalSquare[3]);

      // Расчет нижней левой точки (род мамы)
      familyPoints.push(personalSquare[3] + personalSquare[4]);

      // Расчет кармического "хвостика"
      let karmicTail = [];
      karmicTail.push(personalSquare[3] + personalSquare[4]);
      karmicTail.push(personalSquare[4] + personalSquare[2]);

      // Расчет точки благополучия
      familyPoints.push(karmicTail[0] + karmicTail[1]);

      return familyPoints;
    }

    // Проверка наличия даты рождения
    if (birthDate) {
      let [day, month, year] = birthDate.split('.').map(item => parseInt(item));
      personalSquare = calculatePersonalSquare(day, month, year);
      familySquare = calculateFamilySquare(personalSquare);
    } else {
      // Обработка случая отсутствия даты рождения
      console.error('Введите дату рождения');
    }
  }
</script>

<style>
  /* Стили компонента */
</style>

<div>
  <label for="birthDateInput">Введите дату рождения (ДД.ММ.ГГГГ): </label>
  <input type="text" id="birthDateInput" bind:value={birthDate}>

  <button on:click={calculateSquare}>Рассчитать квадраты</button>

  {#if personalSquare.length > 0}
    <div>
      <h2>Личный квадрат:</h2>
      <ul>
        {#each personalSquare as point}
          <li>{point}</li>
        {/each}
      </ul>
    </div>
  {/if}

  {#if familySquare.length > 0}
    <div>
      <h2>Родовой квадрат:</h2>
      <ul>
        {#each familySquare as point}
          <li>{point}</li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<img src="/assets/scale_1200.jpeg" alt="" width="50%"/>
