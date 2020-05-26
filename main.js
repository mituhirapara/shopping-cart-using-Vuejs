let app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});


let forStatement = new Vue({
    el:"#app-for",
    data:{
        languages:[{id:0,text:"Java",status:false},
                    {id:1,text:"Python",status:false},
                    {id:2,text:"JavaScript",status:false}]
    },

    methods:{
        del:function(index){
            // alert(index);
            console.log(this.languages.splice(index,1));
            // alert("Succeefull");
        },
        changeStatus:function(index){
            
        }
    }
})




let ifStatement = new Vue({
    el: '#app-2',
    data:{
        newTodo:""
    },
    methods:{
        addTodo:function(){
            if(forStatement.languages.length){
           forStatement.languages.push({
               id:forStatement.languages[forStatement.languages.length-1].id++,
               text:this.newTodo,
               status:false
           });
           this.newTodo="";}
           else{
               forStatement.languages.push({id:0,text:this.newTodo});
           }
        },

    }
})
