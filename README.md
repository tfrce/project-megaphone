
# Stop Watching Us - Script Include

Help gain traction for the protest in Washington DC, sina can you fix this copy.

## Getting started

Just copy and paste the code below to include the script


```html
<script> 
  (function(){
    var e = document.createElement('script'); e.type='text/javascript'; e.async = true;
    e.src = document.location.protocol + '//cdnjs.cloudflare.com/ajax/libs/tfrce-widget/1/widget.min.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(e, s);
  })();
</script>
```

## What does the script do?

We popup a notification on your website, depending on which style you chose. The script is only 1kb and served off the cdnjs.com network.

* The script is date activated, and will come online on the 23rd and automatically shut off on the 28th
* We only display the widget for people in 100km radius of Washington DC, based off their IP address
* When a user closes the window it doesn't re-open for another 12 hours
* We are only displaying this to desktop computers, and anyone on mobile devices won't see it

## Examples

* [Top Large Banner](http://tfrce.github.io/widget/example/top_large_banner_example.html)
* [Top Small Banner](http://tfrce.github.io/widget/example/top_small_banner_example.html)
* [Bottom Large Banner](http://tfrce.github.io/widget/example/bottom_large_banner_example.html)
* [Center Modal](http://tfrce.github.io/widget/example/center_modal_example.html)

## Configuration

The widget can be customized via a Javascript object

**You will most likely want to only change the style of the widget to one of the above examples

```html
<script> 
  var tfrce_config = {
    show_style: 'center_modal', // Default - center_modal, top_large_banner, bottom_large_banner, top_smaller_banner

    disableGeo: false, // Default - If true, will show to all visitors not just those around Washington DC
    disableDate: false, // Default - If true, will run the widget indefinitely and not just inside the configured time frame
  };
  (function(){
    var e = document.createElement('script'); e.type='text/javascript'; e.async = true;
    e.src = document.location.protocol + '//cdnjs.cloudflare.com/ajax/libs/tfrce-widget/1/widget.min.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(e, s);
  })();
</script>
```