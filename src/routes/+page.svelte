<script lang="ts">
  import { onMount } from 'svelte';
  import MaskInput from 'svelte-input-mask/MaskInput.svelte';
  let maskString = 'DD.MM.YYYY';
  let mask = '00.00.0000';

  import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust,
  } from '@smui/top-app-bar';
  import Chart from 'chart.js/auto';
  import ISO6391 from 'iso-google-locales';
  import langs_list from '$lib/lang_list.json';
  import '$lib/bootstrap.min.css';
  import '$lib/style-new.css';

  import Diagrama from './Diagrama2.svelte';

  let lang = 'ru';
  let lang_menu = false;
  let topAppBar;

  let params = {
    B: '',
    B1: '',
    B2: '',
    B3: '',
    E: '',
    E1: '',
    E2: '',
    F: '',
    F1: '',
    F2: '',
    A: '',
    A1: '',
    A2: '',
    A3: '',
    C: '',
    C1: '',
    C2: '',
    Y: '',
    H: '',
    H1: '',
    H2: '',
    G: '',
    G1: '',
    G2: '',
    G4: '',
    L: '',
    M: '',
    D: '',
    D1: '',
    D2: '',
    X: '',
  };

  let value =  '';
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

      params.A = firstPoint;

      // Расчет второй точки (верхняя)
      let secondPoint = month;
      params.B = secondPoint;

      personalPoints.push(secondPoint);

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
      params.C = thirdPoint;

      // Расчет четвертой точки (нижняя)
      let fourthPoint = ПривестиК(firstPoint + secondPoint + thirdPoint);

      personalPoints.push(fourthPoint);
      params.D = fourthPoint;

      // Расчет пятой точки (центр)
      let fifthPoint = ПривестиК(
        thirdPoint + firstPoint + secondPoint + fourthPoint
      );

      // personalPoints.push(fifthPoint);
      params.X = fifthPoint;

      params.H2 = ПривестиК(params.A + params.D);

      return personalPoints;
    }

    // Функция для расчета родового квадрата
    function calculateFamilySquare(personalSquare) {
      let familyPoints = [];

      // Расчет верхней левой точки (род папы)
      familyPoints.push(personalSquare[0] + personalSquare[1]);

      params.E = ПривестиК(params.A + params.B);

      // Расчет верхней правой точки (род мамы)

      params.F = ПривестиК(params.B + params.C);
      familyPoints.push(params.F);

      params.B2 = ПривестиК(params.B + params.X);

      params.B1 = ПривестиК(params.B + params.B2);

      // Расчет нижней правой точки (род папы)

      params.G = ПривестиК(params.C + params.D);

      familyPoints.push(params.E);

      params.C2 = ПривестиК(params.C + params.X);

      params.H = ПривестиК(params.D + params.A);

      params.Y = ПривестиК(params.E + params.F + params.G + params.H);

      params.C1 = ПривестиК(params.C + params.C2);

      params.E2 = ПривестиК(params.E + params.Y);

      params.E1 = ПривестиК(params.E + params.E2);

      params.D2 = ПривестиК(params.D + params.X);

      params.A2 = ПривестиК(params.A + params.X);

      params.A1 = ПривестиК(params.A + params.A2);

      params.D1 = ПривестиК(params.D + params.D2);

      params.H2 = ПривестиК(params.H + params.Y);

      params.H1 = ПривестиК(params.H + params.H2);

      params.A3 = ПривестиК(params.X + params.A2);

      params.B3 = ПривестиК(params.X + params.B2);

      params.G2 = ПривестиК(params.G + params.Y);

      params.G4 = ПривестиК(params.C2 + params.D2);

      params.G1 = ПривестиК(params.G2 + params.G);

      params.M = ПривестиК(params.G4 + params.C2);

      params.L = ПривестиК(params.G4 + params.D2);

      params.F2 = ПривестиК(params.F + params.Y);

      params.F1 = ПривестиК(params.F + params.F2);

      return familyPoints;
    }

    // Проверка наличия даты рождения
    
    let birthDate = value;

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

  const handleChange = ({ detail }) => {
    value = detail.inputState.maskedValue;
    if (parseInt(value[6], 10) > 2) {
      maskString = 'DD.MM.YY';
      mask = '00.00.00';
    } else {
      maskString = 'DD.MM.YYYY';
      mask = '00.00.0000';
    }
  };
