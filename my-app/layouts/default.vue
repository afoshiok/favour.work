<template>
    <Style>
        div {
            font-family: 'Roboto', sans-serif;
        }
    </Style>
    <head>
      <title>Favour Oshiokhale | Data Engineer</title>
    </head>
    <div class="h-screen max-h-screen bg-stone-100 relative overflow overflow-y-auto">
        <div class="h-screen relative z-[1]">
          <main class="flex flex-col h-lvh max-w-[1920px] mx-auto justify-between">
            <header class="flex flex-row justify-between px-8 mt-4 relative z-[1]">
              <h1 class="font-[800] text-2xl text-zinc-950">Currently: Open to work (Data Analyst, Data Engineer, Analytics Engineer)</h1>
              <nav class="grid grid-cols-3 gap-4">
                <NuxtLink to="/about" class="text-zinc-950 font-[800] text-2xl cursor-pointer hover:underline underline-offset-8 decoration-purple-500">About</NuxtLink>
                <NuxtLink to="/projects" class="text-zinc-950 font-[800] text-2xl cursor-pointer hover:underline underline-offset-8 decoration-purple-500">Projects</NuxtLink>
                <a class="text-zinc-950 font-[800] text-2xl hover:underline underline-offset-8 decoration-amber-500">Tool Box</a>
              </nav>
            </header>

            <section class="grow overflow overflow-y">
                <slot />
            </section>

            <footer class="pl-10 pb-4 relative z-[1]">
              <h1 class="text-zinc-950 text-7xl font-[900]">Favour Oshiokhale</h1>
              <p class="text-3xl text-zinc-950 font-[800] " @click="cycleIndex"><span class="text-purple-700 cursor-pointer">{{ current_job }}</span> based in Houston, TX</p>
            </footer>
          </main>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const jobs: string[] = ["Data Engineer", "Data Analyst", "Analytics Engineer", "Full Stack SDE", "Cinephile", "Playlist Connoisseur", "[Still clicking, I see? 👀]"]
const currentIndex = reactive({index: 0})
const current_job: Ref<string> = ref(jobs[currentIndex.index])

const cycleIndex = () => {
  currentIndex.index = (currentIndex.index + 1) % jobs.length
}

watch(currentIndex, (newValue, oldValue) => {
  current_job.value = jobs[newValue.index]
})

defineExpose({ currentIndex, current_job })

// const url = useRequestURL()
// console.log(url.pathname)

</script>