<script setup lang="ts">
    import AnimatedHeading from "./../components/AnimatedHeading.vue";
    import AnimatedText from "./../components/AnimatedText.vue";
    import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
    import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
    import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
</script>
<template>
    <AnimatedHeading text="Software_Developer" />
    <AnimatedText class="mt-4 max-w-3xl">
        Hello there! I am Zackry, a software developer from Malaysia, with approximately 3 years of experience in Go. I am currently working with caffeine addicts at BerryByte Limited.
    </AnimatedText>
    <div class="mt-4 space-x-6 text-zinc-400">
        <a href="https://github.com/zackrsli" class="hover:text-zinc-200 transition duration-300 ease-in-out">
            <FontAwesomeIcon :icon="faGithub" size="xl" />
        </a>
        <a href="https://twitter.com/zackrsli" class="hover:text-zinc-200 transition duration-300 ease-in-out">
            <FontAwesomeIcon :icon="faTwitter" size="xl" />
        </a>
        <a href="https://linkedin.com/in/zackry-rosli" class="hover:text-zinc-200 transition duration-300 ease-in-out">
            <FontAwesomeIcon :icon="faLinkedin" size="xl" />
        </a>
        <a href="mailto:zackry@berrybyte.net" class="hover:text-zinc-200 transition duration-300 ease-in-out">
            <FontAwesomeIcon :icon="faEnvelope" size="xl" />
        </a>
    </div>
</template>