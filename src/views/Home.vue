<template>
    <p>{{ $t('message.hello') }}</p>
    <span>vuex user/age: {{ age }}</span>
    <a-button type="primary" @click="addAge">age++</a-button>
    <div>{{ $TRACK }}</div>
    <a-button type="primary" @click="clickThrowError">点击抛出错误</a-button>
</template> 
<script setup>
import {  getCurrentInstance, computed } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';

const store = useStore(key); // 调用 vuex 的 Composition API 获取 store ，相当于 $store
const age = computed(() => store.getters['user/age']);
const addAge = () => store.dispatch('user/addAge', 1);
const { proxy } = getCurrentInstance()
console.log("$TRACK", proxy.$TRACK);
console.log("VITE_BASE_URL", import.meta.env.VITE_BASE_URL);

const clickThrowError = ()=>{
    throw new Error('抛出错误');
}
</script>
<style lang='less' scoped>
</style>