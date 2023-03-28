<script lang="ts" setup>
import { ref, defineProps } from 'vue'
const props = defineProps({
  totalItems: Number
})

const pathname = ref('');
</script>

<template>
 <ul>
      <li>
        <a aria-label="Menu page"
          :class="{'link': true, active: pathname.startsWith('/') }"
          href="/">
          menu
        </a>
      </li>
      <li>
        <a
          aria-label="Cart page"
          :class="{'link': true, active: pathname.startsWith('/cart') }" 
          href="/cart"
        >
          cart ({{  totalItems }})
        </a>
      </li>
      <li>
        <a
          aria-label="GitHub page"
          :class="{'link': true, active: pathname.startsWith('/github') }"
          href="/github"
        >
          github
        </a>
      </li>
    </ul>
</template>

<style scoped>
ul {
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