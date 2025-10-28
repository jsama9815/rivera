<script>
    import Slider from '@/components/slider.vue';
    import SvgIcon from '@jamescoyle/vue-icon';
    import { mdiHalloween, mdiStringLights, mdiArrowRightCircle } from '@mdi/js';
    import categoriesData from "@/data/categories.json"


    const mdiIconMap = {
        mdiHalloween: mdiHalloween,
        mdiStringLights: mdiStringLights
    }
    export default {
        name: "my-component",
        components: {
            SvgIcon,
            Slider
        },
        data() {
            return {
                categories: [],
                mdiArrowRightCircle: mdiArrowRightCircle
            }
        },
        created() {
            this.categories = categoriesData.map(category => ({
                ...category,
                iconPath: mdiIconMap[category.iconName]
            }))
        }
    }
</script>


<template>
    <div class="mainBoxHome">
        <div class="mainBoxSlider">
            <Slider></Slider>
        </div>
        <div class="aboutUsBox">
            <div class="dulcesQueNacenDelCorazonBox" id="history">
                <div class="dulcesImageBox">
                    <img src="../assets/images/dulces_que_nacen.png" 
                        alt="dulcesquenacendelcorazon" 
                        class="aboutUsImg"
                    >
                </div>
                <div class="textImageBox">
                          <p class="texto">
                            Somos tres hermanos que, en 2017, empezamos a crear bombones en una cocina llena
                            de ideas y mucho amor.
                            <strong>Así nació Riveraljrs</strong>, una marca hecha en familia, con el deseo
                            de transformar cada dulce en una experiencia única.
                        </p>

                        <p class="texto">
                            <strong>Desde el primer día, nos propusimos algo claro:</strong>
                            que cada bombón tenga personalidad, sabor inolvidable y un toque artesanal que lo haga especial.
                        </p>

                        <p class="texto">
                            <strong>Hoy seguimos creciendo, con el mismo sueño:</strong>
                            compartir alegría, sin perder la esencia que nos une.
                        </p>
                </div>
                <div class="categoriesBox">
                    <router-link
                        v-for="category in categories"
                        :key="category.id"
                        :to="{ name: 'products', params: { categoryId: category.id } }"
                        class="categoryCard"
                        :style="{ backgroundImage: `url(${category.image})` }"
                        >
                        <div class="textCategory">
                            <h3 class="categoryTitle">{{ category.title }}</h3>
                            <p class="categorySubtitle"> {{ category.subtitle }}</p>
                        </div>
                    <div class="overlay">
                        <div class="categoryContentBox" id="products">
                                <!-- <div class="iconOfCategories">
                                    <svg-icon type="mdi" :path="category.iconPath"></svg-icon>
                                </div> -->
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="ourProductsBox" >
                    <div class="ourProductsInformationBox">
                        <h2 class="titleOurProducts" >Nuestros productos</h2>
                        <p class="mainInformationOurProducts">
                            Desde la investigación de tendencias hasta el diseño de producto y su
                            producción, cada dulce que elaboramos es el resultado de un proceso
                            meticuloso, pensando para sorprender y deleitar.
                        </p>
                        <p class="secondaryInformationOurProducts">
                            Innovamos para que disfrutes lo mejor de la tradición con un toque de
                            modernidad.
                        </p>
                        <button class="catalogButton">
                            Descarga Nuestro Catálogo
                            <svg-icon 
                                class="arrowIcon"
                                type="mdi" 
                                :path="mdiArrowRightCircle"
                            >
                            </svg-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .mainBoxHome {
        width: 100%;
        overflow: hidden;
    }
    .dulcesQueNacenDelCorazonBox {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color:#c9e6f0;
    }
    .dulcesImageBox {
        display: flex;
        justify-content: center;
    }
    .aboutUsImg {
        padding-top: 5%;
        width: 30%;
        height: auto;
    }
    .textImageBox {
        width: 100%;
        max-width: 820px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        align-items: center;
        padding: 4rem 2rem;
        color: #4a1e83;
    }
    .texto {
        width: 100%;
        max-width: 740px;
        margin: 0.8rem auto;
        line-height: 1;
        font-size: 1.2rem;
        text-align: center;
    }
    .categoriesBox {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.4rem;
        width: 90%;
        max-width: 1100px;
    } 
    .categoryCard {
        position: relative;
        width: 500px;
        height: 260px;
        border-radius: 10px;
        overflow: hidden;
        background-size: cover;
        background-position: center;
        cursor: pointer;
        transition: transform 0.3s ease;
        cursor: pointer;
    }
    .categoryCard:hover {
        transform: scale(1.02);
    }
    .textCategory {
        position: absolute;
        bottom: 5%;
        left: 0;
        right: 0;
        text-align: center;
    }
    .overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(255, 118, 164, 0.5) 30%, rgba(255, 118, 164, 0.1) 90%);
        opacity: 0;
        transition: opacity 0.4s ease;
    }
    .categoryCard:hover .overlay {
        opacity: 1;
    }
    .categoryContentBox {
        position: absolute;
        bottom: 20%;
        width: 100%;
        text-align: center;
        color: #fff;
        transition: transform 0.4s ease;
    }
    .categoryCard:hover .categoryContentBox {
        transform: translateY(-10px);
    }
    .categoryTitle {
        color: white;
        font-size: 2.5em; 
        font-weight: bold;
        margin: 0 0 5px 0; /* Espacio debajo del título */
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra para mejor lectura */
    }

    .categorySubtitle {
        color: white;
        font-size: 1.1em;
        margin: 0;
        opacity: 0.9;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); /* Sombra para mejor lectura */
    }
    .ourProductsBox {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px 20px;
        text-align: center;
        font-family: Arial, sans-serif;
    }
    .ourProductsInformationBox {
        max-width: 800px;
    }
    .titleOurProducts {
        font-size: 3em;
        color: #313178;
        margin-bottom: 20px;
        font-weight: bold;
    }
    .mainInformationOurProducts {
        font-size: 1.2em;
        color: #4a1e83;
        line-height: 1.6;
        margin-bottom: 20px;
    }
    .secondaryInformationOurProducts {
        font-size: 1.2em;
        color: #4a1e83;
        line-height: 1.6;
        font-style: italic;
        margin-bottom: 40px;
    }
    .catalogButton {
        background-color: transparent;
        border: 1px solid #6a0dad;
        color: #6a0dad;
        padding: 15px 18px;
        font-size: 1.1em;
        border-radius: 50px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }
    .catalogButton:hover {
        background-color: #6a0dad;
        color: white;
    }
    .arrowIcon {
        margin-left: 15px;
        width: 1.5em; 
        height: 1.5em;
        color: white;
    }

</style>
