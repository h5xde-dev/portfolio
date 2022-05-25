<template>
  <main>
    <vue-slick-carousel
      :autoplay="autoplay"
      :infinite="true"
      :arrows="true"
      :autoplaySpeed="4000"
      :pauseOnFocus="true"
      :dots="true"
      class="container px-5 py-12 my-10 mx-auto rounded-2xl bg-white bg-opacity-50 border-0"
    >
      <section
        v-for="(work, key) in $myWorks"
        :key="key"
        class="text-gray-600 body-font border-0"
      >
        <div class="w-full sm:w-1/2 xl:w-1/3">
          <div class="flex flex-col text-left">
            <h1
              class="
                sm:text-3xl
                text-2xl
                font-medium
                title-font
                mb-4
                text-gray-900
              "
            >
              {{ work.name }}
            </h1>
            <h2
              class="
                sm:text-xl
                text-xl
                font-medium
                title-font
                mb-4
                text-gray-900
              "
            >
              {{ work.position }}
            </h2>
            <p
              class="mx-auto leading-relaxed text-base"
              v-html="work.description"
            ></p>
          </div>
        </div>
        <div class="container px-5 py-24 mx-auto grid gap-2 w-full grid-cols-3">
          <div
            v-for="(image, ikey) in work.images"
            :key="ikey"
            class="
              shadow-lg
              rounded-xl
              p-4
              bg-white
              dark:bg-gray-800
              relative
              overflow-hidden
            "
          >
            <a :href="image.site" class="w-full h-full block">
              <div class="w-full">
                <p
                  class="text-gray-800 dark:text-white text-xl font-medium mb-2"
                >
                  {{image.site}}
                </p>
                <p
                  class="
                    text-gray-400
                    dark:text-gray-300
                    text-xs
                    font-medium
                    mb-2
                  "
                >
                  Sunday 13 october
                </p>
                <p class="text-gray-400 dark:text-gray-300 text-sm mb-4">
                  {{image.description}}
                </p>
                <img :src="image.src" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </vue-slick-carousel>
  </main>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      autoplay: false,
    };
  },
};
</script>
