(function ($) {
    
    $.fn.semantic = function (options, _key) {

        const _ret = {
            ordinals:['cero','one','two','three','four','five','six','seven'],
            constructor: $(this).UI_html(options),
            push:function(obj, _key){
                if(options._.isString(obj)){
                    this.objects[obj] = $(obj)
                }else{
                    this.objects[obj[0].id.replace("#","")] = obj
                }
                return this
            },
            LoadDataExternal:function(url, _cb){
                $.getJSON(url, function(_data){
                    _cb(_data)
                })
            },
            complete:function(_this, _obj,_params,_css, noEvents){
                options._.forEach(_params,function(_e,_k){
                    if(_k!='html' && _k!='content'&& _k!='a' && _k!='div')
                       _obj.attr(_k,_e) 
                })
                if(_css && _css.length>0)
                    _obj.addClass(_css)

                if(_params!=null && noEvents==null){
                    _obj.html(_params.html?_params.html:'')
                   if(_params.content!=null)
                        options._.forEach(_params.content,function(_elem){
                            _this.iterator(_this,_elem, _obj )
                        })
                }

                return _obj
            },
            iterator:function(_this, _elem , $parent ){
                var _ret = $parent
                //debugger

                var _func = ""
                var _params = {}
                var _events = null
                var _itemEvents = null
                var _css = ""
               // if(obj.fields){
               //     debugger
               // }else{
                    options._.forEach(_elem, function(_value,_name){

                        if(_name!="events" && _name!="itemEvents"){
                            if(_name=="obj"){
                                _func = _value
                            }else{
                                if(_name.indexOf('css')>-1){
                                    _css= _css + ' ' + (_name=='extracss'?'+':'') + _value  
                                }else{
                                    _params[_name]=_value
                                }
                            }
                        }else{
                            if( _name == "events")
                                _events = _value
                            if( _name == "itemEvents")
                                _itemEvents = _value
                        }
                        

                    })
               // }
                if(_func !=null){
                    console.log(_func)
                    const _f = _func.split(".")
                    var _xf = options.semantic.constructor
                    options._.forEach(_f, function(_value){
                        _xf = _xf[_value]
                    }) 
                    _func = _xf
                    if(_func==null)
                        debugger
                    
                }
                if(_itemEvents == null){
                    if(_events==null){
                        $parent.append(_func(_this, _params, _css))
                    }else{
                        $parent.append(_this.atachEvents( _func(_this, _params, _css) , _events ))
                    }
                }else{
                    $parent.append( _func(_this, _params, _css , _itemEvents ) )
                }
                //}

                
            },
            html:function( _def ){
                const _this = this  
                options._.forEach(_def, function(_array,_name){ 
                    const $parent = _this.objects[_name].empty()  
                    options._.forEach(_array, function(_elem){              
                        //options._.forEach(_elem, function(_v,_k){
                           
                            _this.iterator( _this, _elem , $parent )
                        //})
                    })
                })
            },
            atachEvents:function(object, events){
                options._.forEach(events, function(_event){
                    options._.forEach(_event, function(_f,_name){
                        object.bind(_name,_f)  
                    })  
                })
                return object
            },
            objects:{
               // root: this
            }
        }
        
        return _ret.push( this[0].id.length==0 ? 'body' : this )
    };

}(jQuery));