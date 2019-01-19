var imported = document.createElement('script');
imported.src = '../src/gest.js';
document.head.appendChild(imported);

console.log("Hello");

chrome.browserAction.onClicked.addListener(function (tab) {

    gest.start();
    gest.options.subscribeWithCallback(function (gesture) {

        if (gesture.down) {
            chrome.tabs.executeScript(tab.id,
                {
                    code: 'window.scrollBy(0,500);'
                }
            );
        }

        if (gesture.up) {
            chrome.tabs.executeScript(tab.id,
                {
                    code: 'window.scrollBy(0,-500);'
                }
            );
        }
        // if(gesture.left){
        //     chrome.tabs.executeScript(tab.id,
        //         {
        //             code: 'window.scrollBy(0,500);'
        //         }
        //     );
        // }
        // if(gesture.right){
        //     chrome.tabs.executeScript(tab.id,
        //         {
        //             code: 'window.scrollBy(0,500);'
        //         }
        //     );
        // }

    });
});