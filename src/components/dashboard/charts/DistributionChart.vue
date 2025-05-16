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
      type: 'doughnut',
      data: props.data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
          },
          tooltip: {
            mode: 'index',
            intersect: false,
          }
        },
        cutout: '60%'
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