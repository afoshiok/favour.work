<template>
    <div class="flex flex-col h-full items-center justify-center">
        <h1 class="my-8 font-bold text-2xl text-red-500">/ Projects</h1>
        <div class="grid grid-cols-3 w-3/4 max-sm:grid-rows max-sm:grid-cols-none gap-4">
            <div
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
            :delay="300"
            class="bg-stone-200 hover:bg-stone-300 h-72 rounded-md hover:cursor-pointer">
                <a href="https://github.com/afoshiok/Letterboxd-EDA" target="_blank" rel="noopener noreferrer">
                    <section class="h-3/4 px-4 pt-4">
                        <div class="text-2xl font-bold ">Letterboard</div>
                        <p>Generates a dashboard based on data scraped from your Letterboxd diary.</p>
                    </section>
                    <footer class="h-1/4 px-4 flex flex-wrap">
                        <div class="badge badge-lg max-sm:badge-sm bg-blue-500 text-white">ETL</div>
                        <div class="badge badge-lg max-sm:badge-sm bg-purple-500 mx-1 text-white">Web Scraping</div>
                        <div class="badge badge-lg max-sm:badge-sm bg-red-500 mx-1 text-white">Polars</div>
                        <div class="badge badge-lg max-sm:badge-sm bg-green-500 mx-1 text-white">Data Visualization</div>
                        <div class="badge badge-lg max-sm:badge-sm bg-yellow-500 mx-1 text-white">Data Analysis</div>
                    </footer>
                </a>

            </div>
            <div
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
            :delay="400"
            class="bg-stone-200 hover:bg-stone-300 h-72 rounded-md hover:cursor-pointer">
                <a href="https://github.com/afoshiok/Election_DE" target="_blank" rel="noopener noreferrer">
                    <section class="h-3/4 px-4 pt-4">
                        <div class="text-2xl font-bold ">Money + Elections <span class="italic">(In progress)</span> </div>
                        <p>End-to-end data pipeline utilizing candidate and committee financial data from the Federal Elections Commission database. </p>
                    </section>
                    <footer class="h-1/4 px-4 flex flex-wrap">
                        <div class="badge badge-lg max-sm:badge-sm bg-blue-500 text-white">ELT</div>
                        <div class="badge badge-lg max-sm:badge-sm bg-purple-500 mx-1 text-white">Apache Airflow</div>
                        <div class="badge badge-lg max-sm:badge-sm bg-orange-500 mx-1 text-white">Dbt</div>
                        <div class="badge badge-lg max-sm:badge-sm bg-red-500 mx-1 text-white">SQL</div>
                        <div class="badge badge-lg max-sm:badge-sm bg-blue-500 text-white">Redshift</div>
                        <div class="badge badge-lg max-sm:badge-sm bg-orange-500 mx-1 text-white">S3</div>
                        <div class="badge badge-lg max-sm:badge-sm bg-yellow-500 mx-1 text-white">Data Modeling</div>
                        <div class="badge badge-lg max-sm:badge-sm bg-green-500 mx-1 text-white">Data Visualization</div>
                    </footer>
                </a>
            </div>
            <div
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
            :delay="500"
            class="bg-stone-200 hover:bg-stone-300 h-72 rounded-md hover:cursor-pointer">
                <a href="https://github.com/afoshiok" target="_blank">
                    <div class=" h-full flex items-center justify-center">
                    <GithubIcon class="w-24 h-24 fill-green-500" />
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>