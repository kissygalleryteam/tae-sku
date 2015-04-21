var $ = require('node').all;
    var Base = require('base');
    var Event = require('event');

    var TaeSku = Base.extend(Event.Target).extend({
        initializer: function(){
            var self = this;
            var target = $(self.get('node'));

            var targetParent = target.parent();

            //设置父元素position属性
            targetParent.css('position','relative');

            self.set('target',target);
            self.set('targetParent',targetParent);
        },
        plus: function(){
            var self = this;

            var target = self.get('target');
            var targetParent = self.get('targetParent');

            var targetLeft =  - targetParent.offset().left + target.offset().left,
                targetTop = - targetParent.offset().top + target.offset().top;

            var val = parseInt(target.val());
                valPlus = val + 1;

            var valStr = new String(val),
                valStrPlus = new String(valPlus);

            var valString = '',
                valStringPlus = '';

            for(var j = 0;j < valStr.length; j++){
                valString += '<span style="position:relative">' + valStr[j] + '</span>';
            }

            for(var j = 0;j < valStrPlus.length; j++){
                valStringPlus += '<span style="position:relative">' + valStr[j] + '</span>';
            }

            var valPlusDom = $('<span class="text-sku">' +  valStringPlus  + '</span>'),
                    valDom = $('<span class="text-sku">' +  valString  + '</span>');

            valPlusDom.css({
                top: targetTop + 35,
                left: targetLeft
            });

            valDom.css({
                top: targetTop,
                left: targetLeft
            })

            $(valPlusDom).appendTo(targetParent);
            $(valDom).appendTo(targetParent);

            target.val('');

            $(valDom).last('span').animate({
                top : targetTop - 25
            },{
                duration : 0.1,
                complete : function(){
                    $(valDom).remove();
                }
            });

            $(valPlusDom).last('span').animate({
                top : targetTop
            },{
                duration : 0.1,
                complete : function(){
                    $(valPlusDom).remove();
                }
            });

            target.val(parseInt(val) + 1);
        },
        minus: function(){
            var self = this;

            var target = self.get('target');
            var targetParent = self.get('targetParent');

            var targetLeft =  - targetParent.offset().left + target.offset().left,
                targetTop = - targetParent.offset().top + target.offset().top;

            var val = parseInt(target.val());
                valMinus = val - 1;

            var valStr = new String(val),
                valStrMinus = new String(valMinus);

            var valString = '',
                valStringMinus = '';

            for(var j = 0;j < valStr.length; j++){
                valString += '<span style="position:relative">' + valStr[j] + '</span>';
            }

            for(var j = 0;j < valStrMinus.length; j++){
                valStringMinus += '<span style="position:relative">' + valStr[j] + '</span>';
            }

            var valMinusDom = $('<span class="text-sku">' +  valStringMinus  + '</span>'),
                    valDom = $('<span class="text-sku">' +  valString  + '</span>');

            valMinusDom.css({
                top: targetTop + 35,
                left: targetLeft
            });

            valDom.css({
                top: targetTop,
                left: targetLeft
            })

            $(valMinusDom).appendTo(targetParent);
            $(valDom).appendTo(targetParent);

            target.val('');

            $(valDom).last('span').animate({
                top : targetTop + 25
            },{
                duration : 0.1,
                complete : function(){
                    $(valDom).remove();
                }
            });

            $(valMinusDom).last('span').animate({
                top : targetTop
            },{
                duration : 0.1,
                complete : function(){
                    $(valMinusDom).remove();
                }
            });

            target.val(parseInt(val) - 1);
        }
},{
    ATTRS : {
        node : {
            value : null
        }
    }
});

module.exports = TaeSku;



