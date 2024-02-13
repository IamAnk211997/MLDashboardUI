import React from "react";
import { useSelector } from "react-redux";
import * as Selector from "@selector";
import TopRibbon from "./TopRibbon";
import BottomRibbon from "./BottomRibbon";
import { Spinner } from "flowbite-react";

const Landing = ({ stateData }) => {
	const widgy = useSelector(Selector.widgetSelect.widgetData);
	const charty = useSelector(Selector.graphSelect.graphData);
	const spinny = useSelector(Selector.commonSelect.spinnerSelect);
	const tableData = useSelector(Selector.dataSelect.dataSelect);
	console.log("spinner state", tableData);
	return (
		<div>
			{spinny ? (
				<div className='w-full h-[75vh] flex justify-center items-center'>
					<Spinner
						size={"xl"}
						color='purple'
						aria-label='Purple spinner example'
					/>
				</div>
			) : (
				<>
					<div className='xs:hidden sm:hidden md:hidden flex flex-col justify-evenly gap-2'>
						<TopRibbon data={widgy} />
						<BottomRibbon
							data={charty}
							tableData={tableData}
							stateData={stateData}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default Landing;
