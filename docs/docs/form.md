# Form 

---
### Input

````html
<div class="ui-field">
    <div class="ui-field-input">
        <input type="text" placeholder="电话" value="" />
    </div>
    <div class="ui-field-message">提示信息</div>
</div>
````

### Input-不可用

````html
<div class="ui-field ui-field-disabled">
    <div class="ui-field-input">
        <input type="text" placeholder="电话" value="" disabled="disabled" />
    </div>
</div>
````

### Input-验证成功

````html
<div class="ui-field ui-field-success">
    <div class="ui-field-input">
        <input type="text" placeholder="银行开户名" />
    </div>
</div>

````

### Input-验证失败

````html
<div class="ui-field ui-field-error">
    <div class="ui-field-input">
        <input type="text" placeholder="身份证号">
    </div>
    <div class="ui-field-message">default message</div>
    <div class="ui-field-error-message">error message</div>
</div>
````

### Input-loading

````html
<div class="ui-field ui-field-loading">
    <div class="ui-field-input">
        <input type="text" placeholder="身份证号">
    </div>
</div>
````

### Checbox-选中

````html
<div class="ui-checkbox ui-checkbox-checked">
    <label><input type="checkbox" checked/>表单项复选框——未选中<span class="ui-icon icon-check"></span></label>
</div>
````

### Checbox-未选中

````html
<div class="ui-checkbox">
    <label><input type="checkbox"/>表单项复选框——选中<span class="ui-icon icon-check"></span></label>
</div>
````

### Checbox-不可用

````html
<div class="ui-checkbox ui-checkbox-disabled">
    <label><input type="checkbox" disabled/>表单项复选框——不可用<span class="ui-icon icon-check"></span></label>
</div>
````

### Checbox-无框

````html
<div class="ui-checkbox ui-checkbox-naked">
    <label><input type="checkbox"/>表单项复选框——无框模式<span class="ui-icon icon-check"></span></label>
</div>
````

### Checkbox-mini

````html
<div class="ui-checkbox ui-checkbox-mini">
    <label><input type="checkbox">当日累积消费≤200元可免输密码<span class="ui-icon icon-check"></span></label>
</div>
````

### Checkbox-simple

````html
<div class="ui-checkbox ui-checkbox-simple">
    <label><input type="checkbox"><span class="ui-icon icon-check"></span></label><span class="ui-checkbox-label">同意《信用支付服务合同》</span>
</div>
````

### Select

````html
<div class="ui-field ui-select ui-select">
    <div class="ui-select-input">
        <span class="ui-select-text">下拉列表1</span>
        <select>
            <option value="boc">下拉列表1</option>
            <option value="cmb">下拉列表2</option>
        </select>
        <span class="ui-icon icon-arrow"></span>
    </div>
</div>
````

### Select-不可用

````html
<div class="ui-field ui-select ui-select-disabled">
    <div class="ui-select-input">
        <span class="ui-select-text">下拉列表1</span>
        <select>
            <option value="boc">下拉列表1</option>
            <option value="cmb">下拉列表2</option>
        </select>
        <span class="ui-icon icon-arrow"></span>
    </div>
</div>
````

### Select-出错

````html
<div class="ui-field ui-select ui-field-error">
    <div class="ui-select-input">
        <span class="ui-select-text">下拉列表1</span>
        <select>
            <option value="boc">下拉列表1</option>
            <option value="cmb">下拉列表2</option>
        </select>
        <span class="ui-icon icon-arrow"></span>
    </div>
    <div class="ui-field-error-message">error message</div>
</div>
````
