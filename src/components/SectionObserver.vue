<script setup >
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  options: {
    type: Object,
  },
});

const emit = defineEmits(["intersect"]);
const root = ref();
const observer = ref();

onMounted(() => {
  observer.value = new IntersectionObserver(([entry]) => {
    if (entry && entry.isIntersecting) {
      emit("intersect");
    }
  }, props.options);
  observer.value.observe(root.value);
});

onUnmounted(() => {
  observer.value.disconnect();
});
</script>

<template>
  <div ref="root" />
</template>
