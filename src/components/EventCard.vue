<template>
  <router-link :to="{name: 'EventDetails', params: {id: event.id}}" class="EventCard">
    <div class="date">@ {{ event.time }} on {{ event.date }}</div>
    <h4>{{ event.title }}</h4>
  </router-link>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: Object,
  },
};
</script>

<style scoped lang="scss">
.EventCard {
  display: block;
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  border-radius: 8px;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px rgba(black, 0.2);
  }

  .date {
    margin-bottom: 1rem;
  }
}
</style>
