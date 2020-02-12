function loadScriptAsync() {
    const script = document.createElement('script');
    script.onload = function () {
        window.dataLayer = window.dataLayer || [];
      
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-149871373-1');
      };
    script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-149871373-1';
    document.head.appendChild(script);
  }

export {loadScriptAsync};