<template>
  <div class="min-h-screen flex flex-col font-sans bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
    <header class="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <!-- Logo or Title could go here -->
          <span class="font-bold text-xl bg-gradient-to-r from-primary-500 to-green-400 bg-clip-text text-transparent">Meme Slicer</span>
        </div>
        
        <div class="flex items-center gap-2">
          <ThemeToggle />
          <GithubLink />
        </div>
      </div>
    </header>

    <main class="flex-1">
      <MemeSlicer />
    </main>
    
    <footer class="py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <p>© {{ new Date().getFullYear() }} Meme Slicer. Open Source Project.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import ThemeToggle from './components/ThemeToggle.vue';
import GithubLink from './components/GithubLink.vue';
import MemeSlicer from './components/MemeSlicer.vue';
</script>
