# Project Megaphone

Saturday October 26th is the 12th anniversary of the PATRIOT Act. 

To mark the law's anniversary, the EFF, ACLU, Demand Progress, Free Press and dozens of other public advocacy groups in the StopWatching.us coalition are planning [a rally to protest mass surveilance](https://rally.stopwatching.us) in Washington, DC. We've spent countless hours organizing buses to transport people from nearby cities, assembled a great lineup of speakers, and filed the relevant permits. 

**If you own a website, no matter how big or small, we need your help to get the word out and make the rally a success**. 

Mass surveillance is a grave challenge to privacy on the Internet, and threatens our ability to communicate and conduct transactions privately online.

## How Project Megaphone works

The script below checks the IP of each visitor, and if they are within a 700km radius of Washington, D.C., loads one of three versions of a banner advertising the rally.

* The banners are not displayed on mobile devices.
* The script automatically stops displaying the banner after 12pm on October 26th.
* The script and geolocation server have been thoroughly load-tested and can handle millions of hits per day.


## Banner styles

The "view example page" links below display the banners even if you're not near D.C.

**Default style** ([view example page](http://tfrce.github.io/project-megaphone/example/default.html))<br />
<img src="screenshots/default.png" alt="modal"width="280" />


**Modal** ([view example page](http://tfrce.github.io/project-megaphone/example/modal.html))<br />
<img src="screenshots/modal.png" alt="modal"width="280" />


**Strip** ([view example page](http://tfrce.github.io/project-megaphone/example/strip.html))<br />
<img src="screenshots/strip.png" alt="modal"width="280" />


## Getting started

Simply copy and paste the code below into your website.

_Place this before `</body>` tag. The script is optimized to not affect the performance of your website._

```html
<!--[if gt IE 8]>
<script> 
  (function(){
    var e = document.createElement('script'); e.type='text/javascript'; e.async = true;
    e.src = document.location.protocol + '//d1ux67szpr7bp0.cloudfront.net/project-megaphone/widget.min.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(e, s);
  })();
</script>
<![endif]-->
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
    show_style: 'default', // The four available styles are 'default', 'modal', 'strip' and 'dev' (see note below).

    disableGeo: false, // If true, will show to all visitors not just those around Washington DC
    cookieTimeout: 172800 // Currently set to two days
  };
  (function(){
    var e = document.createElement('script'); e.type='text/javascript'; e.async = true;
    e.src = document.location.protocol + '//d1ux67szpr7bp0.cloudfront.net/project-megaphone/widget.min.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(e, s);
  })();
</script>
```

The 'dev' style is intended for sites with an audience consisting mostly of developers. When selected, it shows the default version of the banner but adds a link to this Github page. (See: [Backbone Tutorials](http://backbonetutorials.com/) and [Cdnjs](http://cdnjs.com)).

Please feel free to fork and submit pull requests for any bugs or quirks you might find. 

Built by [Taskforce.is](http://taskforce.is) members [Thomas Davis](https://twitter.com/neutralthoughts), [Tyler Morgan](https://twitter.com/digismack), [Beau Gunderson](https://twitter.com/beaugunderson) and [Sina Khanifar](https://twitter.com/sinak).
