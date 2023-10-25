<script setup lang="ts">
    import { RouterView } from "vue-router";
</script>
<template>
    <div class="min-h-screen tiles">
        <div class="h-full mx-auto max-w-7xl px-6 py-12">
            <RouterView v-slot="{ Component }">
                <component :is="Component" />
            </RouterView>
            <p class="mt-5 text-zinc-500">
                &copy; 2023 Zackry Rosli. All rights reserved.
            </p>
        </div>
    </div>
</template>