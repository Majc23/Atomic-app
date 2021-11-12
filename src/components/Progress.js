import React from 'react';

export const Progress = ({done}) => {
	const [style, setStyle] = React.useState({
        opacity: 1,
        width: `${done}%`
    });
	
	
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
			</div>
		</div>
	)
}