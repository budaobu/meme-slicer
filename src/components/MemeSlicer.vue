<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
    <div class="text-center mb-12">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-3 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-primary-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
        </svg>
        表情包切片工具
      </h1>
      <p class="text-gray-600 dark:text-gray-400">
        上传表情包合集大图，自动按网格裁剪打包，支持 GIF 合成。
        <span class="block text-xs mt-2 opacity-75">本地安全处理，图片不会上传至服务器</span>
      </p>
    </div>

    <!-- Main Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      
      <!-- Settings Panel -->
      <div class="lg:col-span-4 flex flex-col">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md h-full flex flex-col border border-gray-200 dark:border-gray-700">
          <div class="p-6 pb-4 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
            网格与裁剪设置
          </div>

          <div class="p-6 flex-1 space-y-5">
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-1">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">列数 (宽)</label>
                <div class="relative">
                  <input 
                    v-model.number="settings.cols" 
                    type="number" 
                    min="1" 
                    class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6 dark:bg-gray-700 dark:text-white dark:ring-gray-600 dark:focus:ring-primary-500"
                  />
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                     <span class="text-gray-500 sm:text-sm">Cols</span>
                  </div>
                </div>
              </div>
              <div class="space-y-1">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">行数 (高)</label>
                <div class="relative">
                  <input 
                    v-model.number="settings.rows" 
                    type="number" 
                    min="1" 
                    class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6 dark:bg-gray-700 dark:text-white dark:ring-gray-600 dark:focus:ring-primary-500"
                  />
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                     <span class="text-gray-500 sm:text-sm">Rows</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-700">
              <div class="flex justify-between items-center mb-4">
                <label class="text-sm font-medium text-gray-700 dark:text-gray-200">去除边框 (Padding)</label>
                <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-400/10 dark:text-green-400 dark:ring-green-400/30">{{ settings.padding }}px</span>
              </div>
              
              <input 
                type="range"
                v-model.number="settings.padding" 
                min="0" 
                max="60" 
                step="1"
                class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-primary-500"
              />
              
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
                增加数值以向内裁剪，避开原本的分割线。
              </p>
            </div>

            <div class="space-y-1">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">文件名前缀</label>
              <div class="relative rounded-md shadow-sm">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                   <span class="text-gray-500 sm:text-sm">#</span>
                </div>
                <input 
                  v-model="settings.prefix" 
                  type="text"
                  placeholder="例如: emoji" 
                  class="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6 dark:bg-gray-700 dark:text-white dark:ring-gray-600 dark:focus:ring-primary-500"
                />
              </div>
            </div>
          </div>

          <div class="mt-auto p-6 pt-0 space-y-3">
            <button 
              class="w-full flex justify-center items-center gap-2 rounded-md bg-green-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              :disabled="!hasImage || processing"
              @click="processAndZip"
            >
              <svg v-if="processing && processType === 'zip'" class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3.251l4.135 4.135m0-4.135l-4.135 4.135M3 3h3v2.25" />
              </svg>
              {{ zipButtonLabel }}
            </button>

            <div class="relative py-2">
              <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-200 dark:border-gray-700"></div></div>
              <div class="relative flex justify-center"><span class="bg-white dark:bg-gray-800 px-3 text-xs text-gray-400">或生成动图</span></div>
            </div>

            <div class="flex gap-2">
              <input 
                v-model.number="settings.gifDelay" 
                type="number" 
                min="10" 
                step="10" 
                class="block w-24 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6 dark:bg-gray-700 dark:text-white dark:ring-gray-600 dark:focus:ring-primary-500"
                placeholder="ms"
              />
              <button 
                class="flex-1 flex justify-center items-center gap-2 rounded-md bg-purple-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                :disabled="!hasImage || processing"
                @click="processAndGif"
              >
                  <svg v-if="processing && processType === 'gif'" class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                {{ gifButtonLabel }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Preview Panel -->
      <div class="lg:col-span-8 flex flex-col">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md h-full flex flex-col border border-gray-200 dark:border-gray-700">
          <div class="p-6 pb-4 border-b border-gray-100 dark:border-gray-700 flex flex-wrap items-center justify-between gap-4">
            <h2 class="font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              预览确认
            </h2>
            
            <div class="flex items-center gap-2" v-if="hasImage">
               <button @click="selectAll" class="text-xs px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors flex items-center gap-1">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                 </svg>
                 全选
               </button>
               <button @click="resetSelection" class="text-xs px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors flex items-center gap-1">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                   <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                 </svg>
                 重置
               </button>
               <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20">切片: {{ settings.cols * settings.rows }}</span>
            </div>
          </div>

          <div 
            class="relative flex-1 bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4 overflow-hidden select-none min-h-[500px]"
            @dragover.prevent="isDragging = true"
            @dragleave.prevent="isDragging = false"
            @drop.prevent="handleDrop"
          >
            <!-- Upload Area -->
            <label 
              v-if="!hasImage"
              class="cursor-pointer w-full h-96 border-2 border-dashed rounded-xl flex flex-col items-center justify-center transition-all duration-200 group"
              :class="[
                isDragging 
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/10' 
                  : 'border-gray-300 dark:border-gray-700 hover:border-primary-400 hover:bg-white dark:hover:bg-gray-800'
              ]"
            >
              <div class="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-500 dark:text-gray-400 group-hover:text-primary-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>
              </div>
              <p class="text-lg font-medium text-gray-700 dark:text-gray-200">点击或拖拽上传图片</p>
              <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">支持 JPG, PNG 等常见格式</p>
              <input type="file" class="hidden" accept="image/*" @change="handleFileSelect" />
            </label>

            <!-- Image Preview -->
            <div v-else class="relative shadow-2xl rounded-sm overflow-hidden" style="max-height: 700px;">
              <img ref="sourceImageRef" :src="imageUrl" class="block max-w-full h-auto max-h-[700px]" @load="onImageLoad" />
              <canvas 
                ref="gridCanvasRef" 
                class="absolute inset-0 w-full h-full cursor-pointer z-10"
                @click="handleGridClick"
              ></canvas>
            </div>
          </div>

          <div class="p-4 border-t border-gray-100 dark:border-gray-700">
            <div class="text-center text-xs text-gray-500 dark:text-gray-400">
               提示: <span class="text-red-500 font-bold">红色虚线</span>为网格，<span class="text-primary-500 font-bold">点击网格</span>筛选特定切片，<span class="text-green-500 font-bold">绿色</span>为选中状态。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch, onMounted } from 'vue';
