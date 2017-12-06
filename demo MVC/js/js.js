$(document).ready(function () {
    var model = {
        dog: [{
            name: 'Anh1',
            counter: 0,
            src: 'img/Anh1.png'
        },
        {
            name: 'Anh2',
            counter: 0,
            src: 'img/Anh2.png'
        },
        {
            name: 'Anh3',
            counter: 0,
            src: 'img/Anh3.png'
        }, {
            name: 'Anh4',
            counter: 0,
            src: 'img/Anh4.png'
        }, {
            name: 'Anh5',
            counter: 0,
            src: 'img/Anh5.png'
        },
        ],

        currentDog:{
            name: 'coffee',
            src : 'img/anh1.png',
            counter : 0
        }
    }

    var controller ={
        getListName: function(){
            var dogs= model.dog;
            console.log(dogs);
            var names = [];
            for(i=0; i<dogs.length;i++){
                names.push(dogs[i].name);
            }
            
            return names;
        },

        getCurrentDogs:function(){
            return model.currentDog;
        },
        getImages:function(){
            
        },

        batdau:function(){
            view.khoitao()
        },
    }

    var view = {
        khoitao:function(){
            this.listDogNames = controller.getListName();
            this.currentDog = controller.getCurrentDogs();
            view.hienthi();
        },

        hienthi:function(){
            var listDogNames = this.listDogNames;
            var html ='';
            for(var i = 0; i < listDogNames.length; i++){
                html += '<li data-name=' +i+ '>' + listDogNames[i]+ '</li>';
            }
            $('#list').html(html);
            $('#name').text(this.currentDog.name);
            $('#counter').text(this.currentDog.counter);
            $('img').attr("src",this.currentDog.src);
        } 

    }
    controller.batdau();
})