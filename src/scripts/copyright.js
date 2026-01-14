// Простой гарантированно работающий вариант
(function() {
    console.log('Copyright script loaded!');
    
    const year = new Date().getFullYear();
    const div = document.createElement('div');
    div.innerHTML = `© ${year} Eternity 5005. All rights reserved.`;
    div.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgb(0, 0, 0);
        color: white;
        padding: 10px;
        text-align: center;
        z-index: 1000;
    `;
    
    document.body.appendChild(div);
})();
