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
            <header class="flex flex-row justify-between px-8 max-sm:px-4 mt-4 relative z-[1]">
              <h1 class="font-[800] text-2xl max-sm:text-md max-sm:text-balance text-green-500">Currently: Open to work (Data Analyst, Data Engineer, Analytics Engineer)</h1>
              <div class="dropdown dropdown-bottom">
                <div tabindex="0" role="button" class="max-sm:btn sm:hidden max-sm:mb-0 max-sm:bg-green-300 max-sm:text-black">Menu</div>
                <nav tabindex="0" class="grid grid-cols-4 gap-3 max-sm:dropdown-content max-sm:z-[1] max-sm:menu max-sm:grid-cols-none max-sm:rounded-box max-sm:w-52">
                  <NuxtLink to="/" class=""><HomeIcon class="w-10 h-10 max-sm:w-5 max-sm:h-5 fill-red-500 p-[2px] max-sm:p-0" /></NuxtLink>
                  <NuxtLink to="/about" class="text-zinc-950 font-[800] text-2xl max-sm:text-sm cursor-pointer hover:underline underline-offset-8 decoration-purple-500">About</NuxtLink>
                  <NuxtLink to="/projects" class="text-zinc-950 font-[800] text-2xl max-sm:text-sm cursor-pointer hover:underline underline-offset-8 decoration-purple-500">Projects</NuxtLink>
                  <NuxtLink to="/tools" class="text-zinc-950 font-[800] text-2xl max-sm:text-sm hover:underline underline-offset-8 decoration-amber-500">Tool Box</NuxtLink>
                </nav>
              </div>
              
            </header>

            <section class="grow overflow overflow-y max-sm:my-20 text-black">
                <slot />
            </section>

            <footer class="pl-10 max-sm:pl-4 pb-4 relative z-[1]">
              <h1 class="text-zinc-950 text-7xl max-sm:text-md font-[900]">Favour Oshiokhale</h1>
              <p class="text-3xl max-sm:text-md text-zinc-950 font-[800] " @click="cycleIndex"><span class="text-purple-700 cursor-pointer">{{ current_job }}</span> based in Houston, TX</p>
            </footer>
          </main>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const jobs: string[] = ["Data Engineer", "Data Analyst", "Analytics Engineer", "Full Stack Web Dev", "Python Power User", "Cinephile", "Playlist Connoisseur", "[Still clicking, I see? 👀]"]
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