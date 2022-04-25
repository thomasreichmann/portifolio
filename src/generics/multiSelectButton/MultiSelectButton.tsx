import React, { useState } from 'react';
import './MultiSelectButton.scss';

interface MultiSelectButtonProps {
	values: string[];
	startIndex?: number;
	onValueChanged: (value: string) => void;
}

export default function MultiSelectButton(props: MultiSelectButtonProps) {
	const [activeValue, setActiveValue] = useState(props.values[props.startIndex ?? 0]);

	return (
		<div className="MultiSelectButton">
			{props.values.map(value => {
				return (
					<button
						key={value}
						className={activeValue == value ? 'active' : ''}
						onClick={() => {
							setActiveValue(value);
							props.onValueChanged(value);
						}}
					>
						{value}
					</button>
				);
			})}
		</div>
	);
}
