
let EZCounter = {

    // START EZSCRIPT
    setup: () => {
       
            const textContainer = document.querySelectorAll(".EZCounter");
            textContainer.forEach((container)=>{
                container.style.position = "relative";
                const textArea = container.querySelector("textarea");
                textArea.style.width = "100%";
                textArea.style.height = "90%";
                textArea.style.resize = "none";
                textArea.addEventListener("input", ()=>{EZCounter.check()});
                const outputElem = document.createElement("div");
                outputElem.style.position = "absolute";
                outputElem.style.display = "flex";
                outputElem.style.alignItems = "center";
                outputElem.style.justifyContent = "right";
                outputElem.style.bottom = "0";
                outputElem.style.left= "0";
                outputElem.style.backgroundColor = "#ccc";
                outputElem.style.width= "100%";
                outputElem.style.height = "10%";
                outputElem.style.border = "1px solid #aaa";
		outputElem.style.fontSize = "25px";
                outputElem.className = "EZOutput";
                outputElem.textContent = "Words: ";
                outputElem.style.userSelect = "none";
                const tempSpan = document.createElement("span");
                tempSpan.style.paddingRight = "5%";
                tempSpan.style.paddingLeft = "0.5%";
                outputElem.appendChild(tempSpan.cloneNode(false));
                container.append(outputElem.cloneNode(true))
            });
    
    
    
        setInterval(()=>{
            const textArea = document.querySelectorAll(".EZCounter  textarea");
          textArea.forEach((area)=>{
            if(area == document.activeElement){
                area.parentElement.querySelector(".EZOutput").style.padding = "0 1px 0 1px";
                area.parentElement.querySelector(".EZOutput").style.transform = "translateX(-1px)";
            } else {
                area.parentElement.querySelector(".EZOutput").style.padding = "0";
                area.parentElement.querySelector(".EZOutput").style.transform = "none";
            }
          })  
        },10);
   

    },
    check:()=>{
        
        const textAreas = document.querySelectorAll(".EZCounter textarea");
        const areasLength = textAreas.length;
        for(let i=0; i<areasLength;i++){
            let currentText = textAreas[i].value;

            let  wordCount = 0;
            if(/[a-z0-9]{1,}/gi.test(currentText)){
                wordCount = currentText.match(/[a-z0-9]{1,}/gi).length;
            }
            
            textAreas[i].parentElement.querySelector(".EZOutput span").textContent = wordCount;
            
            

        }
    }
    // END EZSCRIPT
};

EZCounter.setup();
EZCounter.check();
