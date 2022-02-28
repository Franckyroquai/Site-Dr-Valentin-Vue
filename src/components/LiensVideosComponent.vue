<template>
  <h1 class="is">
    Liens Viédos
  </h1>
  <br>
  <article>
    Voici quelques vidéos qui vous aiderons à comprendre mon approche :
  </article>
  <br>
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
</template>

<script>
export default {
  name: 'LiensVideosComponent', /*
  le nom du composant
  dans le html du parent il se "source" de la maniere suivante : <liensvideos-component>
  dans le scripting (JS) du parent il se declare avec LiensVideosComponent et doit etre importé
  */
  
  setup() {
      const videos = [
          {url:"https://www.youtube.com/embed/87sNeRTYdPA"},
          {url:"https://www.youtube.com/embed/omfpbqDMDN4"},
          {url:"https://www.youtube.com/embed/weAQzjtxNPE"},
          {url:"https://www.youtube.com/embed/PDIJb2emVDY"},
          {url:"https://www.youtube.com/embed/EXtIEgOq4Xc"},
          ]
          return {videos};
  },
}
</script>

<style>
/* ici le css */
</style>
