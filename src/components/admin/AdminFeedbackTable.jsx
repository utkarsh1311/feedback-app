import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

// eslint-disable-next-line react/prop-types
const FeedbackTable = ({ feedbacks }) => {


	const columnDefs = [
		{ headerName: "Teacher Name", field: "teacherName", width: 150 },
		{ headerName: "Student", field: "student", width: 150 },
		{ headerName: "Created At", field: "createdAt", width: 150 },
		{ headerName: "Weekday", field: "weekday", width: 125 },
		{ headerName: "Month", field: "month", width: 125 },
		{ headerName: "Subject", field: "subject", width: 125 },
		{ headerName: "Duration", field: "duration", width: 125 },
		{ headerName: "Test Score", field: "testScore", width: 125 },
		{
			headerName: "Feedback",
			field: "feedback",
			wrapText: true,
			width: 500,
			autoHeight: true,
		},
	];

	const defaultColDef = {
		sortable: true,
		filter: true,
	};

	return (
		<div className="ag-theme-alpine h-screen w-full">
			<AgGridReact
				rowData={feedbacks}
				columnDefs={columnDefs}
				defaultColDef={defaultColDef}
				pagination={true}
				paginationPageSize={15}
			/>
		</div>
	);
};

export default FeedbackTable;
