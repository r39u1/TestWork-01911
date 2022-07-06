<template>
    <div>
        <h3>Edit Article</h3>
        <div>
            <form @submit.prevent="updateArticle">
                <label>Title</label>
                <input type="text" v-model="article.title">
                <label>Text</label>
                <textarea v-model="article.text"></textarea>
                <button type="submit">Update</button>
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
        axios.get('/api/articles/${this.$route.params.id}')
            .then((response) => {
                this.article = response.data;
            })
    },
    methods: {
        updateArticle() {
            axios.patch('/api/articles/${this.$route.params.id}', this.article)
                .then(response => (
                    this.$router.push({ name: 'home' })
                ))
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
        }
        
    }
}
</script>