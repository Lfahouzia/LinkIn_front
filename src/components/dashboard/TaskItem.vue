<template>
    <div class="flex items-center p-3 rounded-lg hover:bg-amber-50 transition-colors">
      <div class="flex-shrink-0 mr-3">
        <button 
          @click="$emit('toggle-complete')" 
          class="h-5 w-5 rounded-full border flex items-center justify-center focus:outline-none"
          :class="[
            task.completed 
              ? 'bg-terracotta-600 border-terracotta-600' 
              : 'border-gray-300 hover:border-terracotta-600'
          ]"
        >
          <CheckIcon v-if="task.completed" class="h-3 w-3 text-white" />
        </button>
      </div>
      
      <div class="flex-1 min-w-0">
        <p class="text-sm" :class="task.completed ? 'text-gray-500 line-through' : 'text-gray-800'">
          {{ task.title }}
        </p>
        <div class="flex items-center mt-1">
          <CalendarIcon class="h-3 w-3 text-gray-500 mr-1" />
          <span class="text-xs text-gray-500">{{ formatDate(task.date) }}</span>
          <ClockIcon class="h-3 w-3 text-gray-500 ml-2 mr-1" />
          <span class="text-xs text-gray-500">{{ task.time }}</span>
        </div>
      </div>
      
      <div class="flex-shrink-0 ml-3">
        <span 
          class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium"
          :class="priorityClass"
        >
          {{ priorityLabel }}
        </span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { CheckIcon, CalendarIcon, ClockIcon } from '@heroicons/vue/solid';
  
  const props = defineProps({
    task: {
      type: Object,
      required: true
    }
  });
  
  const emit = defineEmits(['toggle-complete']);
  
  const { t, d } = useI18n();
  
  const priorityClass = computed(() => {
    let priorityClassName = 'bg-amber-100 text-amber-800';
  
    if (props.task.priority === 'high') {
      priorityClassName = 'bg-red-100 text-red-800';
    } else if (props.task.priority === 'low') {
      priorityClassName = 'bg-green-100 text-green-800';
    }
    
    return priorityClassName;
  });
  
  const priorityLabel = computed(() => {
    return t(`dashboard.priority.${props.task.priority}`);
  });
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return d(date, 'short');
  };
  </script>