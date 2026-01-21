<template>
  <footer class="bg-pink-950 text-white py-12 px-4 md:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Brand Info -->
        <div class="space-y-4">
          <a href="/" class="text-2xl font-bold text-pink-400">ShopEase</a>
          <p class="text-pink-100/80 leading-relaxed">
            Premium fragrances and luxury perfumes since 2001. We bring you the world's most exquisite scents delivered right to your doorstep.
          </p>
          <div class="flex space-x-4 pt-4">
            <a href="#" class="p-2 bg-pink-900 rounded-full hover:bg-pink-600 transition-colors">
              <Icon icon="mdi:facebook" class="w-5 h-5" />
            </a>
            <a href="#" class="p-2 bg-pink-900 rounded-full hover:bg-pink-600 transition-colors">
              <Icon icon="mdi:instagram" class="w-5 h-5" />
            </a>
            <a href="#" class="p-2 bg-pink-900 rounded-full hover:bg-pink-600 transition-colors">
              <Icon icon="mdi:twitter" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-6 border-b border-pink-800 pb-2">Quick Links</h3>
          <ul class="space-y-3">
            <li v-for="item in navItems" :key="item.id">
              <a :href="item.link" class="text-pink-100/80 hover:text-white hover:translate-x-1 transition-all inline-block">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-6 border-b border-pink-800 pb-2">Contact Us</h3>
          <ul class="space-y-4">
            <li class="flex items-start space-x-3 text-pink-100/80">
              <Icon icon="mdi:map-marker" class="w-5 h-5 text-pink-400 mt-1" />
              <span>123 Perfume Blvd,<br>Fragrance District, NY 10001</span>
            </li>
            <li class="flex items-center space-x-3 text-pink-100/80">
              <Icon icon="mdi:phone" class="w-5 h-5 text-pink-400" />
              <span>+1 (234) 567-890</span>
            </li>
            <li class="flex items-center space-x-3 text-pink-100/80">
              <Icon icon="mdi:email" class="w-5 h-5 text-pink-400" />
              <span>support@shopease.com</span>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="text-lg font-semibold mb-6 border-b border-pink-800 pb-2">Newsletter</h3>
          <p class="text-pink-100/80 mb-4">Subscribe to receive updates and exclusive offers.</p>
          <form class="flex flex-col space-y-3" @submit.prevent>
            <input 
              type="email" 
              placeholder="Your email address" 
              class="px-4 py-2 bg-pink-900/50 border border-pink-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
            >
            <button class="px-4 py-2 bg-pink-600 hover:bg-pink-500 font-semibold rounded-lg transition-colors text-sm">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div class="mt-16 pt-8 border-t border-pink-900 text-center text-pink-200/50 text-sm">
        <p>&copy; {{ new Date().getFullYear() }} ShopEase. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from '@iconify/vue';

const navItems = [
  { id: 1, name: 'Home', link: '#home' },
  { id: 2, name: 'Product', link: '#product' },
  { id: 3, name: 'Categories', link: '#categories' },
  { id: 4, name: 'Offers', link: '#offers' },
  { id: 5, name: 'About', link: '#about' },
  { id: 6, name: 'Contact', link: '#contact' },
];
</script>
