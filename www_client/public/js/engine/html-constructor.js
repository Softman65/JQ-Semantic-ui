(function ($) {
   // debugger
    $.fn.UI_html = function (options) {
        //debugger
        return {
            button:{
                standard:function(params, css){
                    return $('<button class="ui button">').addClass(css.replace('+',' ')).html(params.text)
                }
            }
        }
    }
}(jQuery))