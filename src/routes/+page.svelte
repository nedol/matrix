<script lang="ts">
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';
  import ISO6391 from 'iso-google-locales';
  import langs_list from '$lib/lang_list.json';

  import Diagrama from './Diagrama2.svelte';

  let lang = 'ru';
  let lang_menu = false;

  let params = {
    B_diagram: '',
    B1_diagram: '',
    B2_diagram: '',
    B3_diagram: '',
    E_diagram: '',
    E1_diagram: '',
    E2_diagram: '',
    F_diagram: '',
    F1_diagram: '',
    F2_diagram: '',
    A_diagram: '',
    A1_diagram: '',
    A2_diagram: '',
    A3_diagram: '',
    C_diagram: '',
    C1_diagram: '',
    C2_diagram: '',
    Y_diagram: '',
    H_diagram: '',
    H1_diagram: '',
    H2_diagram: '',
    G_diagram: '',
    G1_diagram: '',
    G2_diagram: '',
    G4_diagram: '',
    L_diagram: '',
    M_diagram: '',
    D_diagram: '',
    D1_diagram: '',
    D2_diagram: '',
    X_diagram: '',
  };

  let birthDate = '';
  let personalSquareChart;
  let familySquareChart;

  let chartData = {
    labels: ['20 лет', '30 лет', '40 лет', '50 лет'],
    datasets: [
      {
        label: 'Цифровые значения',
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Цвет заливки
        borderColor: 'rgba(255, 99, 132, 1)', // Цвет линии
        borderWidth: 1, // Толщина линии
        data: [14, 18, 5, 11], // Динамические цифровые значения
      },
    ],
  };

  let myChart;

  onMount(() => {
    // Получаем ссылку на элемент canvas
    // const ctx = myChart.getContext('2d');
    // // Создаем новый экземпляр диаграммы
    // myChart = new Chart(ctx, {
    //   type: 'radar',
    //   data: chartData,
    //   options: {
    //     scales: {
    //       r: {
    //         angleLines: {
    //           color: 'red',
    //         },
    //       },
    //     },
    //   },
    // });
  });

  async function Translate(text: string, to_lang: string) {
    if (to_lang === 'ru') return text;
    const response = await fetch('./admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        func: 'Translate',
        text: text,
        lang: lang,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Результат:', result);
      // Здесь можно обработать результат, например, отобразить его на странице
      return result.res;
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

  function ПривестиК(val) {
    if (val > 22) {
      return (val % 10) + Math.floor(val / 10);
    }
    return val;
  }

  function calculateSquare() {
    // Функция для расчета личного квадрата
    function calculatePersonalSquare(day, month, year) {
      let personalPoints = [];

      // Расчет первой точки (левая)
      let firstPoint = day;
      if (firstPoint > 22) {
        firstPoint = (firstPoint % 10) + Math.floor(firstPoint / 10);
      }
      personalPoints.push(firstPoint);

      params.A_diagram = firstPoint;

      // Расчет второй точки (верхняя)
      let secondPoint = month;
      params.B_diagram = secondPoint;

      personalPoints.push(secondPoint);

      params.E2_diagram = ПривестиК(params.A_diagram + params.B_diagram);

      // Расчет третьей точки (правая)
      let thirdPoint = 0;
      year
        .toString()
        .split('')
        .forEach((digit) => {
          thirdPoint += parseInt(digit);
        });
      ПривестиК(thirdPoint);
      personalPoints.push(thirdPoint);
      params.C_diagram = thirdPoint;

      params.F2_diagram = ПривестиК(params.B_diagram + params.C_diagram);

      // Расчет четвертой точки (нижняя)
      let fourthPoint = ПривестиК(firstPoint + secondPoint + thirdPoint);

      personalPoints.push(fourthPoint);
      params.D_diagram = fourthPoint;

      // Расчет пятой точки (центр)
      let fifthPoint = ПривестиК(
        thirdPoint + firstPoint + secondPoint + thirdPoint + fourthPoint
      );

      // personalPoints.push(fifthPoint);
      params.X_diagram = fifthPoint;

      params.G2_diagram = ПривестиК(params.C_diagram + params.D_diagram);

      params.H2_diagram = ПривестиК(params.A_diagram + params.D_diagram);

      return personalPoints;
    }

    // Функция для расчета родового квадрата
    function calculateFamilySquare(personalSquare) {
      let familyPoints = [];

      // Расчет верхней левой точки (род папы)
      familyPoints.push(personalSquare[0] + personalSquare[1]);

      params.E_diagram = ПривестиК(personalSquare[0] + personalSquare[1]);

      params.E1_diagram = ПривестиК(params.E_diagram + params.E2_diagram);

      // Расчет верхней правой точки (род мамы)

      params.F_diagram = ПривестиК(personalSquare[1] + personalSquare[2]);
      familyPoints.push(params.F_diagram);

      params.B2_diagram = ПривестиК(params.E_diagram + params.F_diagram);

      params.B1_diagram = ПривестиК(params.B_diagram + params.B2_diagram);

      // Расчет нижней правой точки (род папы)

      params.G_diagram = ПривестиК(personalSquare[2] + personalSquare[3]);

      familyPoints.push(params.E_diagram);

      params.C2_diagram = ПривестиК(params.F_diagram + params.G_diagram);

      params.F1_diagram = ПривестиК(params.F_diagram + params.F2_diagram);

      params.C1_diagram = ПривестиК(params.C_diagram + params.C2_diagram);

      // Расчет нижней левой точки (род мамы)

      params.H_diagram = ПривестиК(personalSquare[3] + personalSquare[0]);

      params.D2_diagram = ПривестиК(params.G_diagram + params.H_diagram);

      params.A2_diagram = ПривестиК(params.E_diagram + params.H_diagram);

      params.A1_diagram = ПривестиК(params.A_diagram + params.A2_diagram);

      params.G1_diagram = ПривестиК(params.G_diagram + params.G2_diagram);

      params.D1_diagram = ПривестиК(params.D_diagram + params.D2_diagram);

      params.H1_diagram = ПривестиК(params.H_diagram + params.H2_diagram);

      params.A3_diagram = ПривестиК(params.X_diagram + params.A2_diagram);

      params.B3_diagram = ПривестиК(params.X_diagram + params.B2_diagram);

      params.Y_diagram = ПривестиК(params.X_diagram + params.C2_diagram);

      params.G4_diagram = ПривестиК(params.X_diagram + params.G2_diagram);

      params.M_diagram = ПривестиК(params.G4_diagram + params.C2_diagram);

      params.L_diagram = ПривестиК(params.G4_diagram + params.D2_diagram);

      return familyPoints;
    }

    // Проверка наличия даты рождения
    if (birthDate) {
      let [day, month, year] = birthDate
        .split('.')
        .map((item) => parseInt(item));
      let personalSquare = calculatePersonalSquare(day, month, year);
      let familySquare = calculateFamilySquare(personalSquare);
      drawSquare(personalSquare, familySquare);
    } else {
      // Обработка случая отсутствия даты рождения
      alert('Введите дату рождения');
    }
  }

  // Функция для отрисовки квадратов с использованием Chart.js
  function drawSquare(personalSquare, familySquare) {
    const ctx = myChart.getContext('2d');

    myChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: [
          '20 лет',
          '30 лет',
          '40 лет',
          '50 лет',
          '60 лет',
          '70 лет',
          '0 лет',
          '10 лет',
        ],
        datasets: [
          {
            label: 'Личный квадрат',
            data: personalSquare,
            backgroundColor: 'rgba(255, 99, 132, 0.2)', // Цвет заливки
            borderColor: 'rgba(255, 99, 132, 1)', // Цвет линии
            borderWidth: 1, // Толщина линии
          },
          {
            label: 'Родовой квадрат',
            data: familySquare,
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Цвет заливки
            borderColor: 'rgba(54, 162, 235, 1)', // Цвет линии
            borderWidth: 1, // Толщина линии
          },
        ],
      },
      options: {
        scales: {
          r: {
            min: 1,
            max: 22,
            angleLines: {
              color: 'red',
            },
          },
        },
      },
    });

    // Обновляем данные графика
    myChart.data.datasets[0].data = personalSquare;
    myChart.data.datasets[1].data = familySquare;
    myChart.update();
  }
</script>

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
<div>
  {#await Translate('Ввод и редактирование данных матрицы', lang) then data}
    <label for="birthDateInput">{data}: </label>
  {/await}

  <input
    type="text"
    id="birthDateInput"
    bind:value={birthDate}
    pattern="\d{2}\.\d{2}\.\d{4}"
    placeholder="dd.mm.yyyy"
  />
  {#await Translate('Рассчитать квадраты', lang) then data}
  <button on:click={calculateSquare}>{data}</button>
  {/await}

  <!-- <canvas id="squareChart" width="400" height="400"></canvas> -->
</div>

<div class="container">
  <Diagrama data={params}></Diagrama>

  <!-- Создаем элемент canvas для отображения диаграммы -->
  <canvas bind:this={myChart}></canvas>
  <!-- Вставляем изображение как фоновое -->
  <!-- <img
    src="./src/routes/assets/scale_1200.jpeg"
    alt="Изображение"
    class="image"
  /> -->
</div>

<style>
  .container {
    position: relative;
    width: 500px; /* Укажите желаемую ширину изображения */
    height: 500px; /* Укажите желаемую высоту изображения */
  }

   .lang_span {
    position: absolute;
    right: 20px;
    font-size: smaller;
  }
  .lang_list {
    position: absolute;
    top: 50px;
    right: 30px;
    height: 80vh;
    overflow: auto;
    justify-content: center; /* Выравниваем содержимое по центру вертикально */
    align-items: center; /* Выравниваем содержимое по центру горизонтально */
    background-color: whitesmoke;
  }

  canvas {
    /* display: none; */
    position: absolute;
    top: 80vh;
    left: 0;
    z-index: 1;
  }
</style>
