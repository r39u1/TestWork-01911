<template>
    <div class="row">        
        <div class="twelve columns">
            <h3>Edit Article</h3>
            <form @submit.prevent="updateArticle">
                <label>Title</label>
                <input class="u-full-width" type="text" v-model="article.title">
                <label>Text</label>
                <textarea class="u-full-width" v-model="article.text"></textarea>
                <button class="button-primary" type="submit">Update</button>
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
    created() {
        axios.get(`/api/articles/${this.$route.params.id}`)
            .then((response) => {
                this.article = response.data;
            })
    },
    methods: {
        updateArticle() {
            axios.patch(`/api/articles/${this.$route.params.id}`, this.article)
                .then(() => this.$router.push({ name: 'index' }))
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
        }
        
    }
}
</script>