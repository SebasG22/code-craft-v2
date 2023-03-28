<script setup lang="ts">
import Header from './components/Header.vue';
import List from './pages/List.vue';
import Cart from './pages/Cart.vue';
import { shallowRef } from 'vue';
import { useItems } from './composition/useItems';

let current = shallowRef(List);

const { cartList } = useItems();

const handleMenuSelected = (menuId: string) => {
  switch (menuId) {
    case '/':
      current.value = shallowRef(List).value;
      break;
    case '/cart':
      current.value = shallowRef(Cart).value;
    default:
      break;
  }
};
</script>

<template>
  <div className="page">
    <Header
      :totalItems="cartList.cart.totalItems"
      @menu-selected="handleMenuSelected"
    />
    <KeepAlive>
      <component :is="current"></component>
    </KeepAlive>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  display: grid;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 100px;
}

button {
  border: 4px solid black;
  background: antiquewhite;
  margin: 0 6px;
}
button:hover {
  border-color: goldenrod;
  color: goldenrod;
}
:deep(.pay) {
  display: block;
  right: 10px;
  bottom: 10px;
  align-self: flex-end;
}
:deep(.pay-container) {
  position: fixed;
  bottom: 0px;
  right: 10px;
}
@media (min-width: 500px) {
  ul {
    grid-template-columns: repeat(2, auto);
  }
}
@media (min-width: 800px) {
  ul {
    grid-template-columns: repeat(3, auto);
  }
}
li {
  padding: 10px 20px;
}
li:hover h4 {
  color: goldenrod;
}
li h4 {
  /* text-align: center; */
  margin: 10px 0;
  font-size: 1rem;
}
</style>
