<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '../components/EventCard.vue';
import api from '../services/EventService';

export default {
  name: 'EventList',
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    };
  },
  created() {
    api.getEvents()
      .then((events) => {
        this.events = events;
      });
  },
};
</script>

<style scoped lang="scss">
.events {
  width: 300px;
  margin: 0 auto;
}
</style>
