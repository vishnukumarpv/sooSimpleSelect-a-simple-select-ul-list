# SooSimpleSelect
Just simple styled selector list replace for native select input
 
  - Easy to style with css

 ```html
<form class="woocommerce-ordering" method="get">
	<select name="orderby" class="orderby" style="display: none;">
					<option value="popularity" selected="selected">Sort by popularity</option>
					<option value="rating">Sort by average rating</option>
					<option value="date">Sort by latest</option>
					<option value="price">Sort by price: low to high</option>
					<option value="price-desc">Sort by price: high to low</option>
			</select>
	.....
	</form>
```
 ```javascript
jQuery('form.woocommerce-ordering select.orderby').kadaSelector();
```