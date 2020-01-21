<template>
    <div>
        <h1>A Todo App</h1><br>w/ vuex
        <Add/>
        <h4>Todo List</h4>
        <ul>
            <li v-for="todo in undoneList" :key="todo.id"><TodoItem :todo="todo"/></li>
        </ul>
        <h4>Done List</h4>
        <ul>
            <li v-for="todo in doneList" :key="todo.id"><TodoItem :todo="todo"/></li>
        </ul>
    </div>
</template>

<script>
import TodoItem from './TodoItem';
import Add from './Add';
import {mapGetters} from 'vuex';
import {GET_DONE_LIST , GET_UNDONE_LIST} from '../store/modules/constants';

export default {
    computed: {
        ...mapGetters({
            doneList: GET_DONE_LIST,
            undoneList: GET_UNDONE_LIST
        })
    },
    components:{
        Add,
        TodoItem
    }    
}

</script>

<style scoped>
    ul{
        padding: 0;
        list-style-type: none;
    }
</style>