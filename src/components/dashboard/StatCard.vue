<template>
    <div class="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-105">
      <div class="flex justify-between">
        <div>
          <p class="text-sm font-medium text-gray-500">{{ title }}</p>
          <p class="text-2xl font-bold mt-1" :class="textColorClass">{{ value }}</p>
          
          <div v-if="change" class="flex items-center mt-2">
            <span 
              class="text-xs font-medium flex items-center"
              :class="changeType === 'positive' ? 'text-green-600' : 'text-red-600'"
            >
              <ArrowUpIcon v-if="changeType === 'positive'" class="h-3 w-3 mr-1" />
              <ArrowDownIcon v-else class="h-3 w-3 mr-1" />
              {{ change }}
            </span>
            <span class="text-xs text-gray-500 ml-1">vs last month</span>
          </div>
        </div>
        
        <div :class="bgColorClass" class="h-12 w-12 rounded-lg flex items-center justify-center">
          <component :is="icon" class="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/vue/solid';
  
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    icon: {
      type: Object,
      required: true
    },
    color: {
      type: String,
      default: 'terracotta',
      validator: (value) => ['terracotta', 'amber', 'green', 'blue', 'purple'].includes(value)
    },
    change: {
      type: String,
      default: null
    },
    changeType: {
      type: String,
      default: 'positive',
      validator: (value) => ['positive', 'negative'].includes(value)
    }
  });
  
  const colorMap = {
    terracotta: {
      bg: 'bg-terracotta-600',
      text: 'text-terracotta-600'
    },
    amber: {
      bg: 'bg-amber-600',
      text: 'text-amber-600'
    },
    green: {
      bg: 'bg-green-600',
      text: 'text-green-600'
    },
    blue: {
      bg: 'bg-blue-600',
      text: 'text-blue-600'
    },
    purple: {
      bg: 'bg-purple-600',
      text: 'text-purple-600'
    }
  };
  
  const bgColorClass = computed(() => colorMap[props.color].bg);
  const textColorClass = computed(() => colorMap[props.color].text);
  </script>