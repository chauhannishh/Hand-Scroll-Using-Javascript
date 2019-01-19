//var toggle = -1;
var time;
var i=-1;
var x = 0;
var toggle = [1,3,4,-1,1,3,4,3,4,0,1,3];

// function giveValue()
// {
//     //i = (i+1)%16;
//     while(i<9)
//     {
//         ++i;
//         return toggle[i];
//     }
// }




chrome.browserAction.onClicked.addListener(function(tab) 
{
        time = setInterval(function() {
            x=giveValue();
            console.log(x);

            if(x==0)
            {
                clearInterval(time);
            }

            if(x==1)
            {
                chrome.tabs.executeScript(tab.id,
                    {
                        code: 'window.scrollBy(0,500);'
                    }
                );
            }

            if(x==2)
            {
                chrome.tabs.executeScript(tab.id,
                    {
                        code: 'window.scrollBy(0,-500);'
                    }
                );
            }
            
            if(x==3) //Zoom in
            {
                document.getElementsByTagName('body')[0].style.zoom = document.getElementsByTagName('body')[0].style.zoom + 20 + '%';
                // var Page = document.getElementsByTagName('body')[0];
                // console.log(parseInt(Page.style.zoom));
                // var zoom = parseInt(Page.style.zoom) + 10 + '%';
                // Page.style.zoom = zoom;
            }

            if(x==4) //Zoom out
            {
                document.getElementsByTagName('body')[0].style.zoom = '20%';
               // var Page = document.getElementsByTagName('body')[0];
                // console.log(parseInt(Page.style.zoom));
                // var zoom = parseInt(Page.style.zoom) - 10 + '%';
                // Page.style.zoom = zoom;
            }




        },1000);
        //clearInterval(time);
   // } 
    /*else if(toggle[i] == -1){
       console.log("toggle up");
       time = setInterval(function() {
        
            chrome.tabs.executeScript(tab.id,
                {
                    code: 'window.scrollBy(0,-50);'
                }
            );
            
        },100);
       clearInterval(time);
    }
    else{
      clearInterval(time);
    }*/
    //}
    
});