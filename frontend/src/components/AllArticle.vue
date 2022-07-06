<template>
    <div>
        <h2>Articles</h2>

        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Title</th> 
            </tr>   
            </thead>
            <tbody>
            <tr v-for="article in articles" :key="article.id">
                <td>{{ article.id }}</td>
                <td>{{ article.title }}</td>
                <td>
                    <div>
                        <router-link :to="{name: 'edit', params: { id: product.id }}">Edit</router-link>
                        <button @click="deleteArticle(article.id)">Delete</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            articles: []
        }
    },
    created() {
        axios.get('http://backend.testwork01911.local/api/articles')
            .then(response => {
                this.articles = response.data;
            });
    },
    methods: {
        deleteArticle(id) {
            axios.delete('http://backend.testwork1911.local/api/products/${id}')
                .then(response => {
                    let i = this.articles.map(data => data.id).indexOf(id);
                    this.products.splice(i, 1);
                    console.log(response)
                });
        }
    }
}
</script>