<template>
    <section class="h-full overflow overflow-y px-8 mt-4">
        <div class="flex flex-col h-full items-center justify-center">
            <p class="font-black text-lg mx-auto">I'm a <a class="text-purple-700 cursor-pointer" @click="cycleIndex">{{ current_job }}</a> who loves making cool things with data. When I'm not building pipelines and writing SQL queries, I'm watching lots of movies and discovering new songs.</p>
            <div class="grid grid-cols-2 gap-4 w-3/4 mt-4">
              <div>
                <h1 class="font-black">Education 🧑🏾‍🎓</h1>
                <p class="font-medium">I graduated from the <a class="font-bold text-red-600">University of Houston</a> in May 2023 with a <a class="font-bold text-orange-600">B.S. in Computer Information Systems</a>.</p>
              </div>
                <div>
                  <h1 class="font-black">Certifications / Accreditations 📜</h1>
                  <ul class="list-disc list-inside">
                    <li>Tableau Desktop Specialist (Apr. 2022)</li>
                    <li>Databricks Lakehouse Fundamentals (Jul. 2023)</li>
                    <li>Databricks Data Engineer Associate (Sept. 2023)</li>
                  </ul>
              </div>
            </div>
        </div>

        
        
    </section>
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

</script>