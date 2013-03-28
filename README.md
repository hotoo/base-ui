# base-ui

支付宝移动端样式解决方案。还未成型，一切皆有可能。
___

## Header

````html
<header class="ui-header">
    <h1><img src="https://i.alipayobjects.com/e/201302/2F9uXmFQZ3.png" alt="Alipay" width="70" height="24px" /></h1>
    <a href="#" title="返回" class="ui-button-back">返回</a>
    <a href="#" title="详情" class="ui-button-detail">详情</a>    
</header>
````

## Tipbox

### 信息

````html
<div class="ui-tipbox ui-tipbox-message">
    <div class="ui-tipbox-icon icon-info-circle"></div>
    <div class="ui-tipbox-content">
        <p>提示信息</p>
        <p>更多提示信息，更多提示信息</p>
        <p>更多提示信息，更多提示信息</p>
    </div>
</div>
````

### 成功

````html
<div class="ui-tipbox ui-tipbox-success">  
    <div class="ui-tipbox-icon icon-success-circle"></div>
    <div class="ui-tipbox-content"><p>成功信息</p></div>
</div>
````

### 失败

````html
<div class="ui-tipbox ui-tipbox-error">
    <div class="ui-tipbox-icon icon-error-circle"></div>
    <div class="ui-tipbox-content"><p>错误信息</p></div>
</div>
````

## Tiptext

### 信息

````html
<p class="ui-tiptext ui-tiptext-message"><i class="ui-tiptext-icon icon-info-circle"></i>提示信息 </p>
````
### 成功

````html
<p class="ui-tiptext ui-tiptext-success"><i class="ui-tiptext-icon icon-success-circle"></i>成功信息</p>
````

### 失败

````html
<p class="ui-tiptext ui-tiptext-error"><i class="ui-tiptext-icon icon-error-circle"></i>错误信息</p>
````

## Poptip

`ui-poptip`为基类，添加颜色：`ui-poptip-red`，`ui-poptip-green`；添加方向：`ui-poptip-arrow-1`，`ui-poptip-arrow-2` ……
___

````html
<p class="ui-poptip ui-poptip-arrow-1">提示信息 </p>
<p class="ui-poptip ui-poptip-arrow-2">提示信息 </p>
<p class="ui-poptip ui-poptip-red ui-poptip-arrow-5">提示信息 </p>
<p class="ui-poptip ui-poptip-red ui-poptip-arrow-7">提示信息 </p>
<p class="ui-poptip ui-poptip-green ui-poptip-arrow-10">提示信息 </p>
<p class="ui-poptip ui-poptip-green ui-poptip-arrow-10">提示信息 </p>
<p class="ui-poptip ui-poptip-green ui-poptip-arrow-11">提示信息 </p>
````

## List

````html
<ul class="ui-list">
    <li>列表1<i class="icon-angle-left"></i></li>
    <li>列表2<i class="icon-angle-right"></i></li>
    <li>列表3<i class="icon-angle-up"></i></li>
    <li>列表4<i class="icon-angle-down"></i></li>
</ul>
````

## Button

### 默认按钮

````html
<input type="button" value="默认按钮" class="ui-button ui-button-normal" />
````
### 橙色按钮

````html
<input type="button" value="高亮显示按钮" class="ui-button ui-button-orange" />
````

### 不可用按钮

````html
<input type="button" value="不可用按钮" disabled="disabled" class="ui-button ui-button-orange ui-button-disabled" />
````

## Form

### Input

````html
<div class="ui-form-item">
    <input type="text" class="ui-input" placeholder="账户名" />
</div>
<div class="ui-form-item">
    <input type="text" disabled="disabled" class="ui-input ui-input-disabled" placeholder="账户名" />
</div>
<div class="ui-form-item ui-form-item-success">
    <input type="password" class="ui-input" placeholder="密码" />
    <span class="ui-form-icon icon-success-circle"></span>
</div>
<div class="ui-form-item ui-form-item-error">
    <input type="password" class="ui-input" placeholder="密码" />
    <span class="ui-form-icon icon-error-circle"></span>
    <div class="ui-form-explain">
        <p class="ui-poptip ui-poptip-red ui-poptip-arrow-1">错误提示</p>
    </div>
