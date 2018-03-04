$( document ).ready(function() {
    //debugger
    String.prototype.replaceAll = function (target, replacement) {
        return this.split(target).join(replacement);
    };




    const App = {
        _:_,
        init: function (app) {
            app.semantic = $('#one').semantic(app,'#one')
            app.semantic.push($('#two'))

            const UIMap ={
                one : { 
                    append: { 
                        obj: app.semantic.constructor.button.standard ,
                        text:'hi 1',
                        events:{
                            click:function(){
                                alert('hi 1')
                            }
                        },
                        css:'red big', 
                    }  
                },
                two : { 
                    append: { 
                        obj: app.semantic.constructor.button.standard ,
                        text:'hi 2',
                        events:{
                            click:function(){
                                alert('hi 2')
                            }
                        } 
                    }  
                }
            }
            
            app.semantic.html(UIMap)

        }

    }

    App.init(App)
    
})