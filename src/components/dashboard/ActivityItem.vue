<template>
    <div class="flex items-start space-x-3 p-3 rounded-lg hover:bg-amber-50 transition-colors">
      <div v-if="activity.user" class="flex-shrink-0">
        <img :src="activity.user.avatar" :alt="activity.user.name" class="h-10 w-10 rounded-full object-cover" />
      </div>
      <div v-else class="flex-shrink-0">
        <div class="h-10 w-10 rounded-full bg-terracotta-100 flex items-center justify-center">
          <component :is="activityIcon" class="h-5 w-5 text-terracotta-600" />
        </div>
      </div>
      
      <div class="flex-1 min-w-0">
        <p class="text-sm text-gray-800">
          <span v-if="activity.user" class="font-medium">{{ activity.user.name }}</span>
          {{ activity.content }}
        </p>
        <p class="text-xs text-gray-500 mt-1">{{ activity.time }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { 
    ChatAltIcon, UserAddIcon, CurrencyDollarIcon, LightBulbIcon
  } from '@heroicons/vue/outline';
  
  const props = defineProps({
    activity: {
      type: Object,
      required: true
    }
  });
  
  const activityIcon = computed(() => {
    const iconMap = {
      message: ChatAltIcon,
      connection: UserAddIcon,
      investment: CurrencyDollarIcon,
      project: LightBulbIcon
    };
    
    return iconMap[props.activity.type] || ChatAltIcon;
  });
  </script>