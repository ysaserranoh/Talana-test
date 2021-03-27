import axios from "axios";

const state = {
  items: [],
  category: [],
  cart: [],
  status: {
    loading: false,
    error: false,
    message: "",
  },
};

const mutations = {
  setItems(state, items) {
    state.items = items;
  },
  AddToCart(state, item) {
    state.cart.push(item);
  },
  setCategory(state, item) {
    state.category.push(item);
  },
  setStatus(state, status) {
    state.status = status;
  },
};
const actions = {
  async getItems({ commit }) {
    try {
      commit("setStatus", { loading: true, error: false, message: "" });
      let { data } = await axios.get("http://sva.talana.com:8000/api/product/");
      commit("setItems", data);
      commit("setStatus", { loading: false, error: false, message: "" });
    } catch (error) {
      let message = "An error has occurred";
      if (error.response) {
        message = error.response.data.message;
      } else if (error.request) {
        message =
          "No response received from the server. If the problem persists contact the site administrator (" +
          error.message +
          ")";
      } else {
        message = error.message;
      }
      commit("setStatus", { loading: false, error: true, message: message });
    }
  },
  addToCart({ commit }, item) {
    commit("addToCart", item);
  },
  async getCategory({ commit }) {
    try {
      commit("setStatus", { loading: true, error: false, message: "" });
      let { data } = await axios.get(
        "http://sva.talana.com:8000/api/product-category/"
      );
      commit("setCategory", data);
      commit("setStatus", { loading: false, error: false, message: "" });
    } catch (error) {
      let message = "An error has occurred";
      if (error.response) {
        message = error.response.data.message;
      } else if (error.request) {
        message =
          "No response received from the server. If the problem persists contact the site administrator (" +
          error.message +
          ")";
      } else {
        message = error.message;
      }
      commit("setStatus", { loading: false, error: true, message: message });
    }
  },
};

const getters = {
  getItems(state) {
    return state.items ? state.items : [];
  },
  getCategory(state) {
    return state.category ? state.category : [];
  },
  getStatus(state) {
    return state.status;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
