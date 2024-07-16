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
    if(array.length === 0) return randomElement(['114514 ','1919810 ','666 ','999 ','54188 ','SB250 ']);
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

function removeItemOnce(arr, value) {
    let index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
}
function removeItemAll(arr, value) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === value) {
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }
    return arr;
}

function clearList(list){
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }
}

function setListByArray(list,arr,title)
{
    clearList(list);
    
    /*title*/{
        let dt = document.createElement('dt');
        let node = document.createElement('h3');
        node.textContent=title;
        node.style.color='green';
        dt.append(node);
        list.append(dt);
    }

    for(let i in arr){
        let dt = document.createElement('dt');
        let close = document.createElement('span');
        let val = arr[i];
        close.append('x');
        close.setAttribute("class","close");
        close.addEventListener("click",function(){
            this.parentElement.style.display='none';
            removeItemOnce(arr,val);
        });
        dt.append(close,val);
        dt.setAttribute('class','di');
        list.append(dt);
    }

    let dt = document.createElement('dt');
    let label = document.createElement('label');
    label.setAttribute('for','in');
    let inputBox = document.createElement('input');
    inputBox.setAttribute("type","text");
    inputBox.setAttribute('minlength','1');
    inputBox.setAttribute('name','in');
    let appendButton = document.createElement('input');
    appendButton.setAttribute('type','button');
    appendButton.setAttribute('value','添加');
    label.append(inputBox);
    dt.append(inputBox,appendButton);
    list.append(dt);

    appendButton.addEventListener('click', ()=>{
        arr.push(inputBox.value);
        inputBox.value="";
        setListByArray(list,arr,title);
    });
}