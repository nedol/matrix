<script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';

  import Diagrama from './Diagrama2.svelte';

  let birthDate = '24.02.1982';
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

      // Расчет второй точки (верхняя)
      let secondPoint = month;

      personalPoints.push(secondPoint);

      // Расчет третьей точки (правая)
      let thirdPoint = 0;
      year
        .toString()
        .split('')
        .forEach((digit) => {
          thirdPoint += parseInt(digit);
        });
      if (thirdPoint > 22) {
        thirdPoint = (thirdPoint % 10) + Math.floor(thirdPoint / 10);
      }
      personalPoints.push(thirdPoint);

      // Расчет четвертой точки (нижняя)
      let fourthPoint = firstPoint + secondPoint + thirdPoint;
      if (fourthPoint > 22) {
        fourthPoint = (fourthPoint % 10) + Math.floor(fourthPoint / 10);
      }
      personalPoints.push(fourthPoint);

      // Расчет пятой точки (центр)
      let fifthPoint = firstPoint + secondPoint + thirdPoint + fourthPoint;
      if (fifthPoint > 22) {
        fifthPoint = (fifthPoint % 10) + Math.floor(fifthPoint / 10);
      }
      // personalPoints.push(fifthPoint);

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
      familyPoints.push(
        personalSquare[2] + personalSquare[3] > 22
          ? (personalSquare[2] + personalSquare[3]) / 10 +
              ((personalSquare[2] + personalSquare[3]) % 10)
          : personalSquare[2] + personalSquare[3]
      );

      // Расчет нижней левой точки (род мамы)
      familyPoints.push(
        personalSquare[3] + personalSquare[0] > 22
          ? (personalSquare[3] + personalSquare[0]) / 10 +
              ((personalSquare[3] + personalSquare[0]) % 10)
          : personalSquare[3] + personalSquare[0]
      );

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
      console.error('Введите дату рождения');
    }
  }

  // Функция для отрисовки квадратов с использованием Chart.js
  function drawSquare(personalSquare, familySquare) {
    const ctx = myChart.getContext('2d');

    myChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: [
          // '20 лет',
          // '30 лет',
          // '40 лет',
          // '50 лет',
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

<div>
  <label for="birthDateInput">Введите дату рождения (ДД.ММ.ГГГГ): </label>
  <input type="text" id="birthDateInput" bind:value={birthDate} />

  <button on:click={calculateSquare}>Рассчитать квадраты</button>

  <!-- <canvas id="squareChart" width="400" height="400"></canvas> -->
</div>

<div class="container">
  <!-- Создаем элемент canvas для отображения диаграммы -->
  <canvas bind:this={myChart}></canvas>
  <!-- Вставляем изображение как фоновое -->
  <!-- <img
    src="./src/routes/assets/scale_1200.jpeg"
    alt="Изображение"
    class="image"
  /> -->
</div>

<!-- <img src="../../src/assets/flouwer.svg" alt="" /> -->

<Diagrama></Diagrama>

<style>
  .container {
    position: relative;
    width: 500px; /* Укажите желаемую ширину изображения */
    height: 500px; /* Укажите желаемую высоту изображения */
  }

  canvas {
    /* display: none; */
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
</style>
