<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import img1 from "/images/carousel/carousel1.png"
  import img2 from "/images/carousel/carousel2.png"
  import img3 from "/images/carousel/carousel3.png"

  const images = [img1,img2,img3 ]

  const currentIndex = ref(0);
  let intervalId = null

  function startSlider() {
    clearInterval(intervalId)
    intervalId = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % images.length
    }, 3000)
  }
  onMounted(() => {
    startSlider()
  })

  onUnmounted(() => {
    clearInterval(intervalId);
  })

  function goToImage(index) {
    currentIndex.value = index
    startSlider()
  }
</script>

<template>
  <div class="mainBoxSlider">
    <div class="sliderImages">
      <img
        v-for="(img, index) in images"
        :key="index"
        :src="img"
        :alt="'Imagen ' + (index + 1)"
        :class="{ active: index === currentIndex }"
      />
    </div>
    <div class="sliderButtons">
      <button
        v-for="(img, index) in images"
        :key="index"
        @click="goToImage(index)"
        :class="{ active: index === currentIndex }"
      ></button>
    </div>
  </div>
</template>

<style scoped>
  .mainBoxSlider {
    width: 100%;
    height: 75vh;
    position: relative;
    overflow: hidden;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  }
  .sliderImages img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
    .sliderImages img.active {
      opacity: 1;
  }
  .sliderButtons {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
  }
  .sliderButtons button {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: none;
    background-color: black;
    opacity: 0.6;
    cursor: pointer;
    transition: opacity 0.3s;
  }
  .sliderButtons button.activate,
  .sliderButtons button:hover {
    opacity: 1;
  }
  @media (max-width: 1024px) {
    .mainBoxSlider {
      height: 60vh;
      border-radius: 8px;
    }

    .sliderButtons button {
      width: 14px;
      height: 14px;
    }
  }
  @media (max-width: 768px) {
    .mainBoxSlider {
      height: 45vh;
      border-radius: 8px;
    }

    .sliderButtons {
      bottom: 10px;
      gap: 8px;
    }

    .sliderButtons button {
      width: 12px;
      height: 12px;
    }
  }

  @media (max-width: 480px) {
    .mainBoxSlider {
      height: 35vh;
      border-radius: 6px;
    }

    .sliderButtons {
      bottom: 8px;
      gap: 6px;
    }

    .sliderButtons button {
      width: 10px;
      height: 10px;
    }
  }
  
  @media (min-width: 1600px) {
    .mainBoxSlider {
      height: 80vh;
    }

    .sliderButtons button {
      width: 18px;
      height: 18px;
    }
  }
</style>
