<script setup lang="ts">
    import { computed, onMounted, ref } from "vue";
    import Navigation from "./components/Navigation.vue";
    import { RouterView } from "vue-router";

    const cursorXpos = ref(0);
    const cursorYpos = ref(0);
    const hideCursor = ref(true);
    const cursor = computed(() => `transform: translateX(${cursorXpos.value}px) translateY(${cursorYpos.value}px) translateZ(0) translate3d(0, 0, 0);`);

    onMounted(() => {
        document.addEventListener("mousemove", (e: MouseEvent) => {
            setTimeout(() => {
                cursorXpos.value = e.clientX - 15;
                cursorYpos.value = e.clientY - 15;
            }, 100);
        });

        document.addEventListener("mouseenter", () => {
            hideCursor.value = false;
        });

        document.addEventListener("mouseleave", () => {
            hideCursor.value = true;
        });
    });
</script>
<template>
    <div class="min-h-screen tiles">
        <div :class="['cursor', hideCursor && 'cursor-hide']" :style="cursor"></div>
        <Navigation />
        <div class="h-full mx-auto max-w-7xl px-6 py-12">
            <RouterView v-slot="{ Component }">
                <component :is="Component" />
            </RouterView>
            <footer class="mt-8 text-zinc-100 text-sm">
                &copy; 2023 Zackry Rosli. All rights reserved.
            </footer>
        </div>
    </div>
</template>

<style scoped>
    .tiles {
        position: relative;
    }

    .tiles:before {
        content: "";
        z-index: -1;
        position: absolute;
        background-repeat: repeat;
        background: url('data:image/svg+xml;utf8,<svg height="84" width="84" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg"><rect width="84" height="84" /></svg>');
        opacity: .035;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .cursor {
        @apply hidden md:block rounded-full bg-zinc-100 pointer-events-none cursor-none;
        
        z-index: 100;
        top: 0;
        left: 0;
        position: fixed;
        width: 30px;
        height: 30px;
        backface-visibility: hidden;
        transition: opacity 1000ms ease-in-out;
        mix-blend-mode: difference;
    }

    .cursor-hide {
        opacity: 0;
        width: 40px;
        height: 40px;
        transition: width 250ms ease-in-out, height 250ms ease-in-out, opacity 250ms ease-in-out;
    }
</style>

<style>
    ::-webkit-scrollbar {
        background: none;
        width: 16px;
        height: 16px;
    }

    ::-webkit-scrollbar-thumb {
        border: solid 0 rgb(0 0 0 / 0%);
        border-right-width: 4px;
        border-left-width: 4px;
        -webkit-box-shadow: inset 0 0 0 4px theme(colors.zinc.100 / 20%);
    }

    ::-webkit-scrollbar-track-piece {
        margin: 4px 0;
    }

    ::-webkit-scrollbar-thumb:horizontal {
        border-right-width: 0;
        border-left-width: 0;
        border-top-width: 4px;
        border-bottom-width: 4px;
        -webkit-border-radius: 4px 9px;
    }

    ::-webkit-scrollbar-corner {
        background: transparent;
    }
</style>
