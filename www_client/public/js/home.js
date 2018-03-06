$( document ).ready(function() {

    const App = {
        _:_,
        init: function (app) {
            app.semantic = $('body').semantic(app) //.push( $('#one') ).push( $('#two') )
            

            const UIMap ={
                body :[ 
                        { 
                            obj: 'segment' ,
                            css: 'raised',
                            content:[ 
                                { obj:'h1' , css:'ui dividing header', html:'JQ SEMANTIC-UI EXAMPLES'},
                                {   obj: 'forms.constructor',
                                    content:[
                                        { obj:'h4' , css:'ui dividing header', html:'Formularios'},
                                        { obj: 'forms.field' , 
                                            content:[
                                                { obj: 'label' , html: 'nombre' }, 
                                                { obj: 'forms.fields',
                                                    content:[
                                                        { obj: 'forms.field' , 
                                                            content:[
                                                                { obj: 'forms.input.text' ,name:'Nombre' , placeholder: 'nombre' }
                                                            ]
                                                        },
                                                        { obj: 'forms.field' , 
                                                            content:[
                                                                { obj: 'forms.input.text' ,name:'PrimerApellido' , placeholder: 'primer apellido' }
                                                            ]
                                                        },
                                                        { obj: 'forms.field' , 
                                                            content:[
                                                                { obj: 'forms.input.text' ,name:'SegundoApellido' , placeholder: 'primer apellido' }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        { obj: 'forms.field' , 
                                            content:[ 
                                                { obj: 'forms.fields',
                                                    content:[
                                                        { obj: 'label' , html: 'Descripcion' },
                                                        { obj: 'forms.input.text' ,name:'Descripcion' , placeholder: 'Descripcion' }
                                                    ]
                                                }
                                            ]
                                        },
                                        { obj: 'forms.field' , 
                                            content:[
                                                    { obj : 'button.standard' , html:'go', events:[ { click:function(){ alert(); return false } }]},
                                                    { obj : 'button.animated', css:'vertical', tabindex:0, 
                                                        content:[
                                                            { obj:'div', css: 'hidden content' ,html:'shop'  },
                                                            { obj:'div', css:'visible content', content:[ {obj:'icon' ,css:'shop icon'} 
                                                        ]
                                                    }
                                                ], events:[ { click:function(){ alert(); return false } }]}
                                            ]
                                        }
                                    ]
                                },
                                { obj:'h2' , css:'ui dividing header', html:'listas'},
                                { obj:'divider.standard' },
                                { obj:'list.constructor', url: 'API/getList' },
                                { obj:'divider.standard' },
                                { obj:'list.constructor', url: 'API/getListIcon' },
                                { obj:'divider.standard' },
                                { obj:'list.constructor', url: 'API/getListIconRelaxed', css:'relaxed divided', itemEvents:[ { click:function(){ 
                                    alert($(this).attr('data')); return false } }]
                                },
                                { obj:'divider.standard' }
                            ]
                        }

                    ]
                }
            
            
            app.semantic.html(UIMap)

        }

    }

    App.init(App)
    
})