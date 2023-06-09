# evn

-   mac
-   node 14.18.1
-   vue-cli 5.0.8(本项目没用到)
-   vue 2.6.14
-   cube-ui 1.2.49

# create project

-   create

```
npm init vite@latest //vue
```

-   plugin

```
npm install vite-plugin-vue2
```

-   vite.config.js

```js
import { createVuePlugin } from 'vite-plugin-vue2'

export default {
    plugins: [createVuePlugin()]
}
```

-   删除 vue3 的依赖，添加 vue2 的依赖

# cube ui (vue add cube-ui 会报错，cli 版本过高)

-   install

```
npm install cube-ui --save
```

-   config package.json

```js
"transformModules": {
    "cube-ui": {
      "transform": "cube-ui/lib/${member}",
      "kebabCase": true,
      "style": {
        "ignore": [
          "create-api",
          "better-scroll",
          "locale"
        ]
      }
    }
  }
```

-   config vue.config.js

```
npm i webpack-post-compile-plugin webpack-transform-modules-plugin -D
```

```js
var PostCompilePlugin = require('webpack-post-compile-plugin')
var TransformModulesPlugin = require('webpack-transform-modules-plugin')
module.exports = {
    configureWebpack: {
        plugins: [new PostCompilePlugin(), new TransformModulesPlugin()],
        resolve: {
            alias: {
                'cube-ui': 'cube-ui/lib'
            }
        }
    }
}
```

-   main.js 引入

```js
import 'cube-ui/lib/cube.min.css'
import Cube from 'cube-ui'

Vue.use(Cube)
```

# 集成 sass

```
npm install --save-dev sass
```

# tailwind css

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

-   tailwind.config.js

```js
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {}
    },
    plugins: []
}
```

-   style.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# eslint

-   dep

```
npm i -D eslint
```

-   init

```
npx eslint --init
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · vue
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JavaScript
```

-.eslintrc.cjs

```js
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ['plugin:vue/essential', 'eslint:recommended'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['vue'],
    rules: {
        semi: ['warn', 'never'], // 禁止尾部使用分号
        'no-console': 'warn', // 禁止出现console
        'no-debugger': 'warn', // 禁止出现debugger
        'no-duplicate-case': 'warn', // 禁止出现重复case
        'no-empty': 'warn', // 禁止出现空语句块
        'no-extra-parens': 'warn', // 禁止不必要的括号
        'no-func-assign': 'warn', // 禁止对Function声明重新赋值
        'no-unreachable': 'warn', // 禁止出现[return|throw]之后的代码块
        'no-else-return': 'warn', // 禁止if语句中return语句之后有else块
        'no-empty-function': 'warn', // 禁止出现空的函数块
        'no-lone-blocks': 'warn', // 禁用不必要的嵌套块
        'no-multi-spaces': 'warn', // 禁止使用多个空格
        'no-redeclare': 'warn', // 禁止多次声明同一变量
        'no-return-assign': 'warn', // 禁止在return语句中使用赋值语句
        'no-return-await': 'warn', // 禁用不必要的[return/await]
        'no-self-compare': 'warn', // 禁止自身比较表达式
        'no-useless-catch': 'warn', // 禁止不必要的catch子句
        'no-useless-return': 'warn', // 禁止不必要的return语句
        'no-mixed-spaces-and-tabs': 'warn', // 禁止空格和tab的混合缩进
        'no-multiple-empty-lines': 'warn', // 禁止出现多行空行
        'no-trailing-spaces': 'warn', // 禁止一行结束后面不要有空格
        'no-useless-call': 'warn', // 禁止不必要的.call()和.apply()
        'no-var': 'warn', // 禁止出现var用let和const代替
        'no-delete-var': 'off', // 允许出现delete变量的使用
        'no-shadow': 'off', // 允许变量声明与外层作用域的变量同名
        'dot-notation': 'warn', // 要求尽可能地使用点号
        'default-case': 'warn', // 要求switch语句中有default分支
        eqeqeq: 'warn', // 要求使用 === 和 !==
        curly: 'warn', // 要求所有控制语句使用一致的括号风格
        'space-before-blocks': 'warn', // 要求在块之前使用一致的空格
        'space-in-parens': 'warn', // 要求在圆括号内使用一致的空格
        'space-infix-ops': 'warn', // 要求操作符周围有空格
        'space-unary-ops': 'warn', // 要求在一元操作符前后使用一致的空格
        'switch-colon-spacing': 'warn', // 要求在switch的冒号左右有空格
        'arrow-spacing': 'warn', // 要求箭头函数的箭头前后使用一致的空格
        'array-bracket-spacing': 'warn', // 要求数组方括号中使用一致的空格
        'brace-style': 'warn', // 要求在代码块中使用一致的大括号风格
        camelcase: 'warn', // 要求使用骆驼拼写法命名约定
        indent: ['warn', 4], // 要求使用JS一致缩进4个空格
        'max-depth': ['warn', 4], // 要求可嵌套的块的最大深度4
        'max-statements': ['warn', 100], // 要求函数块最多允许的的语句数量20
        'max-nested-callbacks': ['warn', 3], // 要求回调函数最大嵌套深度3
        'max-statements-per-line': ['warn', { max: 1 }], // 要求每一行中所允许的最大语句数量
        quotes: ['warn', 'single', 'avoid-escape'], // 要求统一使用单引号符号
        'vue/require-default-prop': 0, // 关闭属性参数必须默认值
        'vue/singleline-html-element-content-newline': 0, // 关闭单行元素必须换行符
        'vue/multiline-html-element-content-newline': 0, // 关闭多行元素必须换行符
        // 要求每一行标签的最大属性不超五个
        'vue/max-attributes-per-line': ['warn', { singleline: 5 }],
        // 要求html标签的缩进为需要4个空格
        'vue/html-indent': [
            'warn',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: []
            }
        ],
        // 取消关闭标签不能自闭合的限制设置
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'always',
                    normal: 'never',
                    component: 'always'
                },
                svg: 'always',
                math: 'always'
            }
        ]
    }
}
```

