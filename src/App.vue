<script setup lang="ts">
import { reactive } from 'vue';
import { useContentStore } from './stores/ContentStore';

const contentStore = useContentStore();

const date = new Date();
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const month = months[date.getMonth()];
const year = date.getFullYear();

const state = reactive({
  light: true,
  count: 0,
  time: "h" + ":" + "m" + ":" + "s",
  timeFunction: () => {
    const today = new Date();
    let h = Number(today.getHours().toLocaleString('en-GB'));
    let nh = h < 10 ? "0" + h : h;
    let m = Number(today.getMinutes().toLocaleString('en-GB'));
    let nm = m < 10 ? "0" + m : m;
    let s = Number(today.getSeconds().toLocaleString('en-GB'));
    let ns = s < 10 ? "0" + s : s;
    state.time = nh + ":" + nm + ":" + ns;
    setTimeout(() => {
        state.timeFunction();
    }, 1000);
  }
});

state.timeFunction();

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
  localStorage.theme = 'dark';
  state.light = false;
} else {
  document.documentElement.classList.remove('dark');
  localStorage.theme = 'light'
  state.light = true;
}

const lightDarkMode = () => {
    state.light = !state.light;
    if(state.light) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light'
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
}


</script>

<template>
<span :onclick="lightDarkMode" class="absolute top-0 right-0 cursor-pointer hover:opacity-75   p-4  print:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" :class="state.light ? 'inline' : 'hidden'">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white" :class="state.light ? 'hidden' : 'inline'">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
</span>
<div class="
    bg-brand_bg animate-bg-fade text-brand_text 
    min-h-screen h-screen max-h-full w-screen flex flex-col
    ">
    <div class="w-full h-full">
        <div class="flex w-8/12 h-full m-auto  ">
            <div class="block w-full m-auto  text-base text-right ">
                <span class="inline-block font-semibold p-2 ">
                    <span>//</span> <span class="text-brand_primary font-serif">Email:</span> <a :href="'mailto:' + contentStore.email"
                        class="text-brand_secondary cursor-pointer hover:opacity-75">{{
                        contentStore.email }}</a>
                </span>
            </div>
        </div>
    </div>
    <div class="h-fit w-full">
        <div class="
             
            ">
            <div class=" 
            w-8/12 m-auto
             
            ">
            <h1 class="
            text-4xl lg:text-6xl p-2 pb-12 
            font-serif
            ">
                <span class="
                inline-block
                text-brand_primary
                    ">
                    {{ contentStore.title[0] + '&nbsp;' }}
                </span>
                <span class="
                inline-block
                text-brand_secondary
                    ">
                    {{ contentStore.title[1] }}
                </span>
            </h1>
            </div>
        </div>
        <div class="
             
            ">
            <div class="
            w-8/12 m-auto
             
            ">
                <h2 class="
                    text-xl lg:text-2xl lg:leading-relaxed
                    p-2 pb-8
                    ">
                    {{ contentStore.subtitle[0] }} <br>
                    {{ contentStore.subtitle[1] }}
                    {{ contentStore.subtitle[2] }}
                </h2>
            </div>    
        </div>
        <div class="
             
            ">
            <div class="
            w-8/12 m-auto
             
            ">
                <p class="
                    text-xl p-2 pb-4
                    ">
                    <span>
                        {{ month }}, 
                    </span>
                    <span>
                        {{ year }}, 
                    </span>
                    <span>
                        {{ contentStore.location }}.
                    </span>
                    <span>
                        {{ state.time }}
                    </span>
                </p>
            </div>
        </div>
        <div class="
             
            ">
            <div class="
            w-8/12 m-auto
             
            ">
                <div class="
                    text-xl p-2 pb-4
                    ">
                    <span>
                        <span class="[&>svg]:h-5 [&>svg]:w-5 inline">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>
                        </span>
                        Links: 
                    </span>
                    <a href="https://github.com/mejasonatkinson/" target="_blank" class="hover:text-brand_secondary ">
                        <!-- <i>GitHub</i> -->
                        <!-- Github -->
                        <span class="[&>svg]:h-5 [&>svg]:w-5 inline mx-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 496 512"
                            class="inline"
                            >
                            <path
                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                        </span>
                    </a>
                    <a href="https://www.linkedin.com/in/mejasonatkinson/" target="_blank" class="hover:text-brand_secondary ">
                        <!-- <i>LinkedIn</i> -->
                        <!-- Linkedin -->
                        <span class="[&>svg]:h-5 [&>svg]:w-5 inline mx-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 448 512"
                            class="inline"
                            >
                            <path
                            d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                        </svg>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full h-full">
        <div class="block w-8/12 h-full mx-auto  "></div>
    </div>
</div>
</template>


<style scoped>

</style>./stores/contentStore