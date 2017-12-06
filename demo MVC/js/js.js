$(document).ready(function () {
    var model = {
        coffee: [{
            name: 'coffee 1',
            counter: 0,
            src: 'img/Anh1.png'
        },
        {
            name: 'coffee 2',
            counter: 0,
            src: 'img/Anh2.png'
        },
        {
            name: 'coffee 3',
            counter: 0,
            src: 'img/Anh3.png'
        }, {
            name: 'coffee 4',
            counter: 0,
            src: 'img/Anh4.png'
        }, {
            name: 'coffee 5',
            counter: 0,
            src: 'img/Anh5.png'
        },
        ],

        currentCoffee: {
            name: 'coffee 1',
            src: 'img/anh1.png',
            counter: 0
        }
    }

    var controller = {
        getListName: function () {
            var coffees = model.coffee;
            // console.log(coffees);
            var names = [];
            for (i = 0; i < coffees.length; i++) {
                names.push(coffees[i].name);
            }

            return names;
        },

        getcurrentCoffees: function () {
            return model.currentCoffee;
        },
        getSrc: function () {
            var src = model.coffee;
            var srcs = [];
            for (i = 0; i < src.length; i++) {
                srcs.push(src[i].src);
            }
            // console.log(srcs)
            return srcs;
        },

        getCounter: function () {
            var counter = model.coffee;
            var x = $('img').attr('src')
            console.log(x)        
        },

        batdau: function () {
            view.khoitao()
        },
    }

    //var coffee = {};
    //coffee.name = "abc";
    var view = {

        // view.thiscoffeeNames 
        khoitao: function () {
            
            this.listcoffeeNames = controller.getListName();
            this.currentCoffee = controller.getcurrentCoffees();
            this.srcs = controller.getSrc();
            view.hienthi();
        },

        hienthi: function () {
            var listcoffeeNames = this.listcoffeeNames;
            var html = '';
            for (var i = 0; i < listcoffeeNames.length; i++) {
                html += '<li data-name=' + i + '>' + listcoffeeNames[i] + '</li>';
            }
            $('#list').html(html);
            // $('#name').text(this.currentCoffee.name);
            // $('#counter').text(this.currentCoffee.counter);
            // $('img').attr("src", this.currentCoffee.src);
            var srcs = this.srcs
            // console.log(srcs);
            $('li').click(function () {
                var selected = $(this).attr('data-name')
                $('img').attr('src', srcs[selected])
                $('#name').text(listcoffeeNames[selected]);
                $('#counter').text(model.coffee[selected].counter);
            })

            var arr = model.coffee;
            $('#anh').click(function () {
                var x = $('img').attr('src')
                console.log(x)
                for (i = 0; i < arr.length; i++) {
                    if (x == arr[i].src) {
                        arr[i].counter += 1;
                        $('#counter').text(arr[i].counter);
                    }
                }
            })
            // $('img').click(function(){
            //     like++;
            //     $('#counter').text(like);
            // })
        }

    }

    controller.batdau();
})