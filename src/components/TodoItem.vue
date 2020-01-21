<template>
    <li @click="changeStatus(todo.id)" :class='todo.done ? "done" : "undone"'>{{todo.task}}</li>
</template>

<script>

import Todo from '../models/Todo';
import { mapActions } from 'vuex'
import {CHANGE_STATUS} from '../store/modules/constants';

export default {
    props: {
        todo: Todo
    },
    methods: mapActions({
        changeStatus: CHANGE_STATUS
    })
}

</script>

<style scoped>
    li{
        
        color: white;
        
    }

    .undone{
        background: indigo
    }

    .done{
        background: grey
    }
</style>