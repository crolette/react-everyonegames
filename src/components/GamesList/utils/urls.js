import { useOutletContext } from "react-router-dom";
import { lastThreeMonthsCalculation } from "./dateSearch";

const API_KEY = import.meta.env.VITE_API_KEY;
const [sort, filter] = useOutletContext();

const [today, lastThreeMonths] = lastThreeMonthsCalculation();

const urls = {
	trending: `https://api.rawg.io/api/games?key=${API_KEY}&dates=${lastThreeMonths},${today}&ordering=${sort}&${filter.type}=${filter.id}&page=${pageParam}`,
	bestof: `https://api.rawg.io/api/games?key=${API_KEY}&dates=${lastThreeMonths},${today}&ordering=${sort}&${filter.type}=${filter.id}&page=${pageParam}`,
};

export { urls };
