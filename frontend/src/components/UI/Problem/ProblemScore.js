import React from 'react';
import { Grid, Button, FormControl, NativeSelect } from '@material-ui/core';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import ProblemSubmitTable from './ProblemSubmitTable';

const createData = (
	number,
	id,
	result,
	memory,
	time,
	language,
	codeLen,
	submitTime
) => {
	return {
		number,
		id,
		result,
		memory,
		time,
		language,
		codeLen,
		submitTime,
	};
};

const rows1 = [
	createData(
		'4',
		'gusrb',
		'Accepted',
		'1KB',
		'1ms',
		'C++',
		'1236B',
		'9달 전'
	),
	createData(
		'3',
		'gusrb',
		'Accepted',
		'1KB',
		'1ms',
		'Python3',
		'16B',
		'3달 전'
	),
	createData(
		'1',
		'gusrb',
		'Accepted',
		'2KB',
		'2ms',
		'C++',
		'1236B',
		'9달 전'
	),
	createData(
		'2',
		'gusrb',
		'Compile error',
		'1KB',
		'1ms',
		'C++',
		'136B',
		'5달 전'
	),
];

const rows2 = [
	createData(
		'3',
		'gusrb',
		'Accepted',
		'1KB',
		'1ms',
		'Python3',
		'16B',
		'3달 전'
	),
];
const ProblemScore = () => {
	return (
		<Grid className="problem-score" direction="column">
			<Grid className="problem-score-info">
				<FormatListNumberedIcon style={{ fontSize: '2rem' }} />
				<b>채점 현황</b>
			</Grid>
			<ProblemSubmitTable rows={rows2} isResult="true" />
			<Grid className="problem-score-info">
				<FormatListNumberedIcon style={{ fontSize: '2rem' }} />
				<b>나의 제출 현황</b>
			</Grid>
			<Grid className="problem-score-select">
				<FormControl>
					<NativeSelect defaultValue="모든 결과">
						<option value="모든 결과">모든 결과</option>
						<option value="통과">통과</option>
						<option value="컴파일 에러">컴파일 에러</option>
						<option value="오답">오답</option>
					</NativeSelect>
				</FormControl>
				<Button size="small">↓ 메모리로 정렬</Button>
				<Button size="small">↓ 시간으로 정렬</Button>
			</Grid>
			<ProblemSubmitTable rows={rows1} isResult="true" />
		</Grid>
	);
};

export default ProblemScore;
