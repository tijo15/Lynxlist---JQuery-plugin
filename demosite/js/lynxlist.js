;
(function($) {

    $.fn.lynxlist = function(options) {

    var settings = $.extend({}, $.fn.lynxlist.defaults, options),
        inOpts, inEffect, inDuration, outEffect, outOpts, outDuration,
        jsonarray, div;

    //Set default values
    $.fn.lynxlist.defaults = {
        inEffect: "fade",
        inOpts: "",
        inDuration: "200",

        outEffect: "fade",
        outOpts: "",
        outDuration: "200",

    };

    if (settings.inEffect || settings.jsonarray || settings.inOpts || settings.inDuration || settings.outEffect || settings.outOpts || settings.outDuration || settings.div) {
        jsonarray = settings.jsonarray;
        inEffect = settings.inEffect;
        inOpts = settings.inOpts;
        inDuration = settings.inDuration;
        outEffect = settings.outEffect;
        outOpts = settings.outOpts;
        outDuration = settings.outDuration;
        div = settings.div;


    } else {
        inEffect = $.fn.lynxlist.defaults.inEffect;
        inOpts = $.fn.lynxlist.defaults.inOpts;
        inDuration = $.fn.lynxlist.defaults.inDuration;

        outEffect = $.fn.lynxlist.defaults.outEffect;
        outOpts = $.fn.lynxlist.defaults.outOpts;
        outDuration = $.fn.lynxlist.defaults.outDuration;
    }

    //Append the list to div
    $(div).append(renderMenu(jsonarray.Categories));

    //Search function
    $("#search").keyup(function() {

        // Retrieve the input field text and reset the count to zero
        escape = function(text) {
            return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        };

        var filter = escape($(this).val());

        // Loop through the result list
        $(".item li").each(function() {

            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).addClass('hidden');
                $('.item').show();
                // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).removeClass('hidden');
                $('.item').hide();

            }
        });
    });

    //Check if a li item is clicked
    $('.toggle').click(function(e) {
        e.stopPropagation();
        var $this = $(this);

        if ($this.next().hasClass('active')) {
            $this.next().removeClass('active');
            //Hide and animate the ul
            $this.next().hide(outEffect, outOpts, outDuration);
        }

        if ($this.closest('a').hasClass('bgColor')) {
            $this.closest('a').removeClass('bgColor');
        } else {
            $this.parent().parent().find('a').removeClass('bgColor');
            $this.parent().parent().find('li .item').removeClass('active');
            //Hide and animate the parent ul
            $this.parent().parent().find('li .item').hide(outEffect, outOpts, outDuration);
            $this.next().toggleClass('active');
            //Show and animate the next ul
            $this.next().effect(inEffect, inOpts, inDuration);
            //Set background color to the selected li item
            $this.closest('a').addClass('bgColor');
        }
    });

    }; // End of main function

    //Loop through each object in the jsonarray and get the values
    //List 1
    function renderMenu(jsonObject) {
        var newUl = $("<ul/>");
        var newLi = $("<li/>");
        newUl.addClass('lynxlist');

        $.each(jsonObject, function(index, object) {
            var newLi = $("<li/>");
            newLi.append("<a class=" + 'toggle' + " href=" + 'javascript:void(0)' + ";>" + object.title + '</a>').addClass('reveal');
            newLi.append(list_subcat(object.subcat));
            newUl.append(newLi);

        })
        return newUl;
    }
    //List 2
    function list_subcat(jsonObject) {
        var newUl = $("<ul/>");
        var newLi = $("<li/>");

        $.each(jsonObject, function(index, object) {
            var newLi = $("<li/>");
            var url = object.url;
            // javascript:void(0) is used to prevent the site from being reloaded if the url is null
            if (!url) {
                url = "javascript:void(0)";
            }
            newUl.addClass('item subcat');
            newLi.append(
                $('<a />', {
                    text: object.result,
                    href: url
                }).addClass('toggle').wrap('<li />'));
            //If no subcat2 is specified, don't create the subcat2 ul
            if (object.subcat2 == null) {
                newUl.append(newLi);
            } else
                newLi.append(list_subcat2(object.subcat2));
            newUl.append(newLi);
        })
        return newUl;
    }
    //List 3
    function list_subcat2(jsonObject) {
        var newUl = $("<ul/>");
        var newLi = $("<li/>");

        $.each(jsonObject, function(index, object) {
            var newLi = $("<li/>");
            var url = object.url;
            if (!url) {
                url = "javascript:void(0)";
            }
            newUl.addClass('item subcat2');
            newLi.append(
                $('<a />', {
                    text: object.result,
                    href: url
                }).addClass('toggle').wrap('<li />'));
            newUl.append(newLi);
        })
        return newUl;
    }

    console.log("lynxlist is ready");

})(jQuery);