(function () {
    var launcher = {
        init: function(){
            window.onload = function () {
                searchCall.request.getDataSearch('/amsterdam/tuin/');
                searchCall.request.getDataMap(7, 66, 42, 'koop/heel-nederland');
            }
        },
    }
    launcher.init();
})();