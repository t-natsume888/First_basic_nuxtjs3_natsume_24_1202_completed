<template>
    <div v-if="error.statusCode === 404">
        <h1>Error!</h1>
        <!-- エラーメッセージ表示 -->
        <p>{{ error.message }}</p>
    </div>
</template>

<!-- エラーメッセージ　取得 -->
<script setup>
    const error = useError()
</script>