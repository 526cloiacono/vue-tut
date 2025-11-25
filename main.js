const app = Vue.createApp({
  data() {
    return {
        product: 'Socks',
        description: 'A warm fuzzy pair of socks',
        image: './assets/images/socks_green.jpg',
        inventory: 11 , 
        details: ['80% cotton', '20% polyester',' 30% spandex']
    }
}
  })