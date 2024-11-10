### DOM Node relationships



![d5e052b0c27bcfd7d83a5e679e0dc65](D:\weChat\WeChat Files\wxid_k5ec5wi5aalc22\FileStorage\Temp\d5e052b0c27bcfd7d83a5e679e0dc65.png)



### DOM Element Relationships

![8a25918102c20024e35fbe6c6d4e2d1](D:\weChat\WeChat Files\wxid_k5ec5wi5aalc22\FileStorage\Temp\8a25918102c20024e35fbe6c6d4e2d1.png)



### Event Listeners

![eebb68b5406183c1f3bfcf3fcb14592](D:\weChat\WeChat Files\wxid_k5ec5wi5aalc22\FileStorage\Temp\eebb68b5406183c1f3bfcf3fcb14592.png)



The Event Object Attribute

![a07bd9633c8bcdea27e893e91290ae1](D:\weChat\WeChat Files\wxid_k5ec5wi5aalc22\FileStorage\Temp\a07bd9633c8bcdea27e893e91290ae1.png)



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

