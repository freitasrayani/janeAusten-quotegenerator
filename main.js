const message = 
[
    '"Não são o tempo nem a oportunidade que determinam a confiança; só a índole o faz" – Jane Austen',
    '"A metade do mundo não consegue entender os prazeres da outra metade" – Jane Austen',
    '"Desejo, como todos os mortais, ser perfeitamente feliz; mas, como todos os mortais, quero ser feliz à minha maneira" – Jane Austen',
    '"Quando a mente não quer ser convencida, sempre encontra algo para inspirar-lhe dúvidas." - Jane Austen',
    '"Eu não vivo sem música, absolutamente. Para mim, é uma necessidade vital" – Jane Austen',
    '"Conhecer você e não ficarmos juntos seria um pesadelo." - Jane Austen',
    '"Um temperamento maleável podia às vezes favorecer tanto a felicidade quanto um caráter muito decidido." - Jane Austen',
    '"Sou metade agonia, metade esperança." - Jane Austen',
    '"Onde há predisposição para antipatia jamais faltará motivo." - Jane Austen',
    '"Nós somos nossos melhores guias." - Jane Austen',];

    const color = ['#7B68EE', '#9370DB', '#8A2BE2', '#DDA0DD', '#9400D3', '#9932CC', '#BA55D3', '#A020F0', '#8B008B', '#FF00FF'];    

const result = document.querySelector('.quotes');

const btn = document.querySelector('.btn');
btn.addEventListener('click', clicar);

function clicar() {
    let numberRandom = Math.floor(Math.random() * color.length);
    document.querySelector('.box').style.background = color[numberRandom];
    
    result.innerHTML = message[numberRandom]
};
