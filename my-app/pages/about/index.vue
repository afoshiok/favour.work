<template>
    <section class="h-full px-8 mt-4">
        <div class="flex flex-col h-full items-center justify-center">
            <p class="font-black text-lg mx-auto">I'm a <a class="text-purple-700 cursor-pointer" @click="cycleIndex">{{ current_job }}</a> who loves making cool things with data. When I'm not building pipelines and writing SQL queries, I'm watching lots of movies and discovering new songs.</p>
            <!-- Non-"About Me" Section -->
            <div class="grid grid-cols-2 grid-rows-2 gap-4 w-3/4 mt-4 px-8">
              <div>
                <h1 class="font-black">Education <span class="text-2xl">🧑🏾‍🎓</span></h1>
                <p class="font-medium">I graduated from the <a class="font-bold text-red-600">University of Houston</a> in May 2023 with a <a class="font-bold text-orange-600">B.S. in Computer Information Systems</a>.</p>
              </div>
              <div class="pl-4">
                <h1 class="font-black">Certifications / Accreditations <span class="text-2xl">📜</span></h1>
                <ul class="list-disc list-inside pl-4">
                  <li>Tableau Desktop Specialist (Apr. 2022)</li>
                  <li>Databricks Lakehouse Fundamentals (Jul. 2023)</li>
                  <li>Databricks Data Engineer Associate (Sept. 2023)</li>
                </ul>
              </div>
              <div>
                <h1 class="font-black">Experience <span class="text-2xl">👨🏾‍💻</span></h1>
                <div class="flex justify-between">
                  <h2 class="font-semibold">Slalom Build</h2>
                  <p>Jun. 2022 - Aug. 2022</p>
                </div>
                <p class="">Data Engineering Intern</p>
                <ul class="list-disc list-inside pl-4 text-center">
                  <li class="text-left">Created an <span class="font-bold">ETL pipeline</span> using Singer to extract Slack data for a employee ML model.</li>
                  <li class="text-left">Utilized <span class="font-bold">AWS Sagemaker</span> to train machine learning models.</li>
                  <li class="text-left">Performed exploratory data analysis by utilizing data from <span class="font-bold">Snowflake</span> and creating a dataset using <span class="font-bold">Pandas</span>.</li>
                </ul>
              </div>
              <div class="pl-4">
                <h1 class="font-black">Currently working on... <span class="text-2xl">👷🏾‍♂️</span></h1>
                <div class="flex justify-between">
                  <h2 class="font-semibold">FEC Data Engineering Project</h2>
                  <a href="https://github.com/afoshiok/Election_DE" target="_blank">Github</a>
                </div>
                <ul class="list-disc list-inside pl-4 text-center">
                  <li class="text-left">End-to-end Data Engineering project using data from the FEC API. </li>
                </ul>
              </div>
            </div>
            <!-- End of Section -->
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

// const url = useRequestURL()
// console.log(url.pathname)

</script>