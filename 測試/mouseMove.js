function mouseMove(){
        //使用addEventListener監聽器，監聽mousemove滑鼠移動，並觸發後面的function
        window.addEventListener('mousemove', (event) => {
            /*在function內會傳入我們監聽的滑鼠物件，
              我們可以從這個物件中取得我們要的資料：
              x座標 event.pageX 及y座標 event.pageY
              並把它印在console中*/
            console.log(`${event.pageX},${event.pageY}`)
        })


        let canvas = document.getElementById("myCanvas");
        let ctx = canvas.getContext("2d");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;

        let mouse = {
            x: 0,
            y: 0,
        }

        window.addEventListener('mousemove', (event) => {
            mouse.x = event.pageX;
            mouse.y = event.pageY;
        })
    
        //一個繪製的function
        const draw = () => {
            //先清掉cvanvas目前繪製的圖形
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            //開始作畫
            ctx.beginPath();
            //以滑鼠座標為圓心，畫一個半徑為30的圓形
            ctx.arc(mouse.x, mouse.y, 30, 0, Math.PI * 2);
            //用橘色畫線
            ctx.strokeStyle = "#FF5511";
            ctx.stroke();
            //黃色填滿
            ctx.fillStyle = "#FFFF00";
            ctx.fill();
        }

        //在最後重複執行繪製，讓他50毫秒繪製一次
        setInterval('draw()', 50)
    }
