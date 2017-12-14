import React from "react";

export const SelectList = props =>
	<div class="form-group">
		<div className="form-group col-md-6">
		  <label for="sel1">Number of Articles:</label>
		  <select class="form-control" id="sel1" {...props}>
		    <option value="1">1</option>
		    <option selected value="5">5</option>
		    <option value="10">10</option>
		  </select>
		</div>
	</div>;
