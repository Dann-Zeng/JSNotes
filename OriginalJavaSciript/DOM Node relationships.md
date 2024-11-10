### DOM Node relationships



![DomNodeRelationship](E:\JsNotes\OriginalJavaSciript\icons\DomNodeRelationship.png)



### DOM Element Relationships

![DomElementRelationship](E:\JsNotes\OriginalJavaSciript\icons\DomElementRelationship.png)



### Event Listeners

![EventListeners](E:\JsNotes\OriginalJavaSciript\icons\EventListeners.png)



### The Event Object Attribute

![TheEventObjectAttribute](E:\JsNotes\OriginalJavaSciript\icons\TheEventObjectAttribute.png)



### 一个输出键盘key的三个值的js代码

```javascript
function showKeyCodes(e) {                            // 创建函数
  const insert = document.getElementById('insert');   // 找到对应html标签
  insert.innerHTML = '';							// 每次按下新key都先清空原先内容
  const keyCodes = {								// 一个对象 存储了key的三个值
    'e.key': (e.key === ' ' ? 'space' : e.key),
    'e.keyCode': e.keyCode,
    'e.code': e.code,
  }

  for (let key in keyCodes) {							// 循环迭代对象 取出值创建元素并将值导入 最后给insert元素
    const div = document.createElement('div');			
    div.className = 'key';
    const small = document.createElement('small');

    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCodes[key]);
    const line = document.createElement('br');

    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(line);
    div.appendChild(small);

    insert.appendChild(div);
  }
}

window.addEventListener('keydown', showKeyCodes);
```

