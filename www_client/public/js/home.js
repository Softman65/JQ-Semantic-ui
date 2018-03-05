$( document ).ready(function() {

    const App = {
        _:_,
        init: function (app) {
            app.semantic = $('body').semantic(app) //.push( $('#one') ).push( $('#two') )
            

            const UIMap ={
                body :[ 
                    { 
                        obj: app.semantic.constructor.segment ,
                        extracss: 'raised',
                        content:[ 
                            {   obj: app.semantic.constructor.forms.constructor,
                                content:[
                                    { obj:app.semantic.constructor.h4 , css:'ui dividing header', html:'Datos Personales'},
                                    { obj: app.semantic.constructor.forms.field , 
                                        content:[
                                            { obj: app.semantic.constructor.label , html: 'nombre' }, 
                                            { obj: app.semantic.constructor.forms.fields,
                                                content:[
                                                    { obj: app.semantic.constructor.forms.field , 
                                                        content:[
                                                            { obj: app.semantic.constructor.forms.input.text ,name:'uno' , placeholder: 'nombre' }
                                                        ]
                                                    },
                                                    { obj: app.semantic.constructor.forms.field , 
                                                        content:[
                                                            { obj: app.semantic.constructor.forms.input.text ,name:'uno' , placeholder: 'nombre' }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    { obj: app.semantic.constructor.forms.field , 
                                        content:[ 
                                            { obj: app.semantic.constructor.forms.fields,
                                                content:[
                                                    { obj: app.semantic.constructor.label , html: 'apellidos' },
                                                    { obj: app.semantic.constructor.forms.input.text ,name:'dos' , placeholder: 'apellidos' }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
              //          { 
              //                  obj: app.semantic.constructor.button.standard ,
              //                  text:'hi 1',
              //                  events:{
              //                      click:function(){
              //                          alert('hi 1')
              //                      }
              //                  },
              //                  css:'red big' 
                            
              //          },
              //          {append: { 
              //                  obj: app.semantic.constructor.button.standard ,
              //                  text:'hi 2',
              //                  events:{
              //                      click:function(){
              //                          alert('hi 2')
              //                      }
              //                  } 
              //              }  
              //          },
               //         {append: { 
               //             obj: app.semantic.constructor.form ,
               //             fields:[ 
                //                { label: 'test' , obj: $('<input type="text">') }
                 //           ] 
                 //       }  
                 //   }
                    ]
                }
            
            
            app.semantic.html(UIMap)

        }

    }

    App.init(App)
    
})