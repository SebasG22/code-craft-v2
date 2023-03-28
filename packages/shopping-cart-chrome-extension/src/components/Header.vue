<script lang="ts" setup>
import { ref } from 'vue';
defineProps({
  totalItems: Number,
});

const selectedItem = ref('/');

const emit = defineEmits<{
  (event: 'menu-selected', item: string): void;
}>();

const handleMenuChange = (item: string) => {
  selectedItem.value = item;
  emit('menu-selected', selectedItem.value);
};
</script>

<template>
  <ul class="header">
    <li>
      <button
        aria-label="Menu page"
        :class="{ link: true, active: selectedItem === '/' }"
        @click="handleMenuChange('/')"
      >
        menu
      </button>
    </li>
    <li>
      <button
        aria-label="Cart page"
        :class="{ link: true, active: selectedItem.startsWith('/cart') }"
        @click="handleMenuChange('/cart')"
      >
        cart ({{ totalItems }})
      </button>
    </li>
    <li>
      <button
        aria-label="GitHub page"
        :class="{ link: true, active: selectedItem.startsWith('/github') }"
        @click="handleMenuChange('/github')"
      >
        github
      </button>
    </li>
  </ul>
</template>

<style scoped>
button {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
}

.header {
  display: flex;
  justify-content: center;
  border-bottom: 4px solid black;
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 1;
  background: rgb(250, 255, 255);
  margin-block: 0;
}

li {
  list-style: none;
  padding: 10px 10px;
}
.link {
  color: black;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
}
.link:hover {
  color: grey;
  text-decoration: none;
  border-bottom: 1px dotted grey;
}
.link.active {
  color: goldenrod;
  border-bottom: 1px dotted goldenrod;
}
@media (min-width: 270px) {
  li {
    padding: 10px 20px;
  }
  .link {
    font-size: 1.2rem;
  }
}
</style>
