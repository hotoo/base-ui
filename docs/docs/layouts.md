# Layouts

---
<style type="text/css">
.demo {
  padding:1rem;
  color:#fff;
  background-color:#6C97C2;
}
</style>

### Grids

````html
<div class="ui-grid">
  <div class="ui-grid-item one-third"><div class="demo">A</div></div>
  <div class="ui-grid-item tow-thirds"><div class="demo">B</div></div>
</div>
<div class="ui-grid">
  <div class="ui-grid-item one-quarter"><div class="demo">A</div></div>
  <div class="ui-grid-item third-quarters"><div class="demo">B</div></div>
</div>
````

### Flexboxs

````html
<div class="ui-flexbox">
  <div class="ui-flexbox-item"><div class="demo">A</div></div>
  <div class="ui-flexbox-item"><div class="demo">B</div></div>
  <div class="ui-flexbox-item"><div class="demo">C</div></div>
  <div class="ui-flexbox-item"><div class="demo">D</div></div>
</div>
<div class="ui-flexbox ui-captcha">
  <div class="ui-field ui-field-error ui-flexbox-item">
    <div class="ui-field-input">
      <input type="text" maxlength="4" placeholder="短信验证码">
    </div>
    <div class="ui-field-default-message">默认文案</div>
    <div class="ui-field-error-message">错误文案</div>
  </div>
  <div class="ui-captcha-image">
    <img alt="Alipay" src="https://i.alipayobjects.com/e/201303/2U8xHkMbfp.png" width="48" height="24">
    看不清<br>换一张
  </div>
</div>
<div class="ui-flexbox ui-captcha">
  <div class="ui-field ui-field-error ui-flexbox-item">
    <div class="ui-field-input">
      <input type="text" maxlength="4" placeholder="短信验证码">
    </div>
    <div class="ui-field-default-message">默认文案</div>
    <div class="ui-field-error-message">错误文案</div>
  </div>
  <div class="ui-captcha-button">
    <div class="ui-button ui-button-disabled">
      <button type="button" disabled>重获验证码</button>
    </div>
  </div>
</div>

<div class="ui-flexbox">
  <div class="ui-flexbox-item">
    <div class="ui-button ui-button-disabled">
      <button type="button" disabled>重获验证码</button>
    </div>
  </div>
  <div class="ui-flexbox-item">
    <div class="ui-button ui-button-disabled">
      <button type="button" disabled>重获验证码</button>
    </div>
  </div>
</div>
````
