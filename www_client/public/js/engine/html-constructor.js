(function ($) {
    
   // debugger
    $.fn.UI_html = function (options) {
        //debugger
        return {
            a:function(semantic, params, css){
                return semantic.complete(semantic, $('<a>'),params,css)
            },
            icon:function(semantic, params, css){
                return semantic.complete(semantic, $('<i>'),params,css)
            },
            div:function(semantic, params, css){
                return semantic.complete(semantic, $('<div>'),params,css)
            },
            h4:function(semantic, params, css){
                return semantic.complete(semantic, $('<h4>'),params,css)
            },
            h3:function(semantic, params, css){
                return semantic.complete(semantic, $('<h3>'),params,css)
            },
            h2:function(semantic, params, css){
                return semantic.complete(semantic, $('<h2>'),params,css)
            },
            h1:function(semantic, params, css){
                return semantic.complete(semantic, $('<h1>'),params,css)
            },
            segment:function(semantic, params, css){
                return semantic.complete(semantic, $('<div class="ui segment">'),params,css)
            },
            button:{
                standard:function(semantic, params, css){
                    return semantic.complete(semantic, $('<button class="ui button">'), params,css)
                },
                animated:function(semantic, params, css){
                    return semantic.complete(semantic, $('<div class="ui animated button">'), params,css)
                },
                labeled:function(semantic, params, css){
                    return semantic.complete(semantic, $('<div class="ui labeled button">'), params,css)
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
                
            },
            divider:{
                standard: function(semantic, params, css){
                    return semantic.complete(semantic,$('<div class="ui divider">'),params,css) 
                }
            },
            list:{
                item:function(semantic, $list, element, events){
                    const _this = this

                    const $item= $('<div class="item">')
                    if (element.icon){
                        $item.append( $('<i class="icon">').addClass(element.icon))
                        if(element.a){
                            const $content=$('<div class="content">')
                            options._.forEach(element.a, function(_v){

                                var $link = {}
                                if(_v.a){
                                    $link = $('<a class="header">').html(_v.a)
                                }
                                if(_v.div){
                                    $link = $('<div class="description">').html(_v.div) 
                                }
                                $content.append( semantic.complete(semantic, $link , _v ) )
                                
                                if(_v.content)
                                    $content.append( semantic.constructor.list.item(semantic,$('<div class="list">'), _v.content ))

                               
                                if(events)
                                    semantic.atachEvents( $link , events )

                            
                            })
                            $item.append($content)
                        }else{
                        
                            $item.append( $('<div class="content">').html(element.item))
                        }
                    }else{
                        $item.html(element.item)
                    }
                    return $list.append($item)                    
                },
                constructor:function(semantic, params, css, events){
                    const _this = this
                    var $list = $('<div class="ui list">')
                    if(params.url){
                        semantic.LoadDataExternal(params.url, function(_data){
                            options._.forEach(_data, function(element) {
                                $list =  semantic.constructor.list.item(semantic, $list, element, events )
                            });
                        })
                    }
                    return $list
                }
            }
        }
    }
}(jQuery))