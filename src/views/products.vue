<script>
    import allCategories from "@/data/categories.json"
    export default {
        name: 'subdivisionListView',
        data() {
            return{
                categoriesData: allCategories,
                currentCategory: null
            }
        },
        computed: {
            currentCategoryId () {
                return parseInt(this.$route.params.categoryId)
            }
        },
            methods: {
            loadCategoryData(categoryId) {
            this.currentCategory = this.categoriesData.find(cat => cat.id === categoryId);
            },
            goToProductDetail(subdivisionId) {
            this.$router.push({ 
                name: 'productsDetails',
                params: { 
                    categoryId: parseInt(this.$route.params.categoryId), 
                    productId: parseInt(subdivisionId)
                }
            });
            }
        },
        mounted() {
            this.loadCategoryData(this.currentCategoryId);
        },
        watch: {
            currentCategoryId(newId) {
            this.loadCategoryData(newId); 
            }
        }
    }
</script>

<template>
  <div class="subdivision-list-view">
        <div class="header-section" v-if="currentCategory">
            <h1 class="category-title">{{ currentCategory.title }}</h1>
            <p class="category-subtitle">{{ currentCategory.subtitle }}</p>
            <div class="triangleProducts"></div>
        </div>
        <div class="subdivisions-container" v-if="currentCategory">
            <div
                v-for="sub in currentCategory.subdivisions"
                :key="sub.id"
                class="subdivision-card"
                @click="goToProductDetail(sub.id)"
            >
                <img :src="sub.images[0]" :alt="sub.name" class="product-image" />
                <div class="product-name">
                    <span>{{ sub.name }}</span>
                </div>
            </div>
        </div>
        <div v-else class="loading-message">
            Cargando datos o categoría no encontrada...
        </div>
  </div>
</template>

<style scoped>
    .subdivision-list-view {
        text-align: center;
        background-color: #b7e3ec;
        min-height: 80vh;
        padding-bottom: 100px;
    }
    .header-section {
        position: relative;
        padding: 100px 0 120px;
        background: linear-gradient(90deg, #6049d8 0%, #c44edb 50%, #f89fb6 100%);
        color: white;
    }
    .category-title {
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: italic;
        font-size: 4.5rem;
        margin: 0;
    }
    .category-subtitle {
        font-size: 1.7rem;
        opacity: 0.95;
        margin-top: 10px;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: italic;
    }
    .triangleProducts {
        position: absolute;
        bottom: -8%;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 40px solid transparent;
        border-right: 40px solid transparent;
        border-top: 40px solid #c44edb;
    }
    .subdivisions-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 80px 5px;
        justify-content: center;
        justify-items: center;
        align-items: center;
        margin-top: 100px;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
    }
    .subdivision-card {
        width: 350px;
        background: linear-gradient(90deg, #6049d8 0%, #c44edb 50%, #f89fb6 100%);
        height: 340px;
        aspect-ratio: 1 / 1;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .subdivision-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    }
    .product-image {
        border-radius: 19px;
        width: 100%;
        height: auto;
        object-fit: contain;
        filter: drop-shadow(0 6px 8px rgba(0, 0, 0, 0.2));
    }
    .product-name {
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(90deg, #f9a682, #f6d2b3);
        color: #fff;
        font-size: 1rem;
        border-radius: 12px;
        padding: 6px 25px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: italic;
    }
    .loading-message {
        color: #555;
        margin-top: 80px;
        font-size: 1.2rem;
    }

    @media (min-width: 1600px) {
        .category-title {
            font-size: 5rem;
        }

        .category-subtitle {
            font-size: 2rem;
        }

        .subdivision-card {
            width: 300px;
            height: 270px;
        }

        .product-name {
            font-size: 1.1rem;
        }
    } 


    @media (max-width: 1024px) {
        .header-section {
            padding: 80px 0 100px;
        }

        .category-title {
            font-size: 3.5rem;
        }

        .category-subtitle {
            font-size: 1.4rem;
        }

        .subdivisions-container {
            gap: 50px 20px;
            padding: 0 1.5rem;
        }

        .subdivision-card {
            width: 220px;
            height: 210px;
        }

        .product-name {
            font-size: 0.95rem;
        }
    }

    @media (max-width: 768px) {
        .header-section {
            padding: 70px 1rem 80px;
        }

        .category-title {
            font-size: 2.8rem;
        }

        .category-subtitle {
            font-size: 1.2rem;
        }

        .triangleProducts {
            bottom: -6%;
            border-left: 30px solid transparent;
            border-right: 30px solid transparent;
            border-top: 30px solid #c44edb;
        }

        .subdivisions-container {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            margin-top: 60px;
        }

        .subdivision-card {
            width: 180px;
            height: 180px;
        }

        .product-name {
            font-size: 0.9rem;
            padding: 5px 18px;
        }
    }

    @media (max-width: 480px) {
        .header-section {
            padding: 60px 0 70px;
        }

        .category-title {
            font-size: 2rem;
        }

        .category-subtitle {
            font-size: 1rem;
            margin-top: 5px;
        }

        .triangleProducts {
            bottom: -5%;
            border-left: 25px solid transparent;
            border-right: 25px solid transparent;
            border-top: 25px solid #c44edb;
        }

        .subdivisions-container {
            grid-template-columns: 1fr;
            gap: 30px;
            margin-top: 40px;
            padding: 0 1rem;
        }

        .subdivision-card {
            max-width: 95%;
            aspect-ratio: 4 / 5;
            border-radius: 15px;
        }

        .product-name {
            font-size: 0.85rem;
            padding: 5px 15px;
        }
    }

</style>