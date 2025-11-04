<script>
import allCategories from "@/data/categories.json"

export default {
  name: 'ProductDetailView',
  data() {
    return {
      categoriesData: allCategories,
      currentProduct: null,
      currentCategory: null,
      selectedImage: null
    }
  },
  computed: {
    currentCategoryId() {
      return parseInt(this.$route.params.categoryId)
    },
    currentProductId() {
      return parseInt(this.$route.params.productId)
    }
  },
  methods: {
    loadProductData(catId, prodId) {
      if (!catId || !prodId || isNaN(catId) || isNaN(prodId)) {
        this.currentProduct = null
        this.currentCategory = null
        this.selectedImage = null
        return
      }
      const category = this.categoriesData.find(cat => cat.id === catId)
      if (category) {
        this.currentCategory = category
        const product = category.subdivisions.find(sub => sub.id === prodId)
        this.currentProduct = product
        this.selectedImage = product?.images[0] || null
      } else {
        this.currentCategory = null
        this.currentProduct = null
        this.selectedImage = null
      }
    },
    changeMainImage(image) {
      this.selectedImage = image
    }
  },
  watch: {
    '$route.params': {
      immediate: true,
      handler(newParams) {
        const catId = parseInt(newParams.categoryId)
        const prodId = parseInt(newParams.productId)
        this.loadProductData(catId, prodId)
      }
    }
  }
}
</script>

<template>
  <div class="product-detail-view" v-if="currentProduct && currentCategory">
        <section class="halloween-header">
            <h1>{{ currentCategory.title }}</h1>
            <p>{{ currentCategory.subtitle }}</p>
            <div class="header-notch"></div>
        </section>
        <section class="product-section">
            <div class="breadcrumbs">
                <router-link to="/" class="breadcrumb-link">Inicio</router-link>
                <span> > </span>
                <router-link
                    :to="{ name: 'products', params: { categoryId: currentCategory.id } }"
                    class="breadcrumb-link"
                >
                    {{ currentCategory.title }}
                </router-link>
                <span> > </span>
                <span class="breadcrumb-current">{{ currentProduct.name }}</span>
            </div>
            <div class="content-grid">
                <div class="left-side">
                    <div class="thumbs">
                        <img
                            v-for="(img, i) in currentProduct.images"
                            :key="i"
                            :src="img"
                            class="thumb"
                            :class="{ active: img === selectedImage }"
                            @click="changeMainImage(img)"
                        />
                    </div>

                    <div class="main-img-box">
                        <img :src="selectedImage" :alt="currentProduct.name" class="main-img" />
                    </div>

                    <p class="flavor-text">
                            {{ currentProduct.flavor }} | Cantidad: {{ currentProduct.quantity }}
                    </p>
                </div>
                <div class="right-side">
                    <h2>{{ currentProduct.name }}</h2>

                    <table class="nutrition-table">
                        <thead>
                            <tr>
                                <th>Por 100g Contenido energético:</th>
                                <th class="align-right">kcal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(value, key) in currentProduct.nutrition" :key="key">
                                <td>{{ key }}</td>
                                <td class="align-right">{{ value }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p class="nutrition-note">
                        La información nutrimental declarada equivale a consumir 10 piezas de 10g.
                    </p>
                </div>
            </div>
        </section>
  </div>

  <div v-else class="loading-message">
    Cargando detalle del producto o no encontrado...
  </div>
</template>

<style scoped>
    .product-detail-view {
        font-family: "Poppins", sans-serif;
        background-color: #b7e3ec;
        margin: 0;
        padding-bottom: 80px;
        color: #333;
    }
    .halloween-header {
        background: linear-gradient(135deg, #673ab7, #9c27b0, #ff4081);
        color: white;
        text-align: center;
        padding: 60px 20px 60px;
        position: relative;
        margin: 0;
    }
    .halloween-header h1 {
        font-size: 3rem;
        margin: 0;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: italic;
    }
    .halloween-header p {
        font-size: 1.2rem;
        margin-top: 8px;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: italic;
    }
    .header-notch {
        position: absolute;
        bottom: -15%; 
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 40px solid transparent;
        border-right: 40px solid transparent;
        border-top: 40px solid #9c27b0;
    }
    .product-section {
        margin-top: 40px; 
    }
    .breadcrumbs {
        margin: 20px 10%;
        font-size: 0.95rem;
        color: #555;
    }
    .breadcrumb-link {
        color: #4a1e83;
        text-decoration: none;
        transition: color 0.3s;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: italic;
    }
    .breadcrumb-link:hover {
        color: #6a0dad;
        text-decoration: underline;
    }
    .content-grid {
        display: grid;
        grid-template-columns: 1.3fr 1fr;
        gap: 60px;
        align-items: start;
        margin: 0 10% 80px;
    }
    .left-side {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .thumbs {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
    }
    .thumb {
        width: 70px;
        height: 70px;
        border-radius: 10px;
        border: 2px solid #ccc;
        background: white;
        object-fit: contain;
        cursor: pointer;
    }
    .main-img-box {
        background: linear-gradient(135deg, #ffb5e8, #a082ff);
        padding: 25px;
        border-radius: 25px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }
    .main-img {
        width: 100%;
        max-width: 350px;
        object-fit: contain;
    }
    .flavor-text {
        margin-top: 10px;
        color: #444;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: italic;
        font-size: 1rem;
    }
    .right-side {
        text-align: left;
    }
    .right-side h2 {
        color: #3a2478;
        font-size: 2rem;
        margin-bottom: 20px;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: italic;
    }
    .nutrition-table {
        width: 100%;
        border-collapse: collapse;
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    .nutrition-table thead {
        background: #3a2478;
        color: white;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: italic;
    }
    .nutrition-table th,
    .nutrition-table td {
        padding: 10px 15px;
    }
    .nutrition-table td {
        border-top: 1px solid #eee;
        color: #444;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: italic;
    }
    .align-right {
        text-align: right;
    }
    .nutrition-note {
        margin-top: 10px;
        text-align: right;
        color: #555;
        font-size: 0.9rem;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: italic;
    }

    @media (max-width: 900px) {
    .content-grid {
        grid-template-columns: 1fr;
        gap: 40px;
        margin: 0 5% 60px;
    }

    .right-side {
        text-align: center;
    }

    .nutrition-note {
        text-align: center;
    }
    }
</style>