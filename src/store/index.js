import { createStore } from 'vuex'

import brogues from '@/assets/images/brogues1.jpg'
import chelsea from '@/assets/images/chelsea1.jpg'
import shirt from '@/assets/images/shirt1.jpg'
import sneakers from '@/assets/images/sneakers3.jpg'
import trouser from '@/assets/images/trouser1.jpg'
import watch from '@/assets/images/watch1.jpg'


import user1 from '@/assets/images/user1.png'
import user2 from '@/assets/images/user2.png'
import user3 from '@/assets/images/user3.png'

import male from '@/assets/images/maleShopper.jpg'
import female from '@/assets/images/femaleShopper.jpg'



// import { getUser, login } from '../requests'
function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export default createStore({
  state: {
    // name: '',
    // username: '',
    // error: '',
    allItems: [

    ],
    products: [
      {
        id: 1,
        name: "Raph Polo",
        category: "Shirts",
        ratings: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        price: 250,
        discount: 20,
        image: shirt
      },
      {
        id: 2,
        name: "Joggers",
        category: "Trousers",
        ratings: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        price: 250,
        discount: 20,
        image: trouser
      },
      {
        id: 3,
        name: "Rolex",
        category: "Watches",
        ratings: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        price: 250,
        discount: 20,
        image: watch
      },
      {
        id: 4,
        name: "Chelsea Boots",
        category: "Footwears",
        ratings: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        price: 250,
        discount: 20,
        image: chelsea
      },
      {
        id: 5,
        name: "Brogues",
        category: "Footwears",
        ratings: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        price: 250,
        discount: 20,
        image: brogues
      },
      {
        id: 6,
        name: "Air Max",
        category: "Footwears",
        ratings: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        price: 250,
        discount: 20,
        image: sneakers
      },
    ],
    categories: [
      {
        id: 1,
        name: "For woman",
        image: female,
        discount: "Up to 20% off",
      },
      {
        id: 2,
        name: "For man",
        image: male,
        discount: "Up to 30% off",
      },
    ],
    reviews: [
      {
        id: 1,
        name: "Andy Doe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        title: "Delighted Customer",
        ratings: 4,
        image: user1
      },
      {
        id: 2,
        name: "Bella Doe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        title: "Happy Customer",
        ratings: 5,
        image: user2
      },
      {
        id: 3,
        name: "Candy Doe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        title: "Satisfied Customer",
        ratings: 3,
        image: user3
      },
    ],
    cart: [],
    singleProduct: null,
  },
  mutations: {
    setSingleProduct: (state, id) => {
      const product = state.products.find(elem => elem.id === +id);
      console.warn(product, +id)
      if(!product) {
        console.warn(product, id)
        return state.singleProduct = null
      }else{
        return state.singleProduct = product
      }
    },

    addProductToCart: (state, { product, quantity }) => {
      let productInCart = state.cart.find(item => {
        return item.product.id == product.id;
      });
  
      if (productInCart) {
        productInCart.quantity += quantity;
        return
      }
      state.cart.push({
        product, quantity
      });
  
      updateLocalStorage(state.cart)
    },


    removeProductFromCart: (state, product) => {
      let item = state.cart.find(elem => elem.product.id === +product.id);
      console.log("about to be removed", item)
  
      if (item) {
        if (item.quantity > 1) {
          item.quantity--
        } else {
          state.cart = state.cart.filter(elem => elem.product.id !== product.id)
        }
      }
      updateLocalStorage(state.cart)
    },

    clearCartItems: state => {
      state.cart = [];
    },

    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem('cart');
      if (cart) {
        state.cart = JSON.parse(cart)
      }
    }
  },
  actions: {

    addToCart: ({ commit }, { product, quantity }) => {
      commit('addProductToCart', { product, quantity });
    },
  
    addCart({ commit, getters }, payload) {
      let cart = getters.cart
      cart.push(payload)
      commit('setCart', cart)
    }
    // async getUser(state) {
    //   // const user = await fetch('/users.json');
    //   const user = await getUser();
    //   if (user == null) return

    //   state.name = user.name
    //   state.username = user.username
    // },

    // async login(username, password) {
    //   const user = await login(username, password)

    //   if(user == null) {
    //     this.state.error = "Could not find user...."
    //     return false
    //   }

    //   state.name = user.name
    //   state.username = user.username
    //   state.error = ''
    //   return true
    // },

    // async logout(state) {
    //   state.name = ''
    //   state.username = ''
    // }
  },
  getters: {
    // getProducts: state => {
    //   return state.products
    // }
    // isLoggedIn: state => state.username !== ' ',
    getProducts: state => state.products,
    getCategories: state => state.categories,
    getReviews: state => state.reviews,
    getSingleProduct: state => state.singleProduct,
    cartItems: state => state.cart, 
    cartTotalPrice: state => {
      let total = 0;
  
      state.cart.forEach(item => {
        total += item.product.price * item.quantity;
      });
  
      return total;
    },
  },
  modules: {
  }
})