</div>
````

### Checkbox

````html
<div class="ui-form-item">
    <div class="ui-checkbox">
        <label>表单项复选框</label>
        <input type="checkbox" />
        <span class="icon-success"></span>
    </div>
</div>
<div class="ui-form-item">
    <div class="ui-checkbox ui-checkbox-checked">
        <label>表单项复选框——选中</label>
        <input type="checkbox" checked="checked" />
        <span class="icon-success"></span>
    </div>
</div>
<div class="ui-form-item">
    <div class="ui-checkbox ui-checkbox-disabled">
        <label>表单项复选框——不可用</label>
        <input type="checkbox" disabled="disabled" />
        <span class="icon-success"></span>
    </div>
</div>
<div class="ui-form-item ui-form-item-error">
    <div class="ui-checkbox">
        <label>表单项复选框</label>
        <input type="checkbox" />
        <span class="icon-success"></span>
    </div>
</div>
<div class="ui-form-item">
    <div class="ui-checkbox ui-checkbox-naked">
        <label>表单项复选框——无框模式</label>
        <input type="checkbox" />
        <span class="icon-success"></span>
    </div>
</div>
<div class="ui-form-item ui-form-item-error">
    <div class="ui-checkbox ui-checkbox-naked">
        <label>表单项复选框——无框模式</label>
        <input type="checkbox" />
        <span class="icon-success"></span>
    </div>
</div>
````
### Radio

````html
<div class="ui-form-item">
    <div class="ui-radio">
        <label>表单项单选框——未选中</label>
        <input type="radio" value="" name="" />
        <span class="ui-icon-radio"></span>
    </div>
</div>
<div class="ui-form-item">
    <div class="ui-radio ui-radio-checked">
        <label>表单项单选框——选中</label>
        <input type="radio" value="" name="" />
        <span class="ui-icon-radio"></span>
    </div>
</div>
<div class="ui-form-item">
    <div class="ui-radio ui-radio-disabled">
        <label>表单项单选框——为选中不可用</label>
        <input type="radio" value="" name="" />
        <span class="ui-icon-radio"></span>
    </div>
</div>
<div class="ui-form-item">
    <div class="ui-radio ui-radio-checked-disabled">
        <label>表单项单选框——选中不可用</label>
        <input type="radio" value="" name="" />
        <span class="ui-icon-radio"></span>
    </div>
</div>
<div class="ui-form-item ui-form-item-error">
    <div class="ui-radio">
        <label>表单项单选框——出错</label>
        <input type="radio" value="" name="" />
        <span class="ui-icon-radio"></span>
    </div>
</div>
````

### Select

````html
<div class="ui-form-item">
    <div class="ui-select">
        <label>表单项下拉列表</label>
        <select>
            <option value="下拉列表1">下拉列表1</option>
            <option value="下拉列表2">下拉列表2</option>
            <option value="下拉列表3">下拉列表3</option>
        </select>
        <span class="icon-angle-down"></span>
    </div>
</div>
<div class="ui-form-item">
    <div class="ui-select ui-select-disabled">
        <label>表单项下拉列表</label>
        <select>
            <option value="下拉列表1">下拉列表1</option>
            <option value="下拉列表2">下拉列表2</option>
            <option value="下拉列表3">下拉列表3</option>
        </select>
        <span class="icon-angle-down"></span>
    </div>
</div>
<div class="ui-form-item ui-form-item-error">
    <div class="ui-select">
        <label>表单项下拉列表</label>
        <select>
            <option value="下拉列表1">下拉列表1</option>
            <option value="下拉列表2">下拉列表2</option>
            <option value="下拉列表3">下拉列表3</option>
        </select>
        <span class="icon-angle-down"></span>
    </div>
</div>
````

## Loading
````html
<div id="loading">
    <img src="https://i.alipayobjects.com/e/201303/2ODFJWk4wn.png" width="71" height="23"/>
    <p class="smaller">系统正在处理，请稍候...</p>
    <img src="https://i.alipayobjects.com/e/201303/2OF0AqEztc.gif" width="37" height="43"/>
</div>
````