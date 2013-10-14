/*
   _            _     __                    
  | |_ __ _ ___| | __/ _| ___  _ __ ___ ___ 
  | __/ _` / __| |/ / |_ / _ \| '__/ __/ _ \
  | || (_| \__ \   <|  _| (_) | | | (_|  __/
   \__\__,_|___/_|\_\_|  \___/|_|  \___\___|

  ===============================================================================

  Taskforce Widget
  A generic widget include script which we will use to show further campaigns etc
  <thomasalwyndavis@gmail.com> for support

  ===============================================================================

  TODO 
    - Use underscores or camelcase?

  <script type="text/javascript">
    window._idl = {};
    _idl.variant = "modal";
    _idl.campaign = "defundnsa";
    (function() {
        var idl = document.createElement('script');
        idl.type = 'text/javascript';
        idl.async = true;
        idl.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'members.internetdefenseleague.org/include/?url=' + (_idl.url || '') + '&_idl_test=1&campaign=' + (_idl.campaign || '') + '&variant=' + (_idl.variant || 'banner');
        document.getElementsByTagName('body')[0].appendChild(idl);
    })();
  </script>

  http://geoip.taskforce.is/64.64.64.64

*/

// Wrap widget in function to protect scope
var _tfrce_config = (typeof tfrce_config  !== 'undefined') ? tfrce_config  : {};

(function(widget_config){

  // Do configuration

  widget_config.show_style = widget_config.show_style || 'modal';
  widget_config.campaign = widget_config.campaign || 'stopwatchingus';

  // Setup
  var active_campaign;

  // Cookie helpers, taken from w3schools
  function setCookie(c_name,value,seconds) {
    var exdate = new Date(new Date().getTime() + seconds*1000);
    console.log(new Date(), exdate);
    var c_value=escape(value) + ((seconds==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
  }

  function getCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) { c_start = c_value.indexOf(c_name + "="); };
    if (c_start == -1) { 
      c_value = null; 
    } else {
      c_start = c_value.indexOf("=", c_start) + 1;
      var c_end = c_value.indexOf(";", c_start);
      if (c_end == -1) { c_end = c_value.length; }
      c_value = unescape(c_value.substring(c_start,c_end));
    }
    return c_value;
  }

  // Define checks

  var checks = {
    betweenDate: function(startDate, endDate) {
      var startEpoch = startDate.getTime();
      var endEpoch = endDate.getTime();
      var currentEpoch = new Date().getTime();
      if(currentEpoch > startEpoch && currentEpoch < endEpoch) {
        return true;
      } else {
        return false;
      }
    },
    isMobile: function() {
      var ismobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
      return ismobile ? false : true;
    },
    hasSeenCampaign: function (cookieName) {
      var cookie = getCookie(cookieName)
      console.log(cookie)
      if(cookie === null) {
        //setCookie(cookieName, 'true', 1);
        return false;
      } else {
        return true
      }
    }
  }

  // Define campaigns


  var campaign = {
    stopwatchingus: {
      cookieName: 'stopwatchingus_hasseen5',
      startDate: new Date(2011, 10, 30, 0),
      endDate: new Date(2014, 10, 30, 0),
      hide: function (el, callback) {
        el.remove();
        setCookie(active_campaign.cookieName, 'true', 20);
        if(callback) { callback(); };
      },
      styles: {
        modal: {
          campaign_container: '',
          iframe_container: '',
          iframe: '',
          closeButton: ''
        },
        top_large_banner: {
          campaign_container: 'position:absolute;width:100%;top:0;opacity:1;z-index:100;background: #fff',
          iframe_container: 'position: relative; height: 100px;margin: 40px 40px 0px 40px;background: #444;border-radius: 10px;',
          iframe: 'width: 100%;height: 100%;border: 0;margin:0; padding:0; border-radius: 10px;',
          closeButton: 'border: 0;height: 28px;width: 28px;cursor: pointer;position: absolute;top:33px;right:20px; background: url("../stopwatchingus/images/close-button.png");'

        }
      },
      show: function () {
        var campaign_container = document.createElement('div');
        var style = active_campaign.styles[active_campaign.config.show_style]
        campaign_container.style.cssText = style.campaign_container;
        var iframe_container = document.createElement('div');
        iframe_container.style.cssText = style.iframe_container;
        campaign_container.appendChild(iframe_container);
        document.body.appendChild(campaign_container);
        var iframe = document.createElement('iframe');
        iframe.style.cssText = style.iframe;
        iframe.src = '../stopwatchingus/' + active_campaign.config.show_style;
        iframe_container.appendChild(iframe);
        var closeButton = document.createElement('button');
        closeButton.style.cssText = style.closeButton;
        iframe_container.appendChild(closeButton);
        closeButton.onclick = function() {
          active_campaign.hide(campaign_container)
        }
      },
      init: function (config) {
        active_campaign.config = config;
        // Check cookie for this campaign
        if(checks.hasSeenCampaign(active_campaign.cookieName)) {
          return false;
        }

        // Check between date
        if(!checks.betweenDate(active_campaign.startDate, active_campaign.endDate)) {
          return false;
        }

        // Check if is mobile
        if(!checks.isMobile()){
          return false;
        }

        // All checks passed, show campaign
        active_campaign.show();
      }
    }
  }

  // Load campaign if exist

  if(typeof campaign[widget_config.campaign] !== 'undefined') {
    active_campaign = campaign[widget_config.campaign];
    active_campaign.init(widget_config);
  } else {
    return false;
  }

})(_tfrce_config);
