<script lang="ts">
  import { onMount } from 'svelte';
  import { Chart } from 'chart.js/auto'; // Импортируем Chart.js

  let myChart: any;

  // Динамические данные для диаграммы
  let chartData = {
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
        label: 'Цифровые значения',
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Цвет заливки
        borderColor: 'rgba(255, 99, 132, 1)', // Цвет линии
        borderWidth: 1, // Толщина линии
        data: [14, 18, 5, 11, 21, 6, 5, 21], // Динамические цифровые значения
      },
    ],
  };

  onMount(() => {
    // Получаем ссылку на элемент canvas
    const ctx = myChart.getContext('2d');

    // Создаем новый экземпляр диаграммы
    myChart = new Chart(ctx, {
      type: 'radar',
      data: chartData,
      options: {
        scales: {
          r: {
            angleLines: {
              color: 'red',
            },
          },
        },
      },
    });
  });
</script>

<!-- Используем Svelte для отображения диаграммы и изображения -->
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

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
