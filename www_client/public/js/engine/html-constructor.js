(function ($) {
   // debugger
    $.fn.UI_html = function (options) {
        //debugger
        return {
            h4:function(semantic, params, css){
                return semantic.complete(semantic, $('<h4>'),params,css)
            },
            segment:function(semantic, params, css){
                return semantic.complete(semantic, $('<div class="ui segment">'),params,css)
            },
            button:{
                standard:function(semantic, params, css){
                    return semantic.complete(semantic, $('<button class="ui button">'), params,css)
                }
            },
            label:function(semantic, params, css){
                return semantic.complete(semantic,$('<label>'),params,css) 
            },
            forms:{ 
                constructor :function(semantic, params, css){
                    return semantic.complete(semantic,$('<form class="ui form">'),params,css)
                },input:{
                    text:function(semantic, params, css){
                        return semantic.complete(semantic, $('<input type="text">') ,params,css) //.addClass(css?css.replace('+',' '):'')
                    }
                },field:function(semantic, params, css){
                    //debugger
                    const $field = semantic.complete(semantic,$('<div class="field">'),params,css)
                    return $field
                },fields:function(semantic, params, css){
                    //debugger
                    //const $fields = $('<div class="fields">')
                    if(params.content){
                        const counter = options._.countBy(params.content, function(o) { 
                            return o.placeholder !=null });
                        //debugger
                        return  semantic.complete(semantic, $('<div class="'+semantic.ordinals[counter.true]+' fields">'), params,css)
                        //$fields.append($group)
                    } 
                    //debugger
                    //return $group
                },
                
            }
        }
    }
}(jQuery))