<template>
  <h1>Pop Up Cookies</h1>
  <div class="d-flex justify-content-center mt-5 h-100">
    <div class="d-flex align-items-center align-self-center card p-3 text-center cookies">
      <img src="https://i.imgur.com/Tl8ZBUe.png" width="50" /><span class="mt-2"
        >We use third party cookies to personalize content, ads and analyze site
        traffic.</span
      ><a class="d-flex align-items-center" href="#"
        >Learn more<i class="fa fa-angle-right ml-2"></i
      ></a>
      <button class="btn btn-dark mt-3 px-4" type="button">Okay</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopUpCookiesComponent",
};
</script>

<style>
.card {
  width: 350px;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #d2d2dc;
  border-radius: 6px;
  -webkit-box-shadow: 0px 0px 5px 0px rgb(249, 249, 250);
  -moz-box-shadow: 0px 0px 5px 0px rgba(212, 182, 212, 1);
  box-shadow: 0px 0px 5px 0px rgb(161, 163, 164);
}

.cookies a {
  text-decoration: none;
  color: #000;
  margin-top: 8px;
}

.cookies a:hover {
  text-decoration: none;
  color: blue;
  margin-top: 8px;
}
</style>
