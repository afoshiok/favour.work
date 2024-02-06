<template>
    <section class="h-full px-8 mt-4">
        <div class="flex flex-col h-full items-center justify-center">
            <!-- <p class="font-black text-lg mx-auto">I'm a <a class="text-purple-700 cursor-pointer" @click="cycleIndex">{{ current_job }}</a> who loves making cool things with data. When I'm not building pipelines and writing SQL queries, I'm watching lots of movies and discovering new songs.</p> -->
            <!-- Non-"About Me" Section -->
            <div class="grid grid-cols-2 grid-rows-2 gap-4 w-3/4 px-8">
              <div
              v-motion
              :initial="{ opacity: 0, y: 100 }"
              :enter="{ opacity: 1, y: 0, scale: 1 }"
              :delay="300"
               class="bg-stone-200 rounded-md p-4">
                <h1 class="font-black">Education <span class="text-2xl">🧑🏾‍🎓</span></h1>
                <p class="font-medium">I graduated from the <a class="font-bold text-red-500">University of Houston</a> in May 2023 with a <a class="font-bold text-orange-500">B.S. in Computer Information Systems</a>.</p>
              </div>
              <div
              v-motion
              :initial="{ opacity: 0, y: 100 }"
              :enter="{ opacity: 1, y: 0, scale: 1 }"
              :delay="400"
              class="bg-stone-200 rounded-md p-4">
                <h1 class="font-black">Certifications / Accreditations <span class="text-2xl">📜</span></h1>
                <ul class="list-disc list-inside pl-4">
                  <li>Tableau Desktop Specialist (Apr. 2022)</li>
                  <li>Databricks Lakehouse Fundamentals (Jul. 2023)</li>
                  <li>Databricks Data Engineer Associate (Sept. 2023)</li>
                </ul>
              </div>
              <div
              v-motion
              :initial="{ opacity: 0, y: 100 }"
              :enter="{ opacity: 1, y: 0, scale: 1 }"
              :delay="500"
              class="bg-stone-200 rounded-lg p-4">
                <h1 class="font-black">Experience <span class="text-2xl">👨🏾‍💻</span></h1>
                <div class="flex justify-between">
                  <h2 class="font-semibold">Slalom Build</h2>
                  <p>Jun. 2022 - Aug. 2022</p>
                </div>
                <p class="">Data Engineering Intern</p>
                <ul class="list-disc list-inside pl-4 text-center">
                  <li class="text-left">Created an <span class="font-bold text-orange-500">ETL pipeline</span> using Singer to extract Slack data for a employee ML model.</li>
                  <li class="text-left">Utilized <span class="font-bold text-purple-500">AWS Sagemaker</span> to train machine learning models.</li>
                  <li class="text-left">Performed exploratory data analysis by utilizing data from <span class="font-bold text-blue-500">Snowflake</span> and creating a dataset using <span class="font-bold text-red-500">Pandas</span>.</li>
                </ul>
              </div>
              <div
              v-motion
              :initial="{ opacity: 0, y: 100 }"
              :enter="{ opacity: 1, y: 0, scale: 1 }"
              :delay="600"
              class="bg-stone-200 rounded-md p-4">
                <h1 class="font-black">Currently working on... <span class="text-2xl">👷🏾‍♂️</span></h1>
                <div class="flex justify-between">
                  <h2 class="font-semibold">FEC Data Engineering Project</h2>
                  <a class="text-blue-500 underline underline-offset-1" href="https://github.com/afoshiok/Election_DE" target="_blank">Github</a>
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