</script>

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
  <div class="flexor-content">flexor-content</div>
</div>

<main>
  <div>
    {#await Translate('Ввод и редактирование данных матрицы', lang) then data}
      <label for="birthDateInput">{data}: </label>
    {/await}

    <MaskInput  id="birthDateInput" alwaysShowMask {maskString} {mask} on:change={handleChange} />


    {#await Translate('Рассчитать квадраты', lang) then data}
      <button on:click={calculateSquare}>{data}</button>
    {/await}

    <!-- <canvas id="squareChart" width="400" height="400"></canvas> -->
  </div>

  <Diagrama data={params}></Diagrama>

  <div class="container">
    <div class="first-screen-content">
      {#await Translate(`Матрица Судьбы`, lang) then data}
        <h1>{data}</h1>
      {/await}
      <h2>
        {#await Translate(`Глубокая расшифровка вашей личности`, lang) then data}
          <span style="color: #707070">{data}</span>
        {/await}
      </h2>
      <p>
        <span style="color: #707070">
          {#await Translate(`Рассчитайте бесплатно`, lang) then data}
            <strong>{data}</strong>
          {/await}
          {#await Translate(`вашу матрицу судьбы, прямо сейчас,
        чтобы узнать себя на 100%`, lang) then data}
            {data}
          {/await}
        </span>
      </p>

      <div class="inputs">
        {#await Translate(`Введите ваше имя*`, lang) then data}
          <input
            id="name"
            type="text"
            placeholder={data}
            class="inputs-header"
          />
        {/await}
        {#await Translate(`Введите дату рождения*`, lang) then data}
          <input
            id="date"
            type="text"
            placeholder={data}
            class="inputs-header inputs-header-date"
          />
        {/await}
        <div class="inputs-gender">
          <span id="woman" class="inputs-gender-woman active-gender">Ж</span>
          <span id="man" class="inputs-gender-man">М</span>
        </div>
      </div>
      {#await Translate(`Рассчитать мою матрицу`, lang) then data}
        <a
          href="https://humanmatrix.ru/calculator"
          id="calculate_button"
          style="cursor: pointer"
          class="btn-count"
          >{data}
        </a>
      {/await}
    </div>

    <div class="container-big">
      <div class="matrica-destiny-content">
        <div class="matrica-destiny-text">
          {#await Translate(`
        Что такое матрица судьбы?`, lang) then data}
            <h2>{data}</h2>
          {/await}
          {#await Translate(`
               Это система для персонального расчёта всех важных аспектов жизни,
          основанная на дате вашего рождения. Это самое простое и быстрое
          решение, если вам нужны точные ответы здесь и сейчас.`, lang) then data}
            <p class="p-strong">{data}</p>
          {/await}
          {#await Translate(`
          Результаты расшифровок нашего калькулятора, дают не только подробное
          описание ваших качеств, но и откроют «слепые зоны» и врожденные
          программы, развивая которые, Вы перейдёте на новый уровень во всех
          сферах жизни.`, lang) then data}
            <p>{data}</p>
          {/await}
          {#await Translate(`
          Благодаря комбинации из тысяч расшифровок в нашем сервисе, Вы
          моментально получите свой глубокий разбор личности, даже без помощи
          нумеролога.`, lang) then data}
            <p>{data}</p>
          {/await}
        </div>
        <!-- <img
        data-aos="flip-down"
        src="https://humanmatrix.ru/wp-content/themes/matrix_new/img/matrica-destiny.svg"
        alt="matrica"
        class="matrica-img aos-init aos-animate"
      /> -->
      </div>
    </div>

    <!-- Создаем элемент canvas для отображения диаграммы -->
    <!-- <canvas bind:this={myChart}></canvas> -->
  </div>
</main>

<style>
  main {
    position: relative;
    top: 30px;
  }
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
    height: 75vh;
    overflow: auto;
    justify-content: center; /* Выравниваем содержимое по центру вертикально */
    align-items: center; /* Выравниваем содержимое по центру горизонтально */
    background-color: whitesmoke;
    z-index: 2;
  }

  canvas {
    display: none;
    position: relative;
    top: 80vh;
    left: 0;
    z-index: 1;
  }
</style>
