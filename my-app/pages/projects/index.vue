<template>
    <div class="flex h-full items-center justify-center">
        <div class="grid grid-cols-3 w-3/4 gap-4">
            <div
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
            :delay="300"
            class="bg-stone-200 hover:bg-stone-300 h-72 rounded-md">
            <section class="h-3/4">

            </section>
            <footer class="h-1/4 px-4 flex flex-wrap">
                <div class="badge badge-lg bg-blue-500 text-white">ETL</div>
                <div class="badge badge-lg bg-purple-500 mx-1 text-white">Web Scraping</div>
                <div class="badge badge-lg bg-red-500 mx-1 text-white">Polars</div>
                <div class="badge badge-lg bg-green-500 mx-1 text-white">Data Visualization</div>
                <div class="badge badge-lg bg-yellow-500 mx-1 text-white">Data Analysis</div>
            </footer>
            </div>
            <div
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
            :delay="400"
            class="bg-stone-200 hover:bg-stone-300 h-72 rounded-md"></div>
            <div
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
            :delay="500"
            class="bg-stone-200 hover:bg-stone-300 h-72 rounded-md"></div>
        </div>
    </div>
</template>