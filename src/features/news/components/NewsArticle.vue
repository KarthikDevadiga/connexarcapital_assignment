<template>
  <div class="w-full min-h-[50rem]">
    <nav class="h-20 bg-gray-700 flex p-2 text-2xl items-center relative">
      <router-link class="mr-auto absolute" :to="'/news'">Back</router-link>
      <h2 class="mx-auto">
        <router-link :to="'/'"> Wallstreet News </router-link>
      </h2>
    </nav>
    <div class="m-4">
      <h1 class="text-2xl">{{ news[0].title }}</h1>
      <p class="text-xs text-gray-500">{{ news[0].publishedAt }}</p>
      <img class="mx-auto mt-4 w-1/2 h-1/2" :src="news[0].image" alt="img" />
      <p class="mt-4">
        {{ news[0].content }} As I reported at the time, researchers at
        Broadband Genie recently revealed that 86% of people had not changed
        their router admin credentials from the out-of-the-box factory defaults.
        Ever. Why is this a problem? Well, it means that I likely know what your
        admin credentials are. By this, I don’t mean just “admin” and
        “password,” as you might expect. Any half-savvy hacker knows how easy it
        is to find specific default credentials for almost any make and model of
        router. There are even search engines devoted to just this task. But it
        gets worse. Broadband Genie also reported that 56% of internet users had
        never re-configured any of the default router settings. None. 89% had
        never updated the router firmware either. Leaving any newly found
        vulnerabilities right there as they were in the factory. All of which
        explains why IBM’s X-Force threat intelligence analysts have issued the
        router reality check warning. “Why put the time and effort into creating
        phishing emails and stealing staff data,” Doug Bonderud, writing at the
        IBM X-Force Security Intelligence blog, said, “when supposedly secure
        devices can be accessed using admin and password as credentials?”
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { useNewsStore } from "../news.store";

const newStore = useNewsStore();
const route = useRoute();
const news = newStore.articles.filter((ele) => ele.id === route.params.id);
</script>
