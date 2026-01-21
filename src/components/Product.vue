<template>
  <section class="py-12 scroll-mt-20 bg-gray-50" id="product">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <header class="flex justify-between items-center mb-10">
        <h2 class="md:text-3xl text-2xl font-bold text-amber-900">
          Featured Product
        </h2>

        <nav class="flex items-center space-x-4" aria-label="Product carousel controls">
          <button
            @click="prevSlide"
            class="p-3 rounded-full bg-white shadow-md hover:bg-pink-50 text-pink-600 transition-colors duration-200"
            aria-label="Previous Slide"
          >
            <Icon icon="line-md:arrow-small-left" width="24" height="24" />
          </button>
          <button
            @click="nextSlide"
            class="p-3 rounded-full bg-white shadow-md hover:bg-pink-50 text-pink-600 transition-colors duration-200"
            aria-label="Next Slide"
          >
            <Icon icon="line-md:arrow-small-right" width="24" height="24" />
          </button>
        </nav>
      </header>

      <!-- Carousel Container -->
      <div class="relative overflow-hidden">
        <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <li
            v-for="product in visibleProducts"
            :key="product.id"
            class="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
          >
            <article class="h-full flex flex-col">
              <figure class="relative">
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="w-full h-64 object-cover"
                />

                <!-- Discount Badge -->
                <span
                  v-if="product.discount > 0"
                  class="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm"
                >
                  -{{ product.discount }}%
                </span>

                <!-- Wishlist Button -->
                <button
                  class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-pink-50 transition-colors"
                  aria-label="Add to wishlist"
                >
                  <Icon icon="line-md:heart" width="20" height="20" class="text-gray-700" />
                </button>
              </figure>

              <div class="p-5 flex flex-col flex-grow">
                <!-- Rating -->
                <div class="flex items-center mb-3">
                  <Icon
                    v-for="i in 5"
                    :key="i"
                    icon="line-md:star-alt-filled"
                    width="16"
                    height="16"
                    :class="[
                      i <= Math.floor(product.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    ]"
                  />
                  <span class="text-sm text-gray-500 ml-2">({{ product.rating.toFixed(1) }})</span>
                </div>

                <!-- Name -->
                <h3 class="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
                  {{ product.name }}
                </h3>

                <!-- Price & Cart -->
                <div class="mt-auto flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="text-xl font-bold text-pink-600">
                      ${{ discountedPrice(product).toFixed(2) }}
                    </span>
                    <span
                      v-if="product.discount > 0"
                      class="text-sm text-gray-400 line-through"
                    >
                      ${{ product.price.toFixed(2) }}
                    </span>
                  </div>

                  <button
                    class="p-3 bg-pink-600 rounded-full text-white hover:bg-pink-700 transition-colors shadow-md"
                    aria-label="Add to cart"
                  >
                    <Icon icon="icon-park-solid:shopping-cart" width="20" height="20" />
                  </button>
                </div>
              </div>
            </article>
          </li>
        </ul>

        <!-- Pagination Dots -->
        <nav class="flex justify-center mt-10 space-x-3">
          <button
            v-for="index in totalSlides"
            :key="index"
            @click="currentSlide = index - 1"
            :class="[
              'w-3 h-3 rounded-full transition-all duration-300',
              currentSlide === index - 1
                ? 'bg-pink-600 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            ]"
            :aria-label="`Go to slide ${index}`"
          ></button>
        </nav>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

import product  from "../assets/hero.png"
import product2 from "../assets/product2.png"
import product3 from "../assets/product3.png"
import product4 from "../assets/product4.png"
import product5 from "../assets/product5.png"

const currentSlide = ref(0)
const productsPerPage = ref(4)

const products = [
  { id: 1, name: 'Floral',   price: 99.99, rating: 4.5, image: product,  discount: 3 },
  { id: 2, name: 'Oriental', price: 99.99, rating: 4.2, image: product2, discount: 1 },
  { id: 3, name: 'Woody',    price: 99.99, rating: 4.5, image: product3, discount: 0 },
  { id: 4, name: 'F',        price: 99.99, rating: 4.5, image: product4, discount: 4 },
  { id: 5, name: 'Floral',   price: 19.99, rating: 4.5, image: product5, discount: 7 },
  { id: 6, name: 'Floral',   price: 99.99, rating: 4.5, image: product,  discount: 2 },
  { id: 7, name: 'Floral',   price: 99.99, rating: 4.5, image: product2, discount: 1 },
  { id: 8, name: 'Floral',   price: 99.99, rating: 4.5, image: product3, discount: 0 },
]

const totalSlides = computed(() => {
  if (productsPerPage.value <= 0) return 1
  return Math.ceil(products.length / productsPerPage.value)
})

const visibleProducts = computed(() => {
  const start = currentSlide.value * productsPerPage.value
  return products.slice(start, start + productsPerPage.value)
})

const nextSlide = () => {
  currentSlide.value = currentSlide.value === totalSlides.value - 1
    ? 0
    : currentSlide.value + 1
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0
    ? totalSlides.value - 1
    : currentSlide.value - 1
}

const discountedPrice = (product) => {
  return product.price * (1 - product.discount / 100)
}

const updateProductsPerPage = () => {
  const w = window.innerWidth
  if      (w < 640)  productsPerPage.value = 1
  else if (w < 768)  productsPerPage.value = 2
  else if (w < 1024) productsPerPage.value = 3
  else               productsPerPage.value = 4
}

onMounted(() => {
  updateProductsPerPage()
  window.addEventListener('resize', updateProductsPerPage)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateProductsPerPage)
})
</script>