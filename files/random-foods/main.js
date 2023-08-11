const randButton = document.querySelector('button');
const para = document.querySelector('h2');
const cook = ['清蒸', '红烧', '爆炒', '大火慢炖', '串烧', '碳烤', '油炸', '凉拌', '油焖',
              '水煮', '风干', '盐焗'];
const food = ['遗迹', '精灵球', '尝氨使者', '[th]', '答辩', '蛐蛐汽车', '玄月'];

function ramdom(num)
{
    return Math.floor(Math.random() * num);
}

function randomElement(array)
{
    return array[ramdom(array.length)];
}

randButton.addEventListener('click', () => 
{
    let s = randomElement(cook) + randomElement(food);
    para.textContent = s;
}
);