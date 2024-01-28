<template>
    <section class="h-full overflow overflow-y px-8 mt-4">
        <div class="flex flex-col h-full justify-center">
            <p class="font-black text-lg mx-auto">I'm a <a class="text-yellow-400" @click="cycleIndex">{{ current_job }}</a> who loves making cool things with data. When I'm not building pipelines and writing SQL queries, I'm watching lots of movies and TV shows.</p>
        </div>

        
        
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const jobs: string[] = ["Data Engineer", "Data Analyst", "Analytics Engineer", "Full Stack SDE (sometimes)", "[Wow you're still clicking? Thanks!]"]
const currentIndex = reactive({index: 0})
const current_job: Ref<string> = ref(jobs[currentIndex.index])

const cycleIndex = () => {
  currentIndex.index = (currentIndex.index + 1) % jobs.length
}

watch(currentIndex, (newValue, oldValue) => {
  current_job.value = jobs[newValue.index]
})

defineExpose({ currentIndex, current_job })

</script>