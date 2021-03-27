import axios from "axios";

const state = {
  items: [],
  category: [],
  cart: [],
  country: [],
  region: [],
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
  setCart(state, item) {
    state.cart.push(item);
  },
  setCategory(state, item) {
    state.category.push(item);
  },
  setCountry(state, item) {
    state.country.push(item);
  },
  setRegion(state, item) {
    state.region.push(item);
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
      data.forEach((item) => {
        item.quantity = 1;
      });
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
    commit("setCart", item);
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
  async getCountry({ commit }) {
    try {
      commit("setStatus", { loading: true, error: false, message: "" });
      let { data } = await axios.get("http://sva.talana.com:8000/api/county/");
      commit("setCountry", data);
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
  async getRegion({ commit }) {
    try {
      commit("setStatus", { loading: true, error: false, message: "" });
      let { data } = await axios.get("http://sva.talana.com:8000/api/region/");
      commit("setRegion", data);
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
  getCountry(state) {
    return state.country ? state.country : [];
  },
  getRegion(state) {
    return state.region ? state.region : [];
  },
  getStatus(state) {
    return state.status;
  },
  getCart(state) {
    return state.cart ? state.cart : [];
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
