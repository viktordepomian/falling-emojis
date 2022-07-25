function rainHeart(){
    let div = document.createElement('div');

    div.classList.add('flamingo');
    
    div.style.left = Math.random() * 100 + 'vw';

    div.innerText = '🦩';
    document.body.append(div);
    
    setTimeout(() => {
        div.remove();
    }, 3000)
}

setInterval(rainHeart, 200);
