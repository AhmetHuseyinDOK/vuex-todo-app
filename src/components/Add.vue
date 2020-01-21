<template>
    <div>
        <input v-model="todo" /><button @click=" () => addTodo(new Todo(todo))">Add Todo</button>
    </div>
</template>

<script>
import Todo from '../models/Todo';
import {ADD_TODO} from '../store/modules/constants';
import {mapActions} from 'vuex';
export default {
    data: () => ({
        todo: '',
        Todo
    }),
    methods: mapActions({addTodo:ADD_TODO})
}

</script>

<style scoped>
    div {
        justify-content: center;
        display: flex;
    }
    input{
        font-size: 20px;
    }
</style>