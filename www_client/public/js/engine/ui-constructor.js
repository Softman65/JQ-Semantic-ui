(function ($) {
    
    $.fn.semantic = function (options, _key) {

        const _ret = {
            constructor: $(this).UI_html(options),
            push:function(obj, _key){
                this.objects[obj[0].id.replace("#","")] = obj
                return this
            },
            iteration:function(_this,_obj, $parent ){
                var _ret = $parent
                options._.forEach(_obj, function(_v,_k){
                    if(_k=="append"){
                        var _func = ""
                        var _params = {}
                        var _events = null
                        var _css = ""
                        options._.forEach(_v, function(_value,_name){
                            if(_name!="events"){
                                if(_name=="obj"){
                                    _func = _name
                                }else{
                                    if(_name.indexOf('css')>-1){
                                        _css= _css + ' ' + (_name=='extracss'?'+':'') + _value  
                                    }else{
                                        _params[_name]=_value
                                    }
                                }
                            }else{
                                _events = _value
                            }
                        })
                        $parent.append(_this.atachEvents( _v[_func](_params, _css) , _events ))
                    }
                })
                return $parent.html()
            },
            html:function( _def ){
                const _this = this                
                options._.forEach(_def, function(_v,_k){
                    _this.objects[_k].empty()
                    _this.iteration( _this, _v, _this.objects[_k] )
                })
            },
            atachEvents:function(object, events){
                options._.forEach(events, function(_value,_name){
                    object.bind(_name,_value)    
                })
                return object
            },
            objects:{
               // root: this
            }
        }
        
        return _ret.push(this,_key)
    };

}(jQuery));