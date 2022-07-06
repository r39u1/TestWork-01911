<template>
    <div class="row">
        <div class="twelve columns">
            <h2>Articles</h2>

            <router-link class="button button-primary" :to="{name: 'create'}">Create</router-link>

            <table class="u-full-width">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th> 
                    <th>Actions</th>
                </tr>   
                </thead>
                <tbody>
                <tr v-for="article in articles" :key="article.id">
                    <td>{{ article.id }}</td>
                    <td>{{ article.title }}</td>
                    <td>
                        <div>
                            <router-link class="button" :to="{name: 'edit', params: { id: article.id }}">Edit</router-link>
                            <button @click="deleteArticle(article.id)">Delete</button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_BACKEND_ENDPOINT

export default {
    data() {
        return {
            articles: []
        }
    },
    created() {
        axios.get('/api/articles')
            .then(response => {
                this.articles = response.data;
            });
    },
    methods: {
        deleteArticle(id) {
            axios.delete(`/api/articles/${id}`)
                .then(() => {
                    let i = this.articles.map(data => data.id).indexOf(id);
                    this.articles.splice(i, 1);
                });
        }
    }
}
</script>