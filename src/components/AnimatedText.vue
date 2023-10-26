<template>
    <Transition name="fade" appear>
        <p class="text-zinc-400 text-xl">
            <slot></slot>
        </p>
    </Transition>
</template>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        @apply transition duration-500 ease-in-out;
    }

    .fade-enter-from {
        @apply opacity-0 translate-y-8 skew-y-2;
    }

    .fade-leave-to {
        @apply opacity-0 translate-y-0 skew-y-0;
    }
</style>