# tailwind教程

### 环境配置及依赖

1. npm  init -y

2. npm i -D tailwindcss

3. npx tailwindcss init

4. 在自动生成的tailwind配置文件中module.exports对象的content属性中添加 './*.html' 用来监听html和对其样式内容进行编译；

5. 建立input.css文件并加入如下内容：

   @tailwind *base*;

   @tailwind *components*;

   @tailwind *utilities*;

6. 更改package.json文件 将scripts下的属性test改成build 并将其内容改成："tailwindcss -i ./input.css -o ./css/main.css"

7. 增加一个与build同级别的属性名字为watch 属性值为build的基础上后面加上-- watch

8. 然后运行 npm run build

9. 在tailwind.config.js配置文件中的theme对象内加上：

   ```javascript
   screens: {
       sm: '480px',
       md: '768px',
       lg: '976px',
       xl: '1440px'
   }
   ```

10. 在screens同级上的extend中加上：

    ```javascript
    colors: {
            brightRed: 'hsl(12, 88%, 59%)',
            brightRedLight: 'hsl(12, 88%, 69%)',
            brightRedSupLight: 'hsl(12, 88%, 95%)',
            darkBlue: 'hsl(228, 39%, 23%)',
            darkGrayishBlue: 'hsl(227, 12%, 61%)',
            veryDarkBlue: 'hsl(233, 12%, 13%)',
            veryPaleRed: 'hsl(13, 100%, 96%)',
            veryLightGray: 'hsl(0, 0%, 98%)',
          },
    ```

    