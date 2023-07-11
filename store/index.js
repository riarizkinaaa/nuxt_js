import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        daftarBuku: [],
    },
    mutations: {
        tambahBuku(state, buku) {
            state.daftarBuku.push(buku);
        },
    },
    actions: {
        simpanBuku({ commit }, bookId) {
            return new Promise((resolve, reject) => {
                axios
                    .get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
                    .then((response) => {
                        const buku = {
                            id: response.data.id,
                            judul: response.data.volumeInfo.title,
                            penulis: response.data.volumeInfo.authors,
                            deskripsi: response.data.volumeInfo.description,
                        };
                        commit('tambahBuku', buku);
                        resolve();
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
    },
});