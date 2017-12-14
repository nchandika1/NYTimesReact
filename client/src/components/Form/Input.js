import React from "react";

export const Input = props =>
	<div className="form-group">
  		<div className="form-group col-md-6">
    		<input className="form-control" {...props} />
    	</div>
  	</div>;
