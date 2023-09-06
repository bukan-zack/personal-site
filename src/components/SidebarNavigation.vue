<script setup lang="ts">
    import { RouterLink } from "vue-router";
    import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
    import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
</script>

<template>
    <div class="h-full flex flex-col justify-center relative">
        <div class="flex flex-col space-y-6 group">
            <RouterLink v-for="route in $router.getRoutes()" :key="route.path" :to="route.path" class="font-bold text-xl transition-all duration-200 ease-in-out hover:!text-2xl group-hover:text-xl hover:!text-white group-hover:text-slate-400" :class="$route.name === route.name ? 'text-2xl text-white' : 'text-slate-400'">
                {{ $route.name === route.name ? `</${route.meta.title}>` : route.meta.title }}
            </RouterLink>
        </div>
        <div class="mt-6 md:mt-0 md:absolute bottom-0 space-x-6">
            <a class="text-slate-400 hover:text-white tranition-all duration-200 ease-in-out" href="https://github.com/jekkeryy"><FontAwesomeIcon :icon="faGithub" size="xl" /></a>
            <a class="text-slate-400 hover:text-white tranition-all duration-200 ease-in-out" href="https://www.linkedin.com/in/zackry-rosli"><FontAwesomeIcon :icon="faLinkedin" size="xl" /></a>
        </div>
    </div>
</template>