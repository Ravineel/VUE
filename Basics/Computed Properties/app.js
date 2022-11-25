let vm = Vue.createApp({
  data(){
    return {
      isPurple: false,
      selectedColor:'',
      size:150,
      rotate:'30deg'
    }
  },
  computed:{
    circle_classes(){
      return {
        purple: this.isPurple,
      }
    },
    circle_styles(){
      return {
        width: this.size + 'px',
        height: this.size + 'px',
        lineHeight: this.size + 'px',
      }
    },
    circle_transform(){
      return {
        transform: `rotate(${this.rotate})`
      }
    }

  } 



}).mount('#app')