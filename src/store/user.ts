import {Module} from 'vuex';
import {State as RootState} from './index';

export interface State {
    age: number;
}
export default {
    namespaced: true,
    actions: {
        addAge({commit, state}, value: number) {
            commit('SET_USER_AGE', state.age + value);
        }
    },
    getters: {
        age: state => state.age
    },
    mutations: {
        SET_USER_AGE(state, age: State['age']) {
            state.age = age;
        }
    },
    state: {
        age: 5
    }
} as Module<State, RootState>;
