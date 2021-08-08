<template>
  <header class="bg-gray-bgheader font-circularstd">
    <nav class="flex flex-col lg:flex-row lg:items-center">
      <div class="flex flex-row">
        <img
        src="../assets/header/hitmarker.svg"
        class="object-contain h-29.5 w-167 md:pl-134 md:pt-45 ml-3 pt-3"
      />
      <div @click="isOpen = !isOpen" class="flex lg:invisible flex-1 justify-end">
        <i v-if="!isOpen"  class="fas fa-bars text-white text-2xl mr-3 pt-3"></i>
        <i v-if="isOpen" class="fas fa-times text-white text-2xl mr-3 pt-3"></i>
      </div>
      </div>
      
      <ul
        :class="isOpen ? 'visible' : 'invisible'"
        class="text-white text-sm2 text-center gap-38 flex flex-col lg:flex-row flex-1 pt-49 lg:visible lg:justify-center lg:items-center"
      >
        <li><a href="#" class="">Find a job</a></li>
        <li><a href="#" class="">Post a job</a></li>
        <li><a href="#" class="">Career advice</a></li>
      </ul>
      
      <ul
        :class="isOpen ? 'visible' : 'invisible -mb-262'"
        class="text-white text-sm2  lg:mb-0 flex-row flex justify-center lg:visible lg:flex-2 lg:justify-end mt-50 lg:mr-135 gap-12px lg:gap-0"
      >
        <li><a href="#" class="">Login</a></li>
        <li>
          <a href="#" class=" lg:ml-25px button px-12px py-8px lg:py-9px lg:pr-15 lg:pl-14">Create Account</a>
        </li>
      </ul>
      
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isOpen: false,
    }
  }
};
</script>
