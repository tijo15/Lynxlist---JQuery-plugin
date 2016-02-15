# Lynxlist a JQuery-plugin
A JQuery plugin to create category lists with animations

### Step 1: Install from github

### Step 2: Include the style
This project is using less for styling the lists, you can read more about less [I'm an inline-style link with title](href="http://lesscss.org/ "here")
Include the css and the less file in the <head> element

```<link rel="stylesheet/less" type="text/css" href="css/style.less">
 <script> src="js/less.min.js"</script>```

Include JQuery, JQuery ui and the plugin files just before the end of the body element
```
<!-- jQuery and JQuery ui -->
<script src="js/jquery.js"></script>
<script src="js/jquery-ui.js"></script>

<!-- Lynxlist plugin files-->
<script src="js/main.js"></script>
<script src="js/lynxlist.js"></script>
```
                  
###Step 3: Configure the plugin

Open your lynxlist_config.js file to configure the plugin. Select your div with either a #id or a .class. Remember to use the same name for the 'div:' attribute as shown below
```
//Select a div and apply lynxlist to it
$('#myDiv').lynxlist({

//Use the same div you selected
div: '#myDiv',

/*
Specify effect,options and duration(in millisec) for the in and out 
animations.
Full list off effects and their options can be found here:
https://api.jqueryui.com/category/effects/
*/
//In animation
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
```                  
Now it's time to configure your categories.
Example 1 will result in two lists, the first will have the item "Example with url" when clicked it will show another list with the result "Test url" that holds a link to the site of your choice. Example 2 does the same thing except it will create three lists and the item in the third list will have the link.

```
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
          "url": "https://www.google.com/",
          "result": "item from subcategory 2",
             }]
        }]
    }, 

  ] /*End of Categories*/
},/*End of jsonarray*/
```
The search field is optional to include but if you do, place it over your div, the id should be "search"
```
<input type="text" id="search" >
<div id="myDiv">
</div >
```
Note

I spent a lot of time trying to solve a problem with adding a scrollbar to each list, however i have not yet found a solution to this. You can have a scrollbar on the third and last list as is shown in the demo but you cannot have it on the other lists yet. I hope to solve this as soon as possible