import JSZip from 'jszip';
// @ts-ignore
import GIF from 'gif.js';

// SEO Title
onMounted(() => {
  document.title = '表情包切片工具 - Meme Slicer';
});

// Toast Mock
const showToast = (title: string, msg: string, type: 'success' | 'error' = 'success') => {
  // Simple alert for now, could be improved with a Toast component
  console.log(`[${type.toUpperCase()}] ${title}: ${msg}`);
  alert(`${title}\n${msg}`);
}

// 状态
const settings = reactive({
  cols: 6,
  rows: 4,
  padding: 0,
  prefix: 'sticker',
  gifDelay: 100
})

const isDragging = ref(false)
const processing = ref(false)
const processType = ref<'' | 'zip' | 'gif'>('')
const imageUrl = ref('')
const sourceImageRef = ref<HTMLImageElement | null>(null)
const gridCanvasRef = ref<HTMLCanvasElement | null>(null)
const selectedIndices = ref<Set<number>>(new Set())

const originalSize = reactive({ width: 0, height: 0 })
// removed unused currentFile
const gifWorkerBlobURL = ref<string | null>(null)

// 计算属性
const hasImage = computed(() => !!imageUrl.value)
const totalSlices = computed(() => settings.cols * settings.rows)
const selectedCount = computed(() => selectedIndices.value.size)

const zipButtonLabel = computed(() => {
  const count = selectedCount.value > 0 ? selectedCount.value : totalSlices.value
  return processing.value && processType.value === 'zip' 
    ? '打包中...' 
    : `下载 ZIP (${count})`
})

const gifButtonLabel = computed(() => {
  return processing.value && processType.value === 'gif'
    ? '渲染中...'
    : '生成 GIF'
})

onMounted(() => {
  // Check if we are in dev/prod for worker path
  // Since we copy gif.worker.js to public/, it should be accessible at root
  const gifWorkerUrl = '/gif.worker.js';
  
  fetch(gifWorkerUrl)
    .then(resp => resp.ok ? resp.text() : Promise.reject('Worker fetch failed'))
    .then(text => {
      const blob = new Blob([text], { type: 'application/javascript' })
      gifWorkerBlobURL.value = URL.createObjectURL(blob)
    })
    .catch(err => console.warn('GIF Worker load failed (make sure gif.worker.js is in public/):', err))

  window.addEventListener('resize', drawGrid)
})

const handleFileSelect = (e: Event) => {
  const input = e.target as HTMLInputElement
  if (input.files && input.files[0]) processFile(input.files[0])
}

const handleDrop = (e: DragEvent) => {
  isDragging.value = false
  if (e.dataTransfer?.files && e.dataTransfer.files[0]) {
    processFile(e.dataTransfer.files[0])
  }
}

const processFile = (file: File) => {
  if (!file.type.startsWith('image/')) {
    showToast('格式错误', '请上传图片文件', 'error')
    return
  }
  const reader = new FileReader()
  reader.onload = (e) => {
    imageUrl.value = e.target?.result as string
  }
  reader.readAsDataURL(file)
}

const onImageLoad = () => {
  if (sourceImageRef.value) {
    originalSize.width = sourceImageRef.value.naturalWidth
    originalSize.height = sourceImageRef.value.naturalHeight
    selectedIndices.value.clear()
    setTimeout(drawGrid, 50)
  }
}

watch([() => settings.cols, () => settings.rows, () => settings.padding], () => {
  if (settings.cols * settings.rows !== totalSlices.value) {
     selectedIndices.value.clear()
  }
  drawGrid()
})

const drawGrid = () => {
  if (!sourceImageRef.value || !gridCanvasRef.value) return

  const img = sourceImageRef.value
  const canvas = gridCanvasRef.value
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const rect = img.getBoundingClientRect()
  canvas.width = rect.width
  canvas.height = rect.height

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  const cols = Number(settings.cols)
  const rows = Number(settings.rows)
  const cellW = canvas.width / cols
  const cellH = canvas.height / rows
  const scaleX = canvas.width / originalSize.width
  const displayPadding = settings.padding * scaleX

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const index = r * cols + c
      const x = c * cellW
      const y = r * cellH
      
      const padX = x + displayPadding
      const padY = y + displayPadding
      const padW = cellW - 2 * displayPadding
      const padH = cellH - 2 * displayPadding

      if (selectedIndices.value.has(index)) {
        ctx.fillStyle = 'rgba(34, 197, 94, 0.4)' 
        if (padW > 0 && padH > 0) ctx.fillRect(padX, padY, padW, padH)
        else ctx.fillRect(x, y, cellW, cellH)

        ctx.fillStyle = '#ffffff'
        ctx.font = 'bold 24px sans-serif'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText('✓', x + cellW/2, y + cellH/2)
      }

      if (settings.padding > 0 && padW > 0 && padH > 0) {
         ctx.strokeStyle = 'rgba(59, 130, 246, 0.8)' 
         ctx.lineWidth = 1
         ctx.setLineDash([])
         ctx.strokeRect(padX, padY, padW, padH)
      }
    }
  }

  ctx.strokeStyle = 'rgba(239, 68, 68, 0.6)' 
  ctx.lineWidth = 1
  ctx.setLineDash([4, 2])
  ctx.beginPath()

  for (let i = 1; i < cols; i++) {
    const x = i * cellW
    ctx.moveTo(x, 0)
    ctx.lineTo(x, canvas.height)
  }
  for (let j = 1; j < rows; j++) {
    const y = j * cellH
    ctx.moveTo(0, y)
    ctx.lineTo(canvas.width, y)
  }
  ctx.stroke()
}

const handleGridClick = (e: MouseEvent) => {
  if (!gridCanvasRef.value) return
  const rect = gridCanvasRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  const cellW = rect.width / settings.cols
  const cellH = rect.height / settings.rows
  
  const col = Math.floor(x / cellW)
  const row = Math.floor(y / cellH)
  
  if (col >= 0 && col < settings.cols && row >= 0 && row < settings.rows) {
    const index = row * settings.cols + col
    if (selectedIndices.value.has(index)) {
      selectedIndices.value.delete(index)
    } else {
      selectedIndices.value.add(index)
    }
    drawGrid()
  }
}

