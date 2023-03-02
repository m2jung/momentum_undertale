const quotes = [
    
    {
        quote: " * 오늘의 우리의 모습은 어제의 생각에서 비롯되며, 현재의 생각이 내일의 삶을 구축한다, 우리의 삶은 마음의 창조이다.",
        author: " - 釋迦牟尼",
    },
    {
        quote: " * 강해지고싶다면 혼자가 되는 것을 배워라.",
        author: " - 釋迦牟尼",
    },
    {
        quote: " * 스스로의 구원을 찾아라 절대 남에게 의지하지 마라",
        author: " - 釋迦牟尼 ",
    },
    {
        quote: " * 스스로 등불이 되어라. 스스로의 피난처가 되어라. 다른것은 찾지마라.",
        author: " - 釋迦牟尼 ",
    },
    {
        quote: " * 매일 아침 우리는 다시 태어난다. 오늘 우리가 하는 일이 오늘의 가장 중요한 일이다.",
        author: " - 釋迦牟尼 ",
    },
    {
        quote: "* 고통이 너를 붙잡고 있는 것이 아니다. 내가 그 고통을 붙잡고 있는 것이다.",
        author: " - 釋迦牟尼",
    },
    {
        quote: "* 혼자 걷고, 분투하고, 혼자 힘으로 억누르는 자는 숲의 고독에서 기쁨을 찾을 것이다.",
        author: " - 釋迦牟尼 ",
    },
    {
        quote: "* 기적은 매일 일어나기 때문에 희망을 믿는 것을 멈추지 마라.",
        author: " - 釋迦牟尼 ",
    },
    {
        quote: "* 우리가 보통의 자연스러운 부분이라는 것을 인정하기 시작할 때 우리는 다시 행복에 빠질 것이다.",
        author: " - 釋迦牟尼",
    },
    {
        quote: "* 태산같은 자부심을 갖고 누운 풀처럼 자기를 낮추어라.",
        author: " - 釋迦牟尼 "
    },
    {
        quote: "* 마음은 언제나 비워두지 않으면 안된다. 마음이 비어있어야 정의와, 진리가 깃들기 때문이다.",
        author: " - 釋迦牟尼 "
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


//Math.floor : 내림 Math.random 0.0 < 1.0 까지 랜덤수
const todayQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;