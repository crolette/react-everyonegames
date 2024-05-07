import moment from 'moment';

const nextMonthCalculation = () => {
	const today = moment().format('YYYY-MM-DD');
	const nextMonth = moment(today).add(1, 'month').format('YYYY-MM-DD');

	return nextMonth;
};

const todayCalculation = () => {
	const today = moment().format('YYYY-MM-DD');

	return today;
};

const lastThreeMonthsCalculation = () => {
	const today = moment().format('YYYY-MM-DD');
	const lastThreeMonths = moment(today)
		.subtract(3, 'month')
		.format('YYYY-MM-DD');

	return lastThreeMonths;
};

const lastMonthCalculation = () => {
	const today = moment().format('YYYY-MM-DD');
	const lastMonth = moment(today).subtract(1, 'month').format('YYYY-MM-DD');

	return lastMonth;
};

const lastYearCalculation = () => {
	const today = moment().format('YYYY-MM-DD');
	const lastYear = moment(today).subtract(12, 'month').format('YYYY-MM-DD');

	return lastYear;
};


const dateSearch = (type) => {
	console.log("dateSearch")
	const today = todayCalculation()
	let date
	if (type == 'best-of') {
		date = lastYearCalculation();
		return `${date},${today}`;
		
	} else if (type == 'next-releases') {
		date = nextMonthCalculation();
		return `${today},${date}`;
	} else if (type == 'new-releases') {
		date = lastMonthCalculation();
		return `${date},${today}`;
	} else {
		date = lastThreeMonthsCalculation();
		return  `${date},${today}`;
	}
}


export {
	nextMonthCalculation,
	lastThreeMonthsCalculation,
	lastMonthCalculation,
	lastYearCalculation,
	todayCalculation,
	dateSearch
};

// 2024-05-08,2024-05-30