const selectAll = () => {
  selectedIndices.value.clear()
  for (let i = 0; i < totalSlices.value; i++) {
    selectedIndices.value.add(i)
  }
  drawGrid()
}

const resetSelection = () => {
  selectedIndices.value.clear()
  drawGrid()
}

const iterateSlices = async (cb: (canvas: HTMLCanvasElement, index: number) => Promise<void>) => {
  if (!sourceImageRef.value) return 0
  const cols = Number(settings.cols)
  const rows = Number(settings.rows)
  const padding = Number(settings.padding)
  
  const cellW = originalSize.width / cols
  const cellH = originalSize.height / rows
  
  const hasSelection = selectedIndices.value.size > 0
  let count = 0

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const index = r * cols + c
      if (hasSelection && !selectedIndices.value.has(index)) continue

      const srcX = c * cellW + padding
      const srcY = r * cellH + padding
      const srcW = cellW - 2 * padding
      const srcH = cellH - 2 * padding

      if (srcW <= 0 || srcH <= 0) continue

      const canvas = document.createElement('canvas')
      canvas.width = srcW
      canvas.height = srcH
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.drawImage(sourceImageRef.value, srcX, srcY, srcW, srcH, 0, 0, srcW, srcH)
        await cb(canvas, index)
        count++
      }
    }
  }
  return count
}

const processAndZip = async () => {
  processing.value = true
  processType.value = 'zip'
  const zip = new JSZip()
  const prefix = settings.prefix || 'sticker'
  const folder = zip.folder(`${prefix}_pack`)
  if(!folder) return;

  try {
    const count = await iterateSlices(async (canvas, index) => {
      return new Promise<void>((resolve) => {
        canvas.toBlob((blob) => {
          if (blob) {
            folder.file(`${prefix}_${String(index + 1).padStart(2, '0')}.png`, blob)
          }
          resolve()
        }, 'image/png')
      })
    })

    if (count === 0) throw new Error('没有可处理的切片')

    const content = await zip.generateAsync({ type: 'blob' })
    downloadBlob(content, `${prefix}_pack.zip`)
    showToast('打包成功', `已下载 ${count} 张切片`)
    
  } catch (e: any) {
    showToast('处理失败', e.message, 'error')
  } finally {
    processing.value = false
    processType.value = ''
  }
}

const processAndGif = async () => {
  if (!gifWorkerBlobURL.value) {
    showToast('错误', 'GIF 组件未就绪，请稍后或刷新页面', 'error')
    return
  }

  processing.value = true
  processType.value = 'gif'
  
  try {
    const cols = Number(settings.cols)
    const padding = Number(settings.padding)
    const cellW = (originalSize.width / cols) - 2 * padding
    const rows = Number(settings.rows)
    const cellH = (originalSize.height / rows) - 2 * padding

    if (cellW <= 0 || cellH <= 0) throw new Error('切片尺寸无效')

    const gif = new GIF({
      workers: 2,
      quality: 10,
      width: cellW,
      height: cellH,
      workerScript: gifWorkerBlobURL.value
    })

    const slices: { index: number; canvas: HTMLCanvasElement }[] = []
    
    const count = await iterateSlices(async (canvas, index) => {
      slices.push({ index, canvas })
    })

    if (count === 0) throw new Error('没有可处理的切片')

    slices.sort((a, b) => a.index - b.index)
    slices.forEach(item => {
      gif.addFrame(item.canvas, { delay: settings.gifDelay })
    })

    gif.on('finished', (blob: Blob) => {
      downloadBlob(blob, `${settings.prefix || 'animation'}.gif`)
      processing.value = false
      processType.value = ''
      showToast('生成成功', 'GIF 已下载')
    })

    gif.render()
  } catch (e: any) {
    showToast('处理失败', e.message, 'error')
    processing.value = false
    processType.value = ''
  }
}

const downloadBlob = (blob: Blob, filename: string) => {
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>
