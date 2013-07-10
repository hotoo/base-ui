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
<div class="ui-flexbox">
  <div class="ui-field ui-flexbox-item">
    <div class="ui-field-input">
      <input type="text" maxlength="4" placeholder="短信验证码">
    </div>
  </div>
  <div class="ui-field ui-flexbox-item">
    <div class="ui-field-input">
      <input type="text" maxlength="4" placeholder="短信验证码">
    </div>
  </div>
  <div class="ui-field ui-flexbox-item">
    <div class="ui-field-input">
      <input type="text" maxlength="4" placeholder="短信验证码">
    </div>
  </div>
</div>
<div class="ui-flexbox">
  <div class="ui-flexbox-item">
    <button type="button" disabled="disabled" class="ui-button ui-button-disabled">重获验证码</button>
  </div>
  <div class="ui-flexbox-item">
    <button type="button" disabled="disabled" class="ui-button ui-button-disabled">重获验证码</button>
  </div>
</div>
````
