

const showQuickMessage = (() => {
    let counter = 0;
    let timeout;
    

    return (txt) => {
        counter++;
        const container = document.getElementsByClassName("quick-msg-container")[0];
        const msgElement = document.createElement("div");
    
        msgElement.innerText = `${counter.toString().padStart(2,0)} >> ${txt}`;
    
        container.append(msgElement);
        
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            container.innerHTML = "";
            counter = 0;
        }, UI_DELAY);
    }
})();

const promptUser = (() => {
    return prompt;
})();