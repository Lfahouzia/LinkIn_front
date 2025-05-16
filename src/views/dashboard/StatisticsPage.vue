<template>
    <div>
      <!-- Filtres -->
      <div class="bg-white rounded-xl shadow-md p-6 mb-8">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <h2 class="text-lg font-bold text-gray-800">{{ $t('dashboard.statistics.filters') }}</h2>
          
          <div class="flex flex-wrap gap-4">
            <div class="relative">
              <select 
                v-model="selectedPeriod" 
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500"
              >
                <option v-for="period in periods" :key="period.value" :value="period.value">
                  {{ $t(period.label) }}
                </option>
              </select>
            </div>
            
            <div class="relative">
              <select 
                v-model="selectedCategory" 
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-terracotta-500 focus:border-terracotta-500"
              >
                <option v-for="category in categories" :key="category.value" :value="category.value">
                  {{ $t(category.label) }}
                </option>
              </select>
            </div>
            
            <button 
              class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-terracotta-600 hover:bg-terracotta-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta-500"
            >
              {{ $t('dashboard.actions.apply') }}
            </button>
          </div>
        </div>
      </div>
      
      <!-- Graphiques principaux -->
      <div class="grid grid-cols-1 gap-8 mb-8">
        <div class="bg-white rounded-xl shadow-md p-6">
          <h2 class="text-lg font-bold text-gray-800 mb-4">{{ $t('dashboard.statistics.overview') }}</h2>
          <div class="h-80">
            <OverviewChart :data="overviewData" />
          </div>
        </div>
      </div>
      
      <!-- Graphiques secondaires -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div class="bg-white rounded-xl shadow-md p-6">
          <h2 class="text-lg font-bold text-gray-800 mb-4">{{ $t('dashboard.statistics.distribution') }}</h2>
          <div class="h-64">
            <DistributionChart :data="distributionData" />
          </div>
        </div>
        
        <div class="bg-white rounded-xl shadow-md p-6">
          <h2 class="text-lg font-bold text-gray-800 mb-4">{{ $t('dashboard.statistics.growth') }}</h2>
          <div class="h-64">
            <GrowthChart :data="growthData" />
          </div>
        </div>
      </div>
      
      <!-- Tableau de données -->
      <div class="bg-white rounded-xl shadow-md p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-bold text-gray-800">{{ $t('dashboard.statistics.details') }}</h2>
          <button class="text-sm text-terracotta-600 hover:text-terracotta-700">
            {{ $t('dashboard.actions.export') }}
          </button>
        </div>
        
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th v-for="header in tableHeaders" :key="header.key" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {{ $t(header.label) }}
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(row, index) in tableData" :key="index">
                <td v-for="header in tableHeaders" :key="`${index}-${header.key}`" class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ row[header.key] }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';
  import OverviewChart from '@/components/dashboard/charts/OverviewChart.vue';
  import DistributionChart from '@/components/dashboard/charts/DistributionChart.vue';
  import GrowthChart from '@/components/dashboard/charts/GrowthChart.vue';
  
  const { t } = useI18n();
  
  // Filtres
  const selectedPeriod = ref('month');
  const selectedCategory = ref('all');
  
  const periods = [
    { value: 'week', label: 'dashboard.period.week' },
    { value: 'month', label: 'dashboard.period.month' },
    { value: 'quarter', label: 'dashboard.period.quarter' },
    { value: 'year', label: 'dashboard.period.year' }
  ];
  
  const categories = [
    { value: 'all', label: 'dashboard.category.all' },
    { value: 'projects', label: 'dashboard.category.projects' },
    { value: 'investments', label: 'dashboard.category.investments' },
    { value: 'connections', label: 'dashboard.category.connections' }
  ];
  
  // Données pour le graphique d'aperçu
  const overviewData = ref({
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'],
    datasets: [
      {
        label: t('dashboard.statistics.projects'),
        data: [12, 19, 13, 15, 22, 27, 30, 25, 18, 15, 22, 28],
        backgroundColor: 'rgba(193, 88, 62, 0.2)',
        borderColor: 'rgba(193, 88, 62, 1)',
        borderWidth: 2
      },
      {
        label: t('dashboard.statistics.investments'),
        data: [5, 10, 8, 15, 18, 20, 25, 30, 25, 20, 15, 10],
        backgroundColor: 'rgba(217, 119, 6, 0.2)',
        borderColor: 'rgba(217, 119, 6, 1)',
        borderWidth: 2
      }
    ]
  });
  
  // Données pour le graphique de distribution
  const distributionData = ref({
    labels: ['Agriculture', 'Technologie', 'Éducation', 'Santé', 'Énergie', 'Finance'],
    datasets: [
      {
        label: t('dashboard.statistics.distribution'),
        data: [30, 25, 15, 10, 10, 10],
        backgroundColor: [
          'rgba(193, 88, 62, 0.6)',
          'rgba(217, 119, 6, 0.6)',
          'rgba(16, 185, 129, 0.6)',
          'rgba(59, 130, 246, 0.6)',
          'rgba(139, 92, 246, 0.6)',
          'rgba(236, 72, 153, 0.6)'
        ],
        borderWidth: 0
      }
    ]
  });
  
  // Données pour le graphique de croissance
  const growthData = ref({
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [
      {
        label: t('dashboard.statistics.growth'),
        data: [10, 15, 20, 25, 30, 35],
        backgroundColor: 'rgba(193, 88, 62, 0.2)',
        borderColor: 'rgba(193, 88, 62, 1)',
        borderWidth: 2,
        fill: true
      }
    ]
  });
  
  // En-têtes du tableau
  const tableHeaders = [
    { key: 'date', label: 'dashboard.table.date' },
    { key: 'project', label: 'dashboard.table.project' },
    { key: 'category', label: 'dashboard.table.category' },
    { key: 'views', label: 'dashboard.table.views' },
    { key: 'connections', label: 'dashboard.table.connections' },
    { key: 'investments', label: 'dashboard.table.investments' }
  ];
  
  // Données du tableau
  const tableData = ref([
    {
      date: '2023-07-01',
      project: 'EcoFarm Sénégal',
      category: 'Agriculture',
      views: 245,
      connections: 18,
      investments: '5 000 €'
    },
    {
      date: '2023-07-05',
      project: 'SolarTech Kenya',
      category: 'Énergie',
      views: 189,
      connections: 12,
      investments: '3 500 €'
    },
    {
      date: '2023-07-10',
      project: 'HealthConnect Nigeria',
      category: 'Santé',
      views: 320,
      connections: 24,
      investments: '7 200 €'
    },
    {
      date: '2023-07-15',
      project: 'EduTech Ghana',
      category: 'Éducation',
      views: 178,
      connections: 9,
      investments: '2 800 €'
    },
    {
      date: '2023-07-20',
      project: 'FinAccess Tanzania',
      category: 'Finance',
      views: 210,
      connections: 15,
      investments: '4 500 €'
    }
  ]);
  
  const isMounted = ref(false);
  
  onMounted(() => {
    isMounted.value = true;
    // Ici, vous pourriez charger des données depuis une API
  });
  </script>