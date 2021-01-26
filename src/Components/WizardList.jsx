import React from "react";

export default function WizardList(props) {
	const { wizards } = props;
	return (
		<>
			{wizards.length === 0 ? (
				<p>No Zards</p>
			) : (
				wizards.map((w) => (
					<li key={w.name}>
						{w.name} : {w.job} - {w.house}
					</li>
				))
			)}
		</>
	);
}
