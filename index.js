const pos = document.getElementById('clocktime');
        function timerClock(){
            const ti = new Date();
            const hours = ti.getHours();
            const minutes = ti.getMinutes();
            const seconds = ti.getSeconds();
            let showTime = "";
            showTime = hours<10?'0'+hours+':':hours+':';
            showTime += minutes<10?'0'+minutes+':':minutes+':';
            showTime += seconds<10?'0'+seconds:seconds;
            showTime += hours>12?' P.M.':' A.M.';
            pos.innerHTML = showTime;
        }
            setInterval(timerClock,1000);