# Specificity

## class

#### Orderized class
	- based on CSS order
	```html
	<div class="outer">
	  <p>This is in the outer div.</p>
	  <div class="inner">
	    <p>This text is in the inner div.</p>
	  </div>
	</div>
	```
	```css
	div.outer p {
	  color: red;
	}
	div.outer p {
	  color: orange;
	}
	```
	- Must be color `red`

## Ref
- [MDN - CSS/Specificity](https://developer.mozilla.org/ko/docs/Web/CSS/Specificity)