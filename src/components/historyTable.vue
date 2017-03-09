<template>
    <div class="container">
        <div class="row" v-if="description">
            <h1>{{description}}</h1>
        </div>
        <div class="row">
            <h1>Status: {{status}}</h1>
        </div>
        <div class="row">
            <button>Move back</button>
        </div>
        <div class="row" v-if="pgn">
            <h1>PGN</h1>
            <span>{{pgn}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['status', 'pgn', 'description'],
    }
</script>