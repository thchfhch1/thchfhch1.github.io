const version = 'V5';
document.title = '随机菜品 ' + version + ' - By thchfhch';

const randButton = document.querySelector('button.rand');
const para = document.querySelector('h2.randvalue');

let cook = ['清蒸', '红烧', '爆炒', '大火慢炖', '碳烤', '油炸', '凉拌', '油焖',
              '水煮', '风干', '盐焗'];
let food = ['遗迹', '尝氨', '答辩', 'A.Square', 'th'];
const cklist = document.querySelector('dl.cook');
const fdlist = document.querySelector('dl.food');
setListByArray(cklist,cook,'烹饪方式');
setListByArray(fdlist,food,'食物');

let randomColorOn = 1;

(document.querySelector('input#randomColorOn')).addEventListener('change', () => 
{
    randomColorOn = !randomColorOn;
});

randButton.addEventListener('click', () => 
{
    let s = randomElement(cook) + randomElement(food);
    para.textContent = s;
    para.style.color = (randomColorOn ? randomColor() : para.style.color);
});

