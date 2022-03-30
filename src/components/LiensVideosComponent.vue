<template>
<div>
  <h1 class="hero2 italic">Liens Vidéos</h1>
  <main>
    <br />
    <h2 class="italic">
      Voici quelques vidéos qui vous aiderons à comprendre mon approche :
    </h2>
    <br />
    <div v-for="video in videos" :key="video.id">
      <iframe
        :width="video.width || 560"
        :height="video.height || 315"
        :src="video.url"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </main>
</div>
</template>

<script>
export default {
  name: "LiensVideosComponent",
  setup() {
    const videos = [
      { url: "https://www.youtube.com/embed/87sNeRTYdPA" },
      { url: "https://www.youtube.com/embed/omfpbqDMDN4" },
      { url: "https://www.youtube.com/embed/weAQzjtxNPE" },
      { url: "https://www.youtube.com/embed/PDIJb2emVDY" },
      { url: "https://www.youtube.com/embed/EXtIEgOq4Xc" },
    ];
    return { videos };
  },
};
</script>

<style></style>
