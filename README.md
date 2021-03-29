##.editorconfig的作用
让编译器统一化,不是每个人都在严格要求自己的代码规范和风格，对于多人协作的项目这容易出现问题，毕竟每个人所用的 IDE 和编辑器都可能不同。

相关配置
```
root = true                         # 根目录的配置文件，编辑器会由当前目录向上查找，如果找到 `roor = true` 的文件，则不再查找

[*]                                 # 匹配所有的文件
indent_style = space                # 空格缩进
indent_size = 4                     # 缩进空格为4个
end_of_line = lf                    # 文件换行符是 linux 的 `\n`
charset = utf-8                     # 文件编码是 utf-8
trim_trailing_whitespace = true     # 不保留行末的空格
insert_final_newline = true         # 文件末尾添加一个空行
curly_bracket_next_line = false     # 大括号不另起一行
spaces_around_operators = true      # 运算符两遍都有空格
indent_brace_style = 1tbs           # 条件语句格式是 1tbs

[*.js]                              # 对所有的 js 文件生效
quote_type = single                 # 字符串使用单引号

[*.{html,less,css,json}]            # 对所有 html, less, css, json 文件生效
quote_type = double                 # 字符串使用双引号

[package.json]                      # 对 package.json 生效
indent_size = 2                     # 使用2个空格缩进
```
```text
[*.{js,jsx,ts,tsx,vue}]
indent_style = space
indent_size = 2
trim_trailing_whitespace = true
insert_final_newline = true
```
