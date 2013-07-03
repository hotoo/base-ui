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

### Input-警告

````html
<div class="ui-field ui-field-warn">
    <div class="ui-field-input">
        <input type="text" placeholder="银行开户名" />
    </div>
    <div class="ui-field-message">warn message</div>
</div>
````

### Input-验证失败

````html
<div class="ui-field ui-field-error">
    <div class="ui-field-input">
        <input type="text" placeholder="身份证号" />
    </div>
    <div class="ui-field-default-message">default message</div>
    <div class="ui-field-message">error message</div>
</div>
````

### Input-pack

````html
<div class="ui-field ui-field-pack">
    <div class="ui-flexbox">
      <div class="ui-flexbox-item ui-field-item ui-field-item-reset">
        <div class="ui-field-input">
          <input type="text" placeholder="姓" />
        </div>
      </div>
      <div class="ui-flexbox-item ui-field-item ui-field-item-reset">
        <div class="ui-field-input">
          <input type="text" placeholder="名" />
        </div>
      </div>
    </div>
    <div class="ui-field-message">default message</div>
</div>
````

### Input-pack-出错

````html
<div class="ui-field ui-field-pack ui-field-error">
    <div class="ui-flexbox">
      <div class="ui-flexbox-item ui-field-item">
        <div class="ui-field-input">
          <input type="text" placeholder="姓" />
        </div>
      </div>
      <div class="ui-flexbox-item ui-field-item ui-field-item-reset">
        <div class="ui-field-input">
          <input type="text" placeholder="名" />
        </div>
      </div>
    </div>
    <div class="ui-field-message">default message</div>
</div>
<div class="ui-field ui-field-pack ui-field-error">
    <div class="ui-flexbox">
      <div class="ui-flexbox-item ui-field-item ui-field-item-reset">
        <div class="ui-field-input">
          <input type="text" placeholder="姓" />
        </div>
      </div>
      <div class="ui-flexbox-item ui-field-item">
        <div class="ui-field-input">
          <input type="text" placeholder="名" />
        </div>
      </div>
    </div>
    <div class="ui-field-message">default message</div>
</div>
````

### Checbox-选中

````html
<div class="ui-field">
  <label class="ui-checkbox">表单项复选框——选中<input type="checkbox" checked="checked" /><span class="ui-icon icon-check"></span></label>
</div>
````

### Checbox-未选中

````html
<div class="ui-field">
  <label class="ui-checkbox">表单项复选框——选中<input type="checkbox" /><span class="ui-icon icon-check"></span></label>
</div>
````

### Checbox-不可用

````html
<div class="ui-field">
  <label class="ui-checkbox ui-checkbox-disabled">表单项复选框——不可用<input type="checkbox" disabled="disabled" /><span class="ui-icon icon-check"></span></label>
</div>
````

### Checbox-警告

````html
<div class="ui-field ui-field-warn">
  <label class="ui-checkbox"><input type="checkbox"/>表单项复选框——出错<span class="ui-icon icon-check"></span></label>
  <div class="ui-field-message">warn message</div>
</div>
````

### Checbox-出错

````html
<div class="ui-field ui-field-warn">
  <label class="ui-checkbox"><input type="checkbox"/>表单项复选框——出错<span class="ui-icon icon-check"></span></label>
  <div class="ui-field-message">warn message</div>
</div>
````

### Checbox-无框

````html
<div class="ui-field">
  <label class="ui-checkbox ui-checkbox-naked"><input type="checkbox"/>表单项复选框——无框<span class="ui-icon icon-check"></span></label>
</div>
````

### Checkbox-mini

````html
<div class="ui-field">
  <label class="ui-checkbox ui-checkbox-mini"><input type="checkbox"><span class="ui-icon icon-check"></span>当日累积消费≤200元可免输密码</label>
</div>
````

### Checkbox-simple

````html
<div class="ui-field">
  <label class="ui-checkbox ui-checkbox-simple"><input type="checkbox"><span class="ui-icon icon-check"></span>同意《信用支付服务合同》</label>
</div>
````

### Checkbox-simple

````html
<div class="ui-field">
  <span class="ui-checkbox ui-checkbox-simple fn-left"><input id="agree" type="checkbox"><span class="ui-icon icon-check"></span></span><label for="agree">同意《信用支付服务合同》<a href="http://www.baidu.com">链接</a></label>
</div>
````

### Select

````html
<div class="ui-field">
    <div class="ui-select">
        <span class="ui-select-text">下拉列表1 <em>优惠</em></span>
        <select>
            <option value="">很长很长很长很长很长很长很长很长很长很长很长很长很长下拉列表1</option>
            <option value="">下拉列表2</option>
        </select>
    </div>
</div>
````

### Select-不可用

````html
<div class="ui-field">
    <div class="ui-select ui-select-disabled">
        <span class="ui-select-text">下拉列表1 <em>优惠</em></span>
        <select disabled>
            <option value="">下拉列表1</option>
            <option value="">下拉列表2</option>
        </select>
    </div>
</div>
````

### Select-出错

````html
<div class="ui-field ui-field-error">
    <div class="ui-select">
        <span class="ui-select-text">下拉列表1 <em>优惠</em></span>
        <select>
            <option value="">下拉列表1</option>
            <option value="">下拉列表2</option>
        </select>
    </div>
    <div class="ui-field-message">error message</div>
</div>
````
