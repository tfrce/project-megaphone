/*
   _            _     __                    
  | |_ __ _ ___| | __/ _| ___  _ __ ___ ___ 
  | __/ _` / __| |/ / |_ / _ \| '__/ __/ _ \
  | || (_| \__ \   <|  _| (_) | | | (_|  __/
   \__\__,_|___/_|\_\_|  \___/|_|  \___\___|

  ===============================================================================

  A generic widget include script which we will use to show further campaigns etc

  <thomasalwyndavis@gmail.com> or http://taskforce.is for support

  ===============================================================================

  TODO 
    - Use underscores or camelcase?
  
*/

// Wrap widget in function to protect scope
var _tfrce_config = (typeof tfrce_config  !== 'undefined') ? tfrce_config  : {};

(function(window, widget_config){

  // Do configuration

  widget_config.show_style = widget_config.show_style || 'center_modal';
  widget_config.disableGeo = widget_config.disableGeo || false;
  widget_config.debug = widget_config.debug || false;
  widget_config.disableDate = widget_config.disableDate || false;
  widget_config.campaign = widget_config.campaign || 'stopwatchingus';
  widget_config.cookieTimeout = widget_config.cookieTimeout || 86400;

  // Setup
  var active_campaign;
  var ASSET_URL, COOKIE_TIMEOUT;

  if(widget_config.debug) {
    ASSET_URL = '../stopwatchingus/';
    COOKIE_TIMEOUT = 20;
  } else {
    ASSET_URL = '//widget.taskforce.is/widget/stopwatchingus/';
    COOKIE_TIMEOUT = widget_config.cookieTimeout;
  }

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
      if(cookie === null) {
        return false;
      } else {
        return true
      }
    },
    nearDC: function (callback) {
      window.nearDC = callback;
      var script = document.createElement('script');
      script.src = '//geoip.taskforce.is/?callback=nearDC'
      document.getElementsByTagName('head')[0].appendChild(script);
    }
  }

  // Define campaigns

  var campaign = {
    stopwatchingus: {
      cookieName: 'stopwatchingus_hasseen6',
      startDate: new Date(2011, 10, 30, 0),
      endDate: new Date(2014, 10, 30, 0),
      hide: function (el, callback) {
        el.remove();
        setCookie(active_campaign.cookieName, 'true', COOKIE_TIMEOUT);
        if(callback) { callback(); };
      },
      styles: {
        modal: {
          campaign_container: '',
          iframe_container: '',
          iframe: '',
          closeButton: ''
        },
        banner: {
          campaign_container: 'position:fixed;width:100%;bottom:0;z-index:100; padding: 0 20px;',
          iframe_container: 'position: relative; height: 100px; max-width:1201px; margin: 0px auto 8px auto; background: #444;border-radius: 10px;',
          iframe: 'width: 100%;height: 100%;border: 0;margin:0;padding:0;border-radius: 10px;',
          closeButton: 'border: 0;height: 28px;width: 28px;cursor: pointer;position: absolute;top:33px;right:20px;background: url("' + ASSET_URL +'images/close-button.png");'
        },
        dev: {
          campaign_container: 'position:fixed;width:100%;bottom:0;z-index:100; padding: 0 20px;',
          iframe_container: 'position: relative; height: 100px; max-width:1201px; margin: 0px auto 8px auto; background: #444;border-radius: 10px;',
          iframe: 'width: 100%;height: 100%;border: 0;margin:0;padding:0;border-radius: 10px;',
          closeButton: 'border: 0;height: 28px;width: 28px;cursor: pointer;position: absolute;top:33px;right:20px;background: url("' + ASSET_URL +'images/close-button.png");'
        },
        strip: {
          campaign_container: 'position:fixed;width:100%;bottom:0;opacity:1;z-index:100;',
          iframe_container: 'position:relative;height:50px;margin:0 20px 0px 20px;background:#444;border-radius:10px 10px 0 0;',
          iframe: 'width:100%;height:100%;border:0;margin:0;padding:0;border-radius:10px;',
          closeButton: 'border:0;height:28px;width:28px;cursor:pointer;position:absolute;top:11px;right:10px;background:url("' + ASSET_URL +'images/close-button.png");'
        },
        modal: {
          overlay: 'position:fixed; background:#000; width:100%; height:100%;z-index:30;top:0; left:0; opacity:0.5',
          campaign_container: 'position:fixed;left:50%;margin-left:-250px;margin-top:40px;width:500px;top:0;opacity:1;z-index:100;',
          iframe_container: 'position:relative;height:365px; width:500px;background:#444;border-radius:10px;',
          iframe: 'width:100%;height:100%;border:0;margin:0;padding:0;border-radius:10px;',
          closeButton: 'border:0;height:28px;width:28px;cursor:pointer;position:absolute;top:15px;right:15px;background:url("' + ASSET_URL +'images/close-button.png");'
        }
      },
      show: function () {

        var style = active_campaign.styles[active_campaign.config.show_style]
        
        if(style.overlay) {
          var overlay = document.createElement('div');
          overlay.style.cssText = style.overlay;
          document.body.appendChild(overlay);
        }


        // Create a container
        var campaign_container = document.createElement('div');
        campaign_container.style.cssText = style.campaign_container;

        // Create a container for the iframe so we can do padding and border-radius properly
        var iframe_container = document.createElement('div');
        iframe_container.style.cssText = style.iframe_container;



        // Append Iframe and campaign container to document
        campaign_container.appendChild(iframe_container);
        document.body.appendChild(campaign_container);


        var iframe = document.createElement('iframe');
        iframe.style.cssText = style.iframe;

        // Set the source of the iframe to the configured show_style type
        iframe.src = ASSET_URL + active_campaign.config.show_style + '.html';
        iframe_container.appendChild(iframe);

        // Setup a close button
        var closeButton = document.createElement('button');
        closeButton.style.cssText = style.closeButton;
        iframe_container.appendChild(closeButton);
        closeButton.onclick = function() {
          active_campaign.hide(campaign_container);
          if(style.overlay) {
            overlay.remove();
          }
        }


      },
      init: function (config) {
        active_campaign.config = config;
        // Check cookie for this campaign
        if(checks.hasSeenCampaign(active_campaign.cookieName)) {
          return false;
        }

        // Check between date
        if(!checks.betweenDate(active_campaign.startDate, active_campaign.endDate) || active_campaign.config.disableDate) {
          return false;
        }

        // Check if is mobile
        if(!checks.isMobile()){
          return false;
        }

        // Check if they are near Washington?
        if(active_campaign.config.disableGeo) {
          active_campaign.show();
        } else {
          checks.nearDC(function (res) {
            if(res.withinHundredKilometers) {
              active_campaign.show();
            }
          })
        }
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

})(window, _tfrce_config);
