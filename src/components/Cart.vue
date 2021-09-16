<template>
  <div>
    <div class="cart">
      <h2>Your cart</h2>
      <div class="noItem" v-if="!cartItems.length">
        <div class="col-8">
          <h5>Empty cart</h5>
        </div>
      </div>
      <div v-else>
        <div v-for="item in cartItems" :key="item.product.id" :item="item">
          <div id="cartList">
            <div class="cartItem">
              <img :src="item.product.image" alt="" />
              <h5>
                <strong>{{ item.product.title }}</strong>
              </h5>
              <br />
              <p>{{ item.quantity }} x ₦{{ item.product.price.toFixed(2) }}</p>
            </div>
            <div class="removeItem">
              <a
                href="#"
                class="badge badge-secondary"
                @click.prevent="removeProductFromCart(item.product)"
                >Remove</a
              >
            </div>
          </div>
          <hr />
        </div>

        <div class="d-flex justify-content-between">
          <span>Total: ₦{{ cartTotalPrice.toFixed(2) }}</span>
          <a href="#" @click.prevent="clearCartItems()">Clear Cart</a>
        </div>

        <stripe-checkout
          ref="checkoutRef"
          mode="payment"
          :pk="publishableKey"
          :line-items="lineItems"
          :success-url="successURL"
          :cancel-url="cancelURL"
          @loading="(v) => (loading = v)"
        />
        <button @click="submit">Pay now!</button>
      </div>

      <!-- <button>Checkout</button> -->
      <!-- <button v-if="cartItems.length > 0">Checkout</button> -->
      <!-- <div class="checkout">
      <router-link to="/checkOut">Checkout</router-link>
    </div> -->
    </div>
  </div>
</template>

<script>
// import Footer from "@/components/Footer.vue";
import { StripeCheckout } from "@vue-stripe/vue-stripe";

export default {
  components: {
    // Footer,
    StripeCheckout,
  },
  data() {
    // this.publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
    return {
      loading: false,
      publishableKey: "",
      secretKey: "",
      // lineItems: [],
      // lineItems: [
      //   {
      //     price: 'some-price-id', // The id of the one-time price you created in your Stripe dashboard
      //     quantity: 1,
      //   },
      // ],
      lineItems: [
        {
          price: 123, // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: "http://localhost:8084/payment-success",
      cancelURL: "http://localhost:8084//payment-cancelled",
    };
  },
  mounted() {
    this.lineItems = this.cartItems;
    this.publishableKey =
      "pk_test_51JSH8NC2mK5imsbDUhGHeEnXinRj7QIP4ORhBxBGPxKmIVSsWygshDBHpEQdZvuDAqf9uSuau7M4RWUoP0TPwDCC00KHLLcOWc";
    this.secretKey = process.env.STRIPE_SECRET_KEY;
    console.warn("items in cart", this.lineItems);
    console.warn("your pk: ", this.publishableKey);
    // stripe
    // this.stripe = Stripe(
    //   "pk_test_51JSH8NC2mK5imsbDUhGHeEnXinRj7QIP4ORhBxBGPxKmIVSsWygshDBHpEQdZvuDAqf9uSuau7M4RWUoP0TPwDCC00KHLLcOWc"
    // );
    // this.createAndMountFormElements();
    // paypal
    // const script = document.createElement("script");
    // script.src =
    //   "https://www.paypal.com/sdk/js?client-id=AYu9ZTHedGu33SKK6teSsn7lS_efCb1YJhcRDBVVBK6EBscQ-AJjEdU63_D8VVqWffEgE_zAZolhP2JX";
    // script.addEventListener("load", () => this.setLoaded());
    // document.body.appendChild(script);
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cart() {
      return this.$store.state.cart;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },
  methods: {
    submit() {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
    // createAndMountFormElements() {
    //   var elements = this.stripe.elements();

    //   this.cardNumberElement = elements.create("cardNumber");
    //   this.cardNumberElement.mount("#card-number-element");

    //   this.cardExpiryElement = elements.create("cardExpiry");
    //   this.cardExpiryElement.mount("#card-expiry-element");

    //   this.cardCvcElement = elements.create("cardCvc");
    //   this.cardCvcElement.mount("#card-cvc-element");
    // },

    // paypal
    // setLoaded() {
    //   this.loaded = true;

    //   window.paypal
    //     .Buttons({
    //       createOrder: (data, actions) => {
    //         return actions.order.create({
    //           purchase_units: [
    //             {
    //               description: this.product.description,
    //               amount: {
    //                 currency_code: "USD",
    //                 value: this.product.price,
    //               },
    //             },
    //           ],
    //         });
    //       },
    //       onApprove: async (data, actions) => {
    //         const order = await actions.order.capture();
    //         this.data;
    //         this.paidFor = true;
    //         console.log(order);
    //       },
    //       onError: (err) => {
    //         console.log(err);
    //       },
    //     })
    //     .render(this.$refs.paypal);
    // },
    removeProductFromCart(product) {
      console.warn("about to be removed");
      console.log(product);
      this.$store.commit("removeProductFromCart", product);
    },
    clearCartItems() {
      this.$store.commit("clearCartItems");
    },
  },
};
</script>

<style scoped>
.cart {
  width: 85%;
  margin: auto;
  padding-top: 50px;
}
.checkout,
button {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}
.checkout a,
button {
  background: blue;
  color: white;
  border: none;
  border-radius: 5px;
  outline: none;
  margin-top: 30px;
  margin-left: 50px;
  padding: 7px 15px;
  text-decoration: none;
}
button {
  margin-bottom: 35vh;
}

button a {
  color: white;
  text-decoration: none;
}
button a:hover {
  text-decoration: none;
}
#cartList {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}
.cartItem {
  display: flex;
}
.cartItem h5,
.cartItem p {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
}
img {
  width: 80px;
  height: 70px;
  object-fit: cover;
  margin: 10px;
  border-radius: 5px;
}
.removeItem {
  display: flex;
  justify-content: flex-end;
  /* margin: auto; */
  /* float: right; */
}
.removeItem a {
  margin: auto;
}
.clearList {
  margin-left: 50px;
}
.payment-form {
  max-width: 400px;
  margin: 20px auto;
  border: 1px solid #ececec;
}
.payment-form h5 {
  margin: 0;
  padding: 10px;
  font-size: 1.2rem;
}
.card-element {
  margin-top: 5px;
}
#card-number-element,
#card-expiry-element,
#card-cvc-element {
  background: white;
  padding: 5px;
  border: 1px solid #ececec;
}
.place-order-button-block {
  margin: 10px 0;
}
.noItem h5 {
  margin-top: 50px;
}
@media screen and (width: 768px) {
  button {
    margin-bottom: 55vh;
  }

  #cartList {
    display: grid;
  }
  .removeItem a {
    margin-left: 10px;
  }
}
</style>