-   plugin

```
npm i -D vite-plugin-eslint
npm i -D @babel/core
npm i -D @babel/eslint-parser
```

-   vite.config.js

```js
import eslintPlugin from 'vite-plugin-eslint'
eslintPlugin({
    // plugins
    include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
})
```

# prettier

```
npm i -D prettier
npm i -D eslint-config-prettier // eslint兼容的插件
npm i -D eslint-plugin-prettier // eslint的prettier
```

-   .prettierrc

```json
{
    "tabWidth": 4, // 使用4个空格缩进
    "semi": false, // 代码结尾是否加分号
    "trailingComma": "none", // 代码末尾不需要逗号
    "singleQuote": true, // 是否使用单引号
    "printWidth": 100, // 超过多少字符强制换行
    "arrowParens": "avoid", // 单个参数的箭头函数不加括号 x => x
    "bracketSpacing": true, // 对象大括号内两边是否加空格 { a:0 }

    "endOfLine": "auto", // 文件换行格式 LF/CRLF
    "useTabs": false, // 不使用缩进符,而使用空格
    "quoteProps": "as-needed", // 对象的key仅在必要时用引号
    "jsxSingleQuote": false, // jsx不使用单引号,而使用双引号
    "jsxBracketSameLine": false, // jsx标签的反尖括号需要换行
    "rangeStart": 0, // 每个文件格式化的范围是文件的全部内容
    "rangeEnd": Infinity, // 结尾
    "requirePragma": false, // 不需要写文件开头的 @prettier
    "insertPragma": false, // 不需要自动在文件开头插入 @prettier
    "proseWrap": "preserve", // 使用默认的折行标准
    "htmlWhitespaceSensitivity": "css" // 根据显示样式决定html要不要折行
}
```

# .eslintrc.cjs

```js
// extends
'plugin:prettier/recommended', 'eslint-config-prettier'
// plugins
;('prettier')
```
# 回车换行符问题
```
git config --global core.autocrlf false

```

# postcss-px2rem
```
npm i amfe-flexible -D
npm i postcss-pxtorem -D

```
- postcss.config.js
```js
'postcss-pxtorem': {
    rootValue: 37.5,
    propList: ['*'],
    unitPrecision: 5
}

```
- main.js
```js
import 'amfe-flexible'

```
