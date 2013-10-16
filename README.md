We are still testing over the next 24 hours. Please help us test if you wish, but please don't share this link.

# Project Megaphone: Rally Against Surveillance

Saturday October 26th is the 12th anniversary of the PATRIOT Act. 

To mark the law's anniversary, the EFF, ACLU, Demand Progress, Free Press and dozens of other public advocacy groups in the StopWatching.us coalition are planning [a rally to protest mass surveilance](https://rally.stopwatching.us) in Washington, DC. We've spent countless hours organizing buses to transport people from nearby cities, assembled a great lineup of speakers, and filed the relevant permits. 

**If you own a website, no matter how big or small, we need your help to get the word out and make the rally a success**. 

Mass surveillance is a grave challenge to privacy on the Internet, and threatens our ability to communicate and conduct transactions privately online.

## How Project Megaphone works

The script below checks the IP of each visitor, and if they are within a 700km radius of Washington, D.C., loads one of three versions of a banner advertising the rally.

* The banners are not displayed on mobile devices.
* The script automatically stops displaying the banner after 12pm on October 26th.
* The script and geolocation server have been thoroughly load-tested and can handle millions of hits per day.


## Examples

These example pages display the banners even if you're not near D.C.:

* [Banner](http://tfrce.github.io/widget/example/banner.html)
* [Modal](http://tfrce.github.io/widget/example/modal.html)
* [Strip](http://tfrce.github.io/widget/example/strip.html)


## Getting started

Simply copy and paste the code below into your website.

_Place this before `</body>` tag. The script is optimized to not affect the performance of your website._

```html
<!--[if gte IE 8]>
<script> 
  (function(){
    var e = document.createElement('script'); e.type='text/javascript'; e.async = true;
    e.src = document.location.protocol + '//d1ux67szpr7bp0.cloudfront.net/widget/widget.min.js';
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
    show_style: 'banner', // The four available styles are 'banner', 'modal', 'strip' and 'dev' (see note below).

    disableGeo: false, // If true, will show to all visitors not just those around Washington DC
    cookieTimeout: 172800 // Currently set to two days
  };
  (function(){
    var e = document.createElement('script'); e.type='text/javascript'; e.async = true;
    e.src = document.location.protocol + '//d1ux67szpr7bp0.cloudfront.net/widget/widget.min.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(e, s);
  })();
</script>
```

The 'dev' version of the banner is intended for sites with an audience consisting mostly of developers. When selected, it shows the banner version of the site with an additional link to this Github page. (See: [Backbone Tutorials](http://backbonetutorials.com/) and [Cdnjs](http://cdnjs.com)).

Also feel free to fork and submit pull request for any bugs or quirks you might find. 

Built by [RRITF](http://taskforce.is)