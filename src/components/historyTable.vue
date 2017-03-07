<template>
    <div class="container">
        <div class="row">
            <h1>Turn: {{turn}}</h1>
        </div>
        <div class="row">
            <h1>PGN</h1>
            <span>{{pgn}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['turn', 'pgn'],
    }
</script>