<script setup lang="ts">
    import SidebarNavigation from "./components/SidebarNavigation.vue";
    import TopNavigation from "./components/TopNavigation.vue";
    import { RouterView } from "vue-router";
</script>

<template>
    <TopNavigation />
    <div class="tiles h-[calc(100svh-4rem)]">
        <div class="container mx-auto flex flex-col md:flex-row h-full p-4 gap-8">
            <div class="md:w-1/3">
                <SidebarNavigation />
            </div>
            <div class="md:w-2/3">
                <RouterView v-slot="{ Component }">
                    <transition name="fade" mode="out-in">
                        <component :is="Component" />
                    </transition>
                </RouterView>
            </div>
        </div>
    </div>
</template>