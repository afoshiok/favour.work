<template>
    <section class="flex h-full items-center justify-center">
        <div class="grid grid-rows-8 grid-cols-4 gap-4 w-3/4 h-2/3 px-8 container my-auto">
            <!-- Languages -->
            <div
            v-motion
            :initial="{ opacity:0, x:-100 }"
            :enter="{ opacity: 1, x: 0, scale: 1 }"
            :delay="300"
             class=" h-full w-full row-start-1 col-start-1 row-span-3 col-span-1 bg-orange-200 p-4 rounded-xl">
                <h1 class="font-bold text-2xl">Languages</h1>
                <div class="mt-2 flex flex-row flex-wrap">
                    <div class="tooltip tooltip-bottom" data-tip="Python">
                        <Python  class="w-20 h-20 p-4"/>
                    </div>
                    <div class="tooltip tooltip-bottom" data-tip="TypeScript">
                        <Typescript class="w-20 h-20 p-4"/>
                    </div>
                    <div class="tooltip tooltip-bottom" data-tip="HTML">
                        <Hypertext class="w-20 h-20 p-4" />
                    </div>
                    <div class="tooltip tooltip-bottom" data-tip="SQL">
                        <SqlIcon class="w-20 h-20 p-4" />
                    </div>
                    <div class="tooltip tooltip-bottom" data-tip="JavaScript">
                        <Javascript class="w-20 h-20 p-4"/>
                    </div>
                </div>
            </div>
            <div
            v-motion
            :initial="{ opacity:0, x:100 }"
            :enter="{ opacity: 1, x: 0, scale: 1 }"
            :delay="500"
             class=" h-full w-full row-start-1 col-start-2 col-span-3 row-span-3 bg-red-200 rounded-xl p-4">
                <h1 class="font-bold text-2xl">Data Warehouses and Databases</h1>
                <div class="flex justify-center">
                    <div class="mt-2 flex flex-row flex-wrap">
                        <div class="tooltip tooltip-bottom" data-tip="Snowflake">
                            <SnowflakeIcon class="w-24 h-24 p-4" />
                        </div>
                        <div class="tooltip tooltip-bottom" data-tip="MySql">
                            <Mysql class="w-24 h-24 p-4" />
                        </div>
                        <div class="tooltip tooltip-bottom" data-tip="DynamoDB">
                            <Dynamodb class="w-24 h-24 p-4" />
                        </div>
                        <div class="tooltip tooltip-bottom" data-tip="Postgres">
                            <Postgres class="w-24 h-24 p-4"/>
                        </div>
                        <div class="tooltip tooltip-bottom" data-tip="Microsoft SQL Server">
                            <SqlServer class="w-24 h-24 p-4"/>
                        </div>
                        <div class="tooltip tooltip-bottom" data-tip="Databricks">
                            <DatabricksIcon class="w-24 h-24 p-4"/>
                        </div>
                        <div class="tooltip tooltip-bottom" data-tip="Oracle">
                            <Oracle class="w-24 h-24 p-4"/>
                        </div>
                    </div>
                </div>
            </div>
            <div
            v-motion
            :initial="{ opacity:0, x:-100 }"
            :enter="{ opacity: 1, x: 0, scale: 1 }"
            :delay="700"
            class=" h-full w-full row-start-4 row-span-3 col-span-2 rounded-xl p-4 bg-green-200">
                <h1 class="font-bold text-2xl">Cloud Platforms</h1>
                <div class="mt-2 flex flex-row justify-center">
                    <AwsIcon class="w-24 h-24 p-4"/>
                    <AzureIcon class="w-24 h-24 p-4"/>
                </div>
            </div>
            <div
            v-motion
            :initial="{ opacity:0, x:100 }"
            :enter="{ opacity: 1, x: 0, scale: 1 }"
            :delay="900"
            class="h-full w-full row-start-4 col-start-3 col-span-2 row-span-4 bg-blue-200 rounded-xl p-4">
                <h1 class="font-bold text-2xl">Data Tools</h1>
                <div class="mt-2 flex flex-row flex-wrap justify-center mx-14">
                    <Dbt class="w-24 h-24 p-4"/>
                    <ApacheSpark class="w-24 h-24 p-4"/>
                    <Airflow class="w-24 h-24 p-4"/>
                    <Jupyter class="w-24 h-24 p-4"/>
                    <Polars class="w-24 h-24 p-4"/>
                    <Pandas class="w-24 h-24 p-4"/>
                </div>
            </div>
            <div class="h-full w-full row-start-7 col-span-2 p-4 bg-yellow-200 rounded-xl">
                <h1>Tools</h1>
            </div>
        </div>
    </section>
</template>