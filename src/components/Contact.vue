<template>
  <section id="contact" class="py-16 scroll-mt-20 bg-amber-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-amber-950 mb-4">Contact Us</h2>
        <p class="text-gray-700 max-w-2xl mx-auto">
          Have a question or facing an issue? Send us a message and our team will get back to you as soon as possible.
        </p>
      </div>

      <div class="max-w-3xl mx-auto">
        <form @submit.prevent class="bg-white rounded-2xl shadow-xl p-8 border border-amber-100">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <!-- Name Field -->
            <div class="space-y-2">
              <label for="name" class="block text-sm font-semibold text-amber-900">Your Name</label>
              <div class="relative">
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe" 
                  class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-200"
                >
                <Icon icon="mdi:account" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <!-- Subject Field -->
            <div class="space-y-2">
              <label for="subject" class="block text-sm font-semibold text-amber-900">Subject</label>
              <div class="relative">
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="Order Inquiry" 
                  class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-200"
                >
                <Icon icon="mdi:tag" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
          </div>

          <!-- Issue / Message Field -->
          <div class="space-y-2 mb-8">
            <label for="issue" class="block text-sm font-semibold text-amber-900">Please describe your issue</label>
            <div class="relative">
              <textarea 
                id="issue" 
                rows="5" 
                placeholder="How can we help you today?" 
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-200 resize-none"
              ></textarea>
              <Icon icon="mdi:message-alert" class="absolute right-3 top-4 text-gray-400 w-5 h-5" />
            </div>
          </div>

          <div class="flex justify-center">
            <button class="px-10 py-4 bg-pink-900 text-white font-bold rounded-xl shadow-lg hover:bg-pink-700 hover:scale-[1.02] transition-all duration-300 flex items-center space-x-2">
              <span>Send Message</span>
              <Icon icon="mdi:send" class="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>

      <!-- Support Info -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
        <div class="p-6">
          <div class="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon icon="mdi:phone" class="text-pink-900 w-6 h-6" />
          </div>
          <h3 class="font-bold text-amber-900 mb-2">Call Support</h3>
          <p class="text-gray-600 text-sm">+1 (234) 567-890</p>
        </div>
        <div class="p-6">
          <div class="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon icon="mdi:email" class="text-pink-900 w-6 h-6" />
          </div>
          <h3 class="font-bold text-amber-900 mb-2">Email Us</h3>
          <p class="text-gray-600 text-sm">support@shopease.com</p>
        </div>
        <div class="p-6">
          <div class="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon icon="mdi:clock" class="text-pink-900 w-6 h-6" />
          </div>
          <h3 class="font-bold text-amber-900 mb-2">Working Hours</h3>
          <p class="text-gray-600 text-sm">Mon - Fri: 9AM - 6PM</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>
