<template>
    <div>
      <div class="searchbar">
        <input :value="query" type="text" id="fname" name="fname" />
        <button>Check</button>
      </div>

      <div class="container">
            <div class="columns is-multiline" v-for="cat of category" v-bind:key="category.indexOf(cat) + 'cat'">
                <h1 class="title">{{cat.toUpperCase()}}</h1><br/><br/>
                <div class="column" v-for="card of cards[cat]" v-bind:key="cards[cat].indexOf(card) + cat">
                    <a :href="card.endpoint.replace('<username>', query)">
                        <h2 class="subtitle has-text-centered">{{card['name']}}</h2>
                        <figure class="image is-128x128">
                            <img :src="card.logo">
                        </figure>
                    </a>
                </div>
            </div>
      </div>
    </div>
</template>

<script>
import list from '~/static/list';

export default {
    data: () => ({
        query: '',
        cards: [],
        category: [],
        showShimmer: true
    }),
    created: function() {
        this.query = this.$router.currentRoute.query['query'] || 'n';

        this.cards = list.domains
        this.category = Object.keys(list.domains)

        console.log(this.cards)

        

    }
}
</script>

<style scoped>
.searchbar {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  padding: 5px;
}
input {
  height: 29px;
  width: 283px;
  border: 3px solid #0a173e;
  background-color: #fff;
}
button {
  margin-left: -1px;
  height: 29px;
  margin-top: 0px;
  outline: none;
  border: 3px solid #0a173e;
  background-color: #0a173e;
  font-size: 1em;
  color: white;
}
.container {
    padding: 10%;
}

.column {
    padding: 30px;
}
</style>