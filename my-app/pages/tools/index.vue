<template>
    <section class="flex flex-col my-18 items-center justify-center">
        <h1 class="my-8 font-bold text-2xl text-red-500">/ Tools</h1>
        <div class="grid grid-rows-8 grid-cols-4 gap-3 w-3/4 h-5/6 max-sm:grid-rows-none max-sm:grid-cols-none max-sm:flex max-sm:flex-col px-8 max-sm:p-1 container my-auto">
            <!-- Languages -->
            <div
            v-motion
            :initial="{ opacity:0, x:-100 }"
            :enter="{ opacity: 1, x: 0, scale: 1 }"
            :delay="300"
             class=" h-full w-full row-start-1 col-start-1 row-span-3 col-span-1 bg-orange-200 p-4 rounded-xl ">
                <h1 class="font-bold text-2xl">Languages</h1>
                <div class="mt-2 flex flex-row flex-wrap">
                    <div class="tooltip tooltip-bottom" data-tip="Python">
                        <Python  class="w-20 h-20 p-4  4xl:w-24 4xl:h-24"/>
                    </div>
                    <div class="tooltip tooltip-bottom" data-tip="TypeScript">
                        <Typescript class="w-20 h-20 p-4  4xl:w-24 4xl:h-24"/>
                    </div>
                    <div class="tooltip tooltip-bottom" data-tip="HTML">
                        <Hypertext class="w-20 h-20 p-4  4xl:w-24 4xl:h-24" />
                    </div>
                    <div class="tooltip tooltip-bottom" data-tip="SQL">
                        <SqlIcon class="w-20 h-20 p-4  4xl:w-24 4xl:h-24" />
                    </div>
                    <div class="tooltip tooltip-bottom" data-tip="JavaScript">
                        <Javascript class="w-20 h-20 p-4  4xl:w-24 4xl:h-24"/>
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
                            <SnowflakeIcon class="w-24 h-24 p-4 4xl:w-32 4xl:h-32" />
                        </div>
                        <div class="tooltip tooltip-bottom" data-tip="MySql">
                            <Mysql class="w-24 h-24 p-4 4xl:w-32 4xl:h-32" />
                        </div>
                        <div class="tooltip tooltip-bottom" data-tip="DynamoDB">
                            <Dynamodb class="w-24 h-24 p-4 4xl:w-32 4xl:h-32" />
                        </div>
                        <div class="tooltip tooltip-bottom" data-tip="Postgres">
                            <Postgres class="w-24 h-24 p-4 4xl:w-32 4xl:h-32"/>
                        </div>
                        <div class="tooltip tooltip-bottom" data-tip="Microsoft SQL Server">
                            <SqlServer class="w-24 h-24 p-4 4xl:w-32 4xl:h-32"/>
                        </div>
                        <div class="tooltip tooltip-bottom" data-tip="Databricks">
                            <DatabricksIcon class="w-24 h-24 p-4 4xl:w-32 4xl:h-32"/>
                        </div>
                        <div class="tooltip tooltip-bottom" data-tip="Oracle">
                            <Oracle class="w-24 h-24 p-4 4xl:w-32 4xl:h-32"/>
                        </div>
                    </div>
                </div>
            </div>
            <div
            v-motion
            :initial="{ opacity:0, x:-100 }"
            :enter="{ opacity: 1, x: 0, scale: 1 }"
            :delay="700"
            class=" h-full w-full row-start-4 row-span-2 col-span-2 rounded-xl p-4 bg-green-200">
                <h1 class="font-bold text-2xl">Cloud Platforms</h1>
                <div class="mt-2 flex flex-row justify-center">
                    <div class="tooltip tooltip-bottom" data-tip="AWS">
                        <AwsIcon class="w-24 h-24 p-4 4xl:w-32 4xl:h-32"/>
                    </div>
                    <div class="tooltip tooltip-bottom" data-tip="Azure">
                        <AzureIcon class="w-24 h-24 p-4  4xl:w-32 4xl:h-32"/>
                    </div>
                    
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
                    <div class="tooltip tooltip-bottom" data-tip="Dbt">
                        <Dbt class="w-24 h-24 p-4 4xl:w-32 4xl:h-32"/>
                    </div>
                    <div class="tooltip tooltip-bottom" data-tip="Apache Spark">
                        <ApacheSpark class="w-24 h-24 p-4 4xl:w-32 4xl:h-32"/>
                    </div>
                    <div class="tooltip tooltip-bottom" data-tip="Apache Airflow">
                        <Airflow class="w-24 h-24 p-4 4xl:w-32 4xl:h-32"/>
                    </div>
                    <div class="tooltip tooltip-bottom" data-tip="Jupyter Notebooks">
                        <Jupyter class="w-24 h-24 p-4 4xl:w-32 4xl:h-32"/>
                    </div>
                    <div class="tooltip tooltip-bottom" data-tip="Polars">
                        <Polars class="w-24 h-24 p-4 4xl:w-32 4xl:h-32"/>
                    </div>
                    <div class="tooltip tooltip-bottom" data-tip="Pandas">
                        <Pandas class="w-24 h-24 p-4 4xl:w-32 4xl:h-32"/>
                    </div>
                    <div class="tooltip tooltip-bottom" data-tip="Tableau">
                        <Tableau class="w-24 h-24 p-4 4xl:w-32 4xl:h-32"/>
                    </div>
                    <div class="tooltip tooltip-bottom" data-tip="Powerbi">
                        <Powerbi class="w-24 h-24 p-4 4xl:w-32 4xl:h-32"/>
                    </div>
                    <div class="tooltip tooltip-bottom" data-tip="Scikit Learn">
                        <Scikit class="w-24 h-24 p-4 4xl:w-32 4xl:h-32"/>
                    </div>
                </div>
            </div>
            <div
            v-motion
            :initial="{ opacity:0, x:-100 }"
            :enter="{ opacity: 1, x: 0, scale: 1 }"
            :delay="1000" 
            class="h-full w-full row-start-6 row-span-2 col-span-2  bg-yellow-200 rounded-xl p-4">
                <h1 class="font-bold text-2xl">Misc. Tools</h1>
                <div class="mt-2 flex flex-row flex-wrap justify-center">
                    <div class="tooltip tooltip-bottom" data-tip="Flask">
                        <Flask class="w-24 h-24 p-4 4xl:w-32 4xl:h-32"/>
                    </div>
                    <div class="tooltip tooltip-bottom" data-tip="Fast API">
                        <Fastapi class="w-24 h-24 p-4 4xl:w-32 4xl:h-32"/>
                    </div>
                    <div class="tooltip tooltip-bottom" data-tip="Github">
                        <GithubIcon class="w-24 h-24 p-4 4xl:w-32 4xl:h-32"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>