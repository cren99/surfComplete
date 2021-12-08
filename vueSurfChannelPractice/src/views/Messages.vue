<template>
  <div class="home">
    <div class="mainArea">
      <h1 class="pageTitle"><b>Surf Feed</b></h1>
      <section class="image-gallery">
        <div class="image" v-for="item in items" :key="item.id">
          <h2 class="caption">{{ item.title }}</h2>

          <img :src="item.path" />
          <h2 class="test">
            <i>{{ item.description }}</i>
          </h2>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";

// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.image h2 {
  font-style: italic;
}

/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}
.pageTitle {
  size: 110%;
  background-color: rgb(131, 172, 185);
  padding-top: 0px;
  margin-top: 0px;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
}

.caption {
  padding-bottom: 0px;
}

.image-gallery {
  column-gap: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image {
  padding-top: 0px;
  margin: 0 0 1.5em;
  display: inline-block;
  width: 65%;
  size: 75%;
  border-radius: 25px;
  padding-bottom: 80px;
}

.mainArea {
  width: 90%;
  height: 100%;
  background-color: white;
  align-content: center;
  justify-content: center;
  display: inline-block;
  border-radius: 25px;
}
.test {
  color: black;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 100;
}

.image img {
  width: 100%;
}

/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .image-gallery {
    column-count: 4;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .image-gallery {
    column-count: 3;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .image-gallery {
    column-count: 2;
  }
}
</style>
