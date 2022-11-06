<template>
  <canvas id="myChart" class="bar-chart" width="100" height="100"></canvas>
</template>
<script>
import { Chart, registerables } from 'chart.js';
export default {
  mounted() {
    const ctx = document.getElementById('myChart');
    Chart.register(...registerables);
    const config = {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [10, 9, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        indexAxis: 'y',
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
    const myChart = new Chart(ctx, config);
  }
};
// export default {
//   mounted() {
//     const ctx = document.getElementById('myChart');

//     const DATA_COUNT = 5;
//     const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

//     const labels = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];
//     const data = {
//       labels: labels,
//       datasets: [
//         {
//           label: 'Dataset 1',
//           data: Utils.numbers(NUMBER_CFG),
//           backgroundColor: [
//             '#4dad78',
//             '#4dad78',
//             '#4dad78',
//             '#4dad78',
//             '#4dad78'
//           ]
//         }
//       ]
//     };
//     const config = {
//       type: 'polarArea',
//       data: data,
//       options: {
//         responsive: true,
//         plugins: {
//           legend: {
//             position: 'top'
//           },
//           title: {
//             display: true,
//             text: 'Chart.js Polar Area Chart'
//           }
//         }
//       }
//     };

//     new Chart(ctx, config);
//     Chart.register(...registerables);
//   }
// };
</script>
<style>
.bar-chart {
  width: 50;
  height: 50;
}
</style>
