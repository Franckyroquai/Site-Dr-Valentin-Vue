<template>
    <header>
        <div class="header-left">
            <p id="veronique">Dr Véronique Valentin</p>
        </div>
        <div class="header-center">
            <p>7rue alexandre Castueil</p>
            <p>83400 Hyères</p>
        </div>
        <div class="header-right">
            <a href="tel:+33686978613">Téléphone: 06 86 97 86 13</a> 
        </div>
    </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style>
#veronique{
font-family: 'Rock Salt', cursive;
}

header{
    position: relative;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 10em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-image: url(../assets/Images/5591317.jpg);
    color: gray;
}
</style>

