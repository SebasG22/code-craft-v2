<script setup lang="ts">
import Cup from '../components/Cup.vue';
import Pay from '../components/Pay/Pay.vue';
import { ref } from 'vue';
import { useItems } from '../composition/useItems';

const modalRef = ref();
const selectedCoffee = ref();

const { itemList, addItemToShopping } = useItems();

const execute = (item: any) => {
  selectedCoffee.value = item;
  modalRef.value?.showModal();
};
</script>

<template>
  <main>
    <section class="container">
      <div>
        <ul>
          <li v-for="item in itemList.list" :key="item.id">
            <h4>
              {{ item.name }}
              <br />
              <small>{{ item.price }}</small>
            </h4>
            <div
              @contextmenu.prevent="execute(item)"
              @click="addItemToShopping(item.id)"
            >
              <Cup :item="item" />
            </div>
          </li>
        </ul>
        <Pay :isDisablePreview="false" />
      </div>

      <dialog ref="modalRef">
        <p>
          Add <strong>{{ selectedCoffee?.name }}</strong> to the cart?
        </p>
        <form method="dialog">
          <button @click="addItemToShopping(selectedCoffee?.id)">Yes</button>
          <button>No</button>
        </form>
      </dialog>
    </section>
  </main>
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
