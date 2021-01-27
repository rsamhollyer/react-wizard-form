import React from "react";

export default function WizardList(props) {
	const { wizards } = props;
	return (
		<ul>
			{wizards.length === 0 ? (
				<p>No Zards</p>
			) : (
				wizards.map((w) => (
					<li
						onClick={(e) => {
							props.chooseWizard(w);
						}}
						key={w.id}
					>
						{w.name} : {w.job} - {w.house}
					</li>
				))
			)}
		</ul>
	);
}
