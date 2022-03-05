<!--Carousel #}-->
    <template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/Images/Cw-h6U7XgAAJvUy.jpg-large.jpeg" class="d-block w-100" alt="Oiseau sur l'océan">
          </div>
          <div class="carousel-item">
            <img src="../assets/Images/gettyimages-488915752-612x612.jpg" class="d-block w-100" alt="Surfeur">
          </div>
          <div class="carousel-item">
            <img src="../assets/Images/unnamed.jpg" class="d-block w-100" alt="Montagne">
          </div>
          <div class="carousel-item">
            <img src="../assets/Images/hyeres1.jpg" class="d-block w-100" alt="dune de sable et ciel bleu">
          </div>
          <div class="carousel-item">
            <img src="../assets/Images/hyeres2.jpg" class="d-block w-100" alt="coucher de soleil">
          </div>
          <div class="carousel-item">
            <img src="../assets/Images/hyeres5.jpg" class="d-block w-100" alt="coucher de soleil dans la mer">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </template>

      <script>
export default {
  name: 'CarouselComponent',
  props: {

  },
  data() {
      return {
      }
  } 
}
</script>