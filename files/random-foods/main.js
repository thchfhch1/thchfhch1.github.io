const randButton = document.querySelector('button');
const checkBox = document.querySelector('input');
const para = document.querySelector('h2');
const cook = ['清蒸', '红烧', '爆炒', '大火慢炖', '串烧', '碳烤', '油炸', '凉拌', '油焖',
              '水煮', '风干', '盐焗'];
const food = ['遗迹', '精灵球', '尝氨使者', '答辩', '蛐蛐汽车', '玄月', 'A.Square'];
let randomColorOn = 1;

function randomToNum(num)
{
    return Math.floor(Math.random() * num);
}
function random(l, r)
{
    return l + randomToNum(r - l);
}

function randomElement(array)
{
    return array[randomToNum(array.length)];
}
function randomColor()
{
    return ('rgb(' +
            random(0, 255) +
            ',' +
            random(0, 255) + 
            ',' +
            random(0, 255) +
            ')');
}

checkBox.addEventListener('change', () => 
{
    randomColorOn = !randomColorOn;
});

randButton.addEventListener('click', () => 
{
    let s = randomElement(cook) + randomElement(food);
    para.textContent = s;
    para.style.color = (randomColorOn ? randomColor() : 'orange');
}
);

//?不是你tm的为什么不提交我的js，tm的是有病是吧