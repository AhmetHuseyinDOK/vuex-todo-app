import {
    GET_ALL_LIST,
    GET_DONE_LIST,
    GET_UNDONE_LIST,
    ADD_TODO,
    CHANGE_STATUS,
    // REMOVE_ALL,
    // REMOVE_ALL_DONE,
    // REMOVE_TODO
} from  './constants';

const state = {
    todos: []
}

const getters = {
    [GET_ALL_LIST]: (state ) => {
        return state.todos;
    },
    [GET_DONE_LIST]: (state) => {
        return state.todos.filter( todo => todo.done);
    },
    [GET_UNDONE_LIST]: (state) => {
        return state.todos.filter( todo => !todo.done);
    }
}

const actions = {
    [ADD_TODO]: ({commit } , todo) => {
        commit('addTodo', todo);
    },
    [CHANGE_STATUS]: ({commit}, id) => {
        commit('changeStatus', id);
    }
}

const mutations = {
    addTodo: (state , todo) => {
        state.todos.push(todo);
    },
    changeStatus: (state , id) => {
        let item = state.todos.find( todo => todo.id == id);
        item.done = !item.done;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}