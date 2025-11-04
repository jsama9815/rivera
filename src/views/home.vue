<script>
    import Slider from '@/components/slider.vue';
    import SvgIcon from '@jamescoyle/vue-icon';
    import { mdiHalloween, mdiStringLights, mdiArrowRightCircle } from '@mdi/js';
    import categoriesData from "@/data/categories.json"


    const mdiIconMap = {
        mdiHalloween: mdiHalloween,
        mdiStringLights: mdiStringLights
    };

    export default {
        name: "my-component",
        components: {
            SvgIcon,
            Slider
        },
        data() {
            return {
                categories: [],
                mdiArrowRightCircle: mdiArrowRightCircle,
                showWelcome: false,
                hideTimeout: null
            }
        },
        created() {
            this.categories = categoriesData.map(category => ({
                ...category,
                iconPath: mdiIconMap[category.iconName]
            }))
        },
        mounted() {
            const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");

            if(!hasSeenWelcome) {
                this.showWelcome = true;
                this.hideTimeout = setTimeout(() => {
                    this.closeWelcome();
                }, 10000);

                localStorage.setItem("hasSeenWelcome", "true")
            }

            document.addEventListener("click", this.handleClicksOutside)
        },
        beforeUnmount() {
            document.removeEventListener("click", this.handleClicksOutside)
            if (this.hideTimeout) clearTimeout(this.hideTimeout);
        },
        methods: {
            closeWelcome() {
                this.showWelcome = false;
                if (this.hideTimeout) clearTimeout(this.hideTimeout)
            },
            handleClicksOutside(event) {
                const imageElement = this.$refs.welcomeImage;
                if(this.showWelcome && imageElement && !imageElement.contains(event.target)) {
                    this.closeWelcome()
                }
            }
        }
    }
</script>


<template>
    <div class="mainBoxHome">
        <div
            v-if="showWelcome"
            class="welcomeOverlay"
        >
            <div class="welcomeContent">
                <img 
                    ref="welcomeImage"
                    src="../assets/images/bienvenida.png" 
                    alt="Bienvenida"
                    class="welcomeImage"                
                >
            </div>
        </div>
        <div class="mainBoxSlider">
            <Slider></Slider>
        </div>
        <div class="separation">
            <div class="triangle"></div>
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

                        <p class="texto"  id="products">
                            <strong>Hoy seguimos creciendo, con el mismo sueño:</strong>
                            compartir alegría, sin perder la esencia que nos une.
                        </p>
                </div>
                <div class="ourProductsBox">
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
                                    <div class="categoryContentBox">
                                        <!-- <div class="iconOfCategories">
                                            <svg-icon type="mdi" :path="category.iconPath"></svg-icon>
                                        </div> -->
                                    </div>
                                </div>
                            </router-link>
                        </div>
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
    .separation {
        width: 100%;
        height: 80px; 
        background-color: white;
        position: relative
    }
    .triangle {
        position: absolute;
        bottom: -50%; 
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 40px solid transparent;
        border-right: 40px solid transparent;
        border-top: 40px solid white;
    }
    .welcomeOverlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        animation: fadeIn 0.5s ease;
    }
    .welcomeContent {
        position: relative;
    }
    .welcomeImage {
        max-width: 80%;
        max-height: 50vh;
        border-radius: 10px;
        animation: zoomIn 0.5s ease;
        cursor: default;
    }
    .dulcesQueNacenDelCorazonBox {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color:#b7e3ec;
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
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 300;
        font-style: italic;
    }
    .categoriesBox {
        display: flex;
        flex-direction: row;  
        justify-content: center;  
        align-items: stretch;  
        gap: 2rem;             
        white-space: nowrap;      
        padding: 1rem 0;
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
        margin: 0 0 5px 0;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    .categorySubtitle {
        color: white;
        font-size: 1.1em;
        margin: 0;
        opacity: 0.9;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    }
    .ourProductsBox {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px 20px;
        text-align: center;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: italic;
        width: 100%;
    }
    .ourProductsInformationBox {
        max-width: 800px;
    }
    .titleOurProducts {
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: italic;
        font-size: 3em;
        color: #313178;
        margin-bottom: 20px;
        font-weight: bold;
    }
    .mainInformationOurProducts {
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: italic;
        font-size: 1.2em;
        color: #4a1e83;
        line-height: 1.6;
        margin-bottom: 20px;
    }
    .secondaryInformationOurProducts {
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: italic;
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
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: italic;
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
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes zoomIn {
        from { transform: scale(0.8); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }


    @media (max-width: 1024px) {
        .aboutUsImg {
            width: 40%;
            padding-top: 10%;
        }

        .categoryCard {
            width: 400px;
            height: 230px;
        }

        .categoryTitle {
            font-size: 2em;
        }

        .titleOurProducts {
            font-size: 2.5em;
        }

        .mainInformationOurProducts,
        .secondaryInformationOurProducts {
            font-size: 1.1em;
        }
    }


    @media (max-width: 768px) {
        .aboutUsImg {
            width: 60%;
            padding-top: 11%;
        }

        .textImageBox {
            padding: 2.5rem 1.5rem;
        }

        .texto {
            font-size: 1rem;
            line-height: 1.5;
        }

        .categoriesBox {
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
        }

        .categoryCard {
            width: 90%;
            height: 220px;
        }

        .categoryTitle {
            font-size: 1.8em;
        }

        .titleOurProducts {
            font-size: 2.2em;
        }

        .mainInformationOurProducts,
        .secondaryInformationOurProducts {
            font-size: 1em;
        }

        .catalogButton {
            padding: 12px 16px;
            font-size: 1em;
        }
    }

    @media (max-width: 480px) {
        .aboutUsImg {
            width: 75%;
            padding-top: 12%;
        }

        .textImageBox {
            padding: 2rem 1rem;
        }

        .texto {
            font-size: 0.95rem;
        }

        .categoryCard {
            width: 100%;
            height: 200px;
        }

        .categoryTitle {
            font-size: 1.6em;
        }

        .categorySubtitle {
            font-size: 0.9em;
        }

        .titleOurProducts {
            font-size: 1.8em;
        }

        .mainInformationOurProducts,
        .secondaryInformationOurProducts {
            font-size: 0.95em;
        }

        .catalogButton {
            padding: 10px 14px;
            font-size: 0.9em;
        }
    }

    @media (min-width: 1600px) {
        .aboutUsImg {
            width: 25%;
        }

        .categoryCard {
            width: 550px;
            height: 300px;
        }

        .categoryTitle {
            font-size: 3em;
        }

        .titleOurProducts {
            font-size: 3.5em;
        }

        .texto {
            font-size: 1.3rem;
        }
    }
</style>
