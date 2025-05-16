<template>
    <div>
      <!-- Cartes de statistiques -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          v-for="(stat, index) in stats" 
          :key="index" 
          :title="$t(stat.title)" 
          :value="stat.value" 
          :icon="stat.icon" 
          :color="stat.color"
          :change="stat.change"
          :change-type="stat.changeType"
        />
      </div>
      
      <!-- Graphiques -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div class="bg-white rounded-xl shadow-md p-6">
          <h2 class="text-lg font-bold text-gray-800 mb-4">{{ $t('dashboard.charts.activity') }}</h2>
          <ActivityChart :data="activityData" />
        </div>
        
        <div class="bg-white rounded-xl shadow-md p-6">
          <h2 class="text-lg font-bold text-gray-800 mb-4">{{ $t('dashboard.charts.progress') }}</h2>
          <ProgressChart :data="progressData" />
        </div>
      </div>
      
      <!-- Activités récentes et tâches -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="bg-white rounded-xl shadow-md p-6">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-bold text-gray-800">{{ $t('dashboard.recent.activities') }}</h2>
            <button class="text-sm text-terracotta-600 hover:text-terracotta-700">{{ $t('dashboard.actions.viewAll') }}</button>
          </div>
          <div class="space-y-4">
            <ActivityItem 
              v-for="(activity, index) in recentActivities" 
              :key="index" 
              :activity="activity" 
            />
          </div>
        </div>
        
        <div class="bg-white rounded-xl shadow-md p-6">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-bold text-gray-800">{{ $t('dashboard.upcoming.tasks') }}</h2>
            <button class="text-sm text-terracotta-600 hover:text-terracotta-700">{{ $t('dashboard.actions.viewAll') }}</button>
          </div>
          <div class="space-y-2">
            <TaskItem 
              v-for="(task, index) in upcomingTasks" 
              :key="index" 
              :task="task" 
              @toggle-complete="toggleTaskComplete(index)"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { 
    CurrencyDollarIcon, UsersIcon, LightBulbIcon, ChatAltIcon
  } from '@heroicons/vue/outline';
  import StatCard from '@/components/dashboard/StatCard.vue';
  import ActivityChart from '@/components/dashboard/charts/ActivityChart.vue';
  import ProgressChart from '@/components/dashboard/charts/ProgressChart.vue';
  import ActivityItem from '@/components/dashboard/ActivityItem.vue';
  import TaskItem from '@/components/dashboard/TaskItem.vue';
  
  const { t } = useI18n();
  
  // Statistiques
  const stats = [
    { 
      title: 'dashboard.stats.projects', 
      value: 12, 
      icon: LightBulbIcon, 
      color: 'terracotta',
      change: '+2',
      changeType: 'positive'
    },
    { 
      title: 'dashboard.stats.connections', 
      value: 48, 
      icon: UsersIcon, 
      color: 'amber',
      change: '+5',
      changeType: 'positive'
    },
    { 
      title: 'dashboard.stats.messages', 
      value: 24, 
      icon: ChatAltIcon, 
      color: 'green',
      change: '+12',
      changeType: 'positive'
    },
    { 
      title: 'dashboard.stats.investments', 
      value: '15K €', 
      icon: CurrencyDollarIcon, 
      color: 'blue',
      change: '-3%',
      changeType: 'negative'
    }
  ];
  
  // Données pour le graphique d'activité
  const activityData = ref({
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil'],
    datasets: [
      {
        label: t('dashboard.charts.visitors'),
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(217, 119, 6, 0.2)',
        borderColor: 'rgba(217, 119, 6, 1)',
        borderWidth: 2,
        tension: 0.4
      },
      {
        label: t('dashboard.charts.connections'),
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: 'rgba(193, 88, 62, 0.2)',
        borderColor: 'rgba(193, 88, 62, 1)',
        borderWidth: 2,
        tension: 0.4
      }
    ]
  });
  
  // Données pour le graphique de progression
  const progressData = ref({
    labels: [t('dashboard.charts.funding'), t('dashboard.charts.mentoring'), t('dashboard.charts.networking'), t('dashboard.charts.growth')],
    datasets: [
      {
        label: t('dashboard.charts.progress'),
        data: [65, 75, 90, 80],
        backgroundColor: [
          'rgba(217, 119, 6, 0.6)',
          'rgba(193, 88, 62, 0.6)',
          'rgba(16, 185, 129, 0.6)',
          'rgba(59, 130, 246, 0.6)'
        ],
        borderWidth: 0
      }
    ]
  });
  
  // Activités récentes
  const recentActivities = ref([
    {
      type: 'message',
      user: {
        name: 'Fatou Ndiaye',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
      },
      content: t('dashboard.activities.message'),
      time: '2h'
    },
    {
      type: 'connection',
      user: {
        name: 'Ibrahim Sow',
        avatar: 'https://randomuser.me/api/portraits/men/46.jpg'
      },
      content: t('dashboard.activities.connection'),
      time: '5h'
    },
    {
      type: 'investment',
      user: {
        name: 'Kofi Mensah',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
      },
      content: t('dashboard.activities.investment', { amount: '5000 €' }),
      time: '1d'
    },
    {
      type: 'project',
      content: t('dashboard.activities.project', { project: 'EcoFarm Sénégal' }),
      time: '2d'
    }
  ]);
  
  // Tâches à venir
  const upcomingTasks = ref([
    {
      title: t('dashboard.tasks.meeting', { name: 'Fatou Ndiaye' }),
      date: '2023-07-15',
      time: '14:00',
      completed: false,
      priority: 'high'
    },
    {
      title: t('dashboard.tasks.update'),
      date: '2023-07-16',
      time: '10:00',
      completed: false,
      priority: 'medium'
    },
    {
      title: t('dashboard.tasks.presentation'),
      date: '2023-07-18',
      time: '09:30',
      completed: false,
      priority: 'high'
    },
    {
      title: t('dashboard.tasks.report'),
      date: '2023-07-20',
      time: '18:00',
      completed: false,
      priority: 'low'
    }
  ]);
  
  // Marquer une tâche comme complétée
  const toggleTaskComplete = (index) => {
    upcomingTasks.value[index].completed = !upcomingTasks.value[index].completed;
  };
  
  onMounted(() => {
    // Ici, vous pourriez charger des données depuis une API
  });
  </script>