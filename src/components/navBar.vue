<script>
    import SvgIcon from '@jamescoyle/vue-icon';
    import { mdiMagnify } from '@mdi/js';

    export default {
    name: "my-component",
    components: {
        SvgIcon
    },
    data() {
        return {
        path: mdiMagnify,
        }
    },
    methods: {
        gohome() {
            this.$router.push('/')
        },
          goToSection(sectionId) {
            this.$router.push({ path: '/', hash: `#${sectionId}` })
        }
    }
    }
</script>

<template>
  <div class="mainBoxNavBar">
    <div class="backgroundBox">
        <div class="leftBox">
            <div class="itemsLeftBox">
                <img 
                    src="../assets/images/LOGO_RIVERA.png" 
                    alt="LOGO_RIVERA" 
                    class="logoNavBar"
                    @click="gohome"
                >
            </div>
        </div>
        <div class="rightBox">
            <div class="itemsRightBox">
                <p @click="goToSection('history')">Nuestra Historia</p>
                <p @click="goToSection('products')">Productos</p>
                <p @click="goToSection('contact')">Contacto</p>
                <svg-icon 
                    type="mdi" 
                    :path="path"
                    :size = 20
                    style="color: #80808099;"
                    class="searchIcon"
                ></svg-icon>
            </div>
        </div>
    </div>
  </div>

</template>

<style scoped>
  .mainBoxNavBar {
    display: flex;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
  }
  .backgroundBox {
      width: 100%;
      height: 9vh;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      background-color: #580c93;
      overflow: visible;
    }
    .leftBox {
        display: flex;
        align-items:center;
    }
    .rightBox{
      display: flex;
      align-items: center;
      padding-right: 2%;
    }
    .itemsRightBox {
        display: flex;
        flex-direction: row;
        justify-content: baseline;
    }
    .itemsRightBox p {
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: italic;
        margin: 0;
        padding-right: 1.5vh;
        color: white;
        cursor: pointer;
    }
    .logoNavBar {
        width: 13vh;
        margin-bottom: -5vh;
        cursor: pointer;
    }
    .searchIcon {
        cursor: pointer;
    }
    @media (max-width: 1024px) {
        .backgroundBox {
            height: 10vh;
            padding: 0 3%;
        }

        .logoNavBar {
            width: 10vh;
        }

        .itemsRightBox p {
            font-size: 1.9vh;
            padding-right: 1vh;
        }
    }
    @media (max-width: 480px) {
        .backgroundBox {
            padding: 1vh 0;
        }

        .logoNavBar {
            width: 9vh;
        }

        .itemsRightBox p {
            font-size: 1.3vh;
        }
    }
</style>
