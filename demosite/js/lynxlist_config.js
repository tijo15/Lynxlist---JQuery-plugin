$(document).ready(function() {
    'use strict';

   
    //Select a div and apply lynxlist to it
    $('#myDiv').lynxlist({

        //Use the same div you selected
        div: '#myDiv',
        /*
        Specify effect,options and duration(in millisec) for the in and out animations.
        Full list off effects and their options can be found here:
        https://api.jqueryui.com/category/effects/
        */
        inEffect: "slide",
        inOpts: {
            easing: "swing",
            direction: "left",
        },
        inDuration: 400,

        //Out animation
        outEffect: "slide",
        outOpts: {
            easing: "swing",
            direction: "left",
        },
        outDuration: 300,

        /*
        Create your categories and
        subcategories. 
        */
        jsonarray: {
            "Categories": [

                /* 1. Example with url */
                {
                    "title": "Example with url",
                    "subcat": [{
                        "result": "Test url",
                        "url": "https://www.google.com/",
                    }]
                }, 

                /*2. Example with two subcategories*/
                {
                    "title": "Example with two subcategories",
                    "subcat": [{
                        "result": "Test subcategory",

                        "subcat2": [{
                            "result": "item from subcategory 2",
                        }]
                    }]
                }, 

                /* 3. Example with multiple results*/
                {
                    "title": "Example with multiple results",
                    "subcat": [{
                            "result": "item1",
                            "url": "",

                            "subcat2": [{
                                "result": "subcat result for item 1",
                            }]
                        },

                        {
                            "result": "item2",

                            "subcat2": [{
                                "url": "https://www.google.com/",
                                "result": "subcat result for item 2 with url",
                            }]
                        },

                        {
                            "result": "item3",

                            "subcat2": [{
                                "result": "item3 res2",
                            }, {
                                "result": "item5 res2",
                            }, {
                                "result": "item3 res2",
                            }, {
                                "result": "item5 res2",
                            }, {
                                "result": "item3 res2",
                            }, {
                                "result": "item5 res2",
                            }]
                        }
                    ] /*End of subcat example 3*/
                }, 

            ] /*End of Categories*/
        },/*End of jsonarray*/
    }); /*End of lynxlist plugin*/

});