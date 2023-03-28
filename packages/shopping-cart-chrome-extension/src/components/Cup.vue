<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CoffeeEntitySerialize } from '@code-craft/coffee-store';

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<CoffeeEntitySerialize>,
      required: true,
    },
  },
});
</script>

<template>
  <div class="cup">
    <div
      class="cup-body"
      :aria-label="item.name"
      :data="item.name.replace(' ', '_')"
    >
      <div
        v-for="(ingredient, index) in item.ingredients"
        :key="index"
        :class="'ingredient ' + ingredient.name"
        :style="{ height: ingredient.quantity + '%' }"
      >
        {{ ingredient.name }}
      </div>
    </div>
    <div class="cup-handler"></div>
  </div>
</template>

<style>
.cup {
  display: flex;
  will-change: transform;
}
.cup-body {
  width: 150px;
  height: 140px;
  border: 6px solid black;
  display: flex;
  flex-direction: column-reverse;
  border-radius: 0px 0px 20px 20px;
  overflow: hidden;
}

.cup-handler {
  width: 30px;
  height: 72px;
  margin-top: 18px;
  background-color: initial;
  border-bottom-right-radius: 100px;
  border-top-right-radius: 100px;
  border: 8px solid black;
  border-left: 0;
  box-sizing: border-box;
}
.cup:hover {
  cursor: pointer;
  transform: rotate(-4deg);
}
.cup:hover .cup-body {
  border-color: goldenrod;
}
.cup:hover .cup-handler {
  border-color: goldenrod;
}
.ingredient {
  display: flex;
  justify-content: center;
  align-items: center;
}
.disabled-hover {
  pointer-events: none;
  border-color: initial;
}
.disabled-hover:hover {
  pointer-events: none;
  border-color: black;
}
/* recipe */
.espresso {
  background-color: rgb(222, 98, 38);
}
.milk.foam {
  background-color: rgb(198, 218, 181);
}
.steamed.milk {
  background-color: rgb(178, 187, 140);
}
.steamed.cream {
  background-color: rgb(239, 238, 217);
}
.chocolate.syrup {
  background-color: rgb(154, 128, 69);
}
.whipped.cream {
  background-color: rgb(183, 221, 220);
}
.water {
  background-color: rgb(127, 195, 179);
}
</style>
