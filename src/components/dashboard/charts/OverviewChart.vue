<template>
    <div>
      <canvas ref="chartRef"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import Chart from 'chart.js/auto';
  
  const props = defineProps({
    data: {
      type: Object,
      required: true
    }
  });
  
  const chartRef = ref(null);
  let chart = null;
  
  const createChart = () => {
    if (chart) {
      chart.destroy();
    }
    
    const ctx = chartRef.value.getContext('2d');
    chart = new Chart(ctx, {
      type: 'bar',
      data: props.data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            mode: 'index',
            intersect: false,
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              drawBorder: false,
            }
          },
          x: {
            grid: {
              display: false,
            }
          }
        }
      }
    });
  };
  
  onMounted(() => {
    createChart();
  });
  
  watch(() => props.data, () => {
    createChart();
  }, { deep: true });
  </script>