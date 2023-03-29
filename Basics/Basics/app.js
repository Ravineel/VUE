const vm = Vue.createApp(  //vm=>short for vue model
  {

    data() {
      return {
        firstName: "John",
        lastName: "Doe",
        url:"https://www.google.com",
        raw_url:'<a href=https://www.google.com" target="_blank">Google</a>',
        age:20,
      }
    },
    methods: {

    
      increment(){
        this.age++;
      },
      updateLastName(msg, event){
        event.preventDefault();
        this.lastName = event.target.value;
        console.log(msg);
      }

    },
    computed:{
      fullName(){
        return   `${this.firstName} ${this.lastName.toUpperCase()}` 
      },
    }
  
}).mount('#app') 




















      //methods or function that we can call to perform complex tasks
      //data present in this instance is  called by using the keyword this


//directive: to solve the problem of data binding
//directives can also help in fixing the problem of loading data for speed throttling
//directives are used to manipulate the DOM
//v-cloak: to render the html element after the data is loaded
//v-bind: to bind the data to the html element
//v-model: to bind the data to the html element and also to update the data
//v-model is 2 way data binding
//2-way data binding is when data chanmges in page or in JS , it will get 
//updated in both places
//v-on: to bind the event to the html element
//v-if: to show or hide the html element
//v-for: to iterate over the array or object
//v-text: to bind the data to the html element
//v-html: to bind the data to the html element
//v-show: to show or hide the html element
//v-slot: to pass the data to the child component
//v-once: to render the html element only once
//v-pre: to render the html element as it is

//Reactivity: to make the data reactive
//Reactivity is when any changes to the data is imeediately 
//reflected on the page without refreshing the page

//methods are also acessible from vm variable

// setTimeout(() => {
//   vm.firstName = 'Bob'; // proxy => vm.firstName <=> vm.$data.firstName`
// }, 2000);


//Proxy =>  a figure that can be used to represent the value of 
//something in a calculation or a statement
//Vue sets getter and setter function for VUE data to be used as proxy


// only one root element can be mounted and we can have child elements  




// Vue.createApp(
//   {

//     data() {
//       return {
//         firstName: "Jahn",
//         lastName: "Doe",
//       }
//     }
//   }
// ).mount('#app2') 

// this creates multiple instances of vue 


