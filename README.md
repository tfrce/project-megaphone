# Rally Against Mass Surveillance

Saturday October 26th is the 12th anniversary of the PATRIOT Act. 

On that day, the EFF, ACLU, Demand Progress, Free Press and dozens of other public advocacy groups are planning a rally to protest mass surveilance in Washington, DC as members of the StopWatching.us coalition.

We've spent countless hours organizing buses to transport people from nearby cities, assembled a great lineup of speakers, and filed the relevant permits.

**But we need your help to get the word out**. 

Government surveillance is a grave challenge to privacy of the Internet, and threatens our ability to communicate and conduct transactions privately online. If you own a website, you can be part of this effort. Together we can turn the tide against surveillance.


## Getting started

Just copy and paste the code below into your website.

_Place it before `</body>`, the script is optimized to not affect the performance of your website_

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

By default

* The script is date activated, and will come online on the 23rd and automatically shut off on the 28th
* We only display the widget for people in 100km radius of Washington DC, based off their IP address
* A cookie is set with a 24 hour expiry
* We only display this to desktop computers, and anyone on mobile devices won't see it

_These can all be changed via custom configuration which you can find further down the page_

## Examples

* [Top Large Banner](http://tfrce.github.io/widget/example/top_large_banner_example.html)
* [Top Small Banner](http://tfrce.github.io/widget/example/bottom_small_banner_example.html)
* [Bottom Large Banner](http://tfrce.github.io/widget/example/bottom_large_banner_example.html)
* [Center Modal](http://tfrce.github.io/widget/example/center_modal_example.html)

## Configuration

The widget can be customized via a Javascript object

```html
<script> 
  var tfrce_config = {
    show_style: 'center_modal', // Default - center_modal, top_large_banner, bottom_large_banner, bottom_smaller_banner

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
