<template>
    <div class="row">        
        <div class="twelve columns">
            <h3>Create Article</h3>
            <form @submit.prevent="addArticle">
                <label>Title</label>
                <input class="u-full-width" type="text" v-model="article.title">
                <label>Text</label>
                <textarea class="u-full-width" v-model="article.text"></textarea>
                <button class="button-primary" type="submit">Create</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_BACKEND_ENDPOINT

export default {
    data() {
        return {
            article: {}
        }
    },
    methods: {
        addArticle() {
            axios.post('/api/articles', this.article)
                .then(() => this.$router.push({ name: 'index' }))
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
        }
        
    }
}
</script>