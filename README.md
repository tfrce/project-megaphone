We are still testing over the next 24 hours. Please help us test if you wish, but please don't share this link.

# Project Megaphone: Rally Against Surveillance

Saturday October 26th is the 12th anniversary of the PATRIOT Act. 

To mark the law's anniversary, the EFF, ACLU, Demand Progress, Free Press and dozens of other public advocacy groups in the StopWatching.us coalition are planning [a rally to protest mass surveilance](https://rally.stopwatching.us) in Washington, DC.

We've spent countless hours organizing buses to transport people from nearby cities, assembled a great lineup of speakers, and filed the relevant permits. 

**If you own a website, no matter how big or small, we need your help to get the word out**. 

Government surveillance is a grave challenge to privacy of the Internet, and threatens our ability to communicate and conduct transactions privately online. If you want surveillance to stop, join us.

## How it works

The Project Megaphone script checks the IP of each visitor, and if they are within a 700km radius of Washington, D.C., loads one of three versions of a banner advertising the rally.

Some more notes on its operation:
* The banners are not displayed on mobile devices.
* The script automatically stops displaying the banner after 12pm on October 26th.
* The script and geolocation server have been thoroughly load-tested and can handle millions of hits per day.


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

## Script defaults

* The script will run between the date that you add it to your site and 12pm on October 26th.
* We only display the widget for people in 700km radius of Washington DC, based off their IP address.
* If a user clicks to close the banner, the banner will not be shown to them for another 48 hours.
* We only display banners to desktop computers; mobile devices won't see it.

## Configuration

The widget can be customized via a Javascript object

```html
<script> 
  var tfrce_config = {
    show_style: 'banner', // Other styles are banner,modal,strip and dev

    disableGeo: false, // If true, will show to all visitors not just those around Washington DC
    cookieTimeout: 172800 // Currently set to two days
  };
  (function(){
    var e = document.createElement('script'); e.type='text/javascript'; e.async = true;
    e.src = document.location.protocol + '//widget.taskforce.is/widget/widget.min.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(e, s);
  })();
</script>
```
