<template>
  <div class="EventDetails" v-if="event">
    <h1>{{event.title}}</h1>
    <p>{{event.name}} on {{event.date}} @ {{event.location}}</p>
    <p>{{event.description}}</p>
  </div>
</template>

<script>
import api from '../services/EventService';

export default {
  name: 'EventDetails',
  props: { id: Number },
  data() {
    return {
      event: null,
    };
  },
  created() {
    api.getEvent(this.id)
      .then((event) => {
        this.event = event;
      });
  },
};
</script>

<style lang="scss" scoped>
.EventDetails {

}
</style>
