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
        labels: ['KNOWLEDGE', 'SKILLS', 'ABILITIES', 'INTERESTS'],
        datasets: [
          {
            label: '# of Votes',
            data: [10, 9, 3, 5],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
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
</script>
<style>
.bar-chart {
  width: 50;
  height: 50;
}
</style>
