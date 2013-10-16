We are still testing over the next 24 hours. Please help us test if you wish, but please don't share this link.

# Multiplex: Help Rally Against Surveillance

> ".. empires and nation-states weren’t organs of global human perception. They had their many eyes, certainly, but they didn’t constitute a single multiplex eye for the entire human species."
> 
> William Gibson

Saturday October 26th is the 12th anniversary of the PATRIOT Act. 

To mark the law's anniversary, the EFF, ACLU, Demand Progress, Free Press and dozens of other public advocacy groups in the StopWatching.us coalition are planning [a rally to protest mass surveilance](https://rally.stopwatching.us) in Washington, DC.

We've spent countless hours organizing buses to transport people from nearby cities, assembled a great lineup of speakers, and filed the relevant permits.

**But we need your help to get the word out**. 

Government surveillance is a grave challenge to privacy of the Internet, and threatens our ability to communicate and conduct transactions privately online. If you own a website, you can be part of this effort. Together we can turn the tide against surveillance.

## Examples

* [Banner](http://tfrce.github.io/widget/example/banner.html)
* [Modal](http://tfrce.github.io/widget/example/modal.html)
* [Strip](http://tfrce.github.io/widget/example/strip.html)


## Getting started

Just copy and paste the code below into your website.

_Place it before `</body>`, the script is optimized to not affect the performance of your website_

```html
<!--[if gte IE 8]>
<script> 
  (function(){
    var e = document.createElement('script'); e.type='text/javascript'; e.async = true;
    e.src = document.location.protocol + '//widget.taskforce.is/widget/widget.min.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(e, s);
  })();
</script>
-->
```

## What does the script do?

We popup a notification on your website, depending on which style you chose. The script is only 1kb and served off the cdnjs.com network.

By default

* The script is date activated, and will come online on the 23rd and automatically shut off on the 28th
* We only display the widget for people in 700km radius of Washington DC, based off their IP address
* A cookie is set with a 48 hour expiry
* We only display this to desktop computers, and anyone on mobile devices won't see it

_These can all be changed via custom configuration which you can find further down the page_

## Configuration

The widget can be customized via a Javascript object

```html
<script> 
  var tfrce_config = {
    show_style: 'banner', // Other styles are banner,modal,strip and dev

    disableGeo: false, // If true, will show to all visitors not just those around Washington DC
    disableDate: false, // If true, will run the widget indefinitely and not just inside the configured time frame
    cookieTimeout: 86400 // Currently set to two days
  };
  (function(){
    var e = document.createElement('script'); e.type='text/javascript'; e.async = true;
    e.src = document.location.protocol + '//widget.taskforce.is/widget/widget.min.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(e, s);
  })();
</script>
```
