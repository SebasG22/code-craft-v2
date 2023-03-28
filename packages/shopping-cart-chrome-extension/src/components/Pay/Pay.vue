<script lang="ts" setup>
import { ref } from 'vue';
import { useItems } from '../../composition/useItems';

const props = defineProps({
  isDisablePreview: Boolean,
});

const dialogRef = ref<HTMLDivElement>();

const togglePreview = () => {
  if (props.isDisablePreview) return;
  dialogRef.value?.classList.toggle('show');
};

const pay = () => {
  console.warn('Pay');
};

const { cartList, addItemToShopping, removeOneItemFromCart } = useItems();
</script>

<template>
  <div class="pay-container" @mouseleave="togglePreview">
    <ul
      class="cart-preview"
      v-if="cartList.cart.totalItems > 0"
      ref="dialogRef"
    >
      <li
        v-for="item in cartList.cart.items"
        :key="item.type.id"
        class="list-item"
      >
        <div>
          <span>{{ item.type.name }}</span>
          <span class="unit-desc"> x {{ item.quantity }}</span>
        </div>
        <div class="unit-controller">
          <button
            :aria-label="'Add one ' + item.type.name"
            type="button"
            @click="addItemToShopping(item.type.id)"
          >
            +
          </button>
          <button
            :aria-label="'Remove one ' + item.type.name"
            type="button"
            @click="removeOneItemFromCart(item.type.id)"
          >
            -
          </button>
        </div>
      </li>
    </ul>

    <button
      data-test="checkout"
      class="pay"
      type="button"
      aria-label="Proceed to checkout"
      @mouseover="togglePreview"
      @click="pay"
    >
      Total: {{ cartList.cart.totalPrice }}
    </button>
  </div>
</template>

<style>
@import './pay.css';
</style>
