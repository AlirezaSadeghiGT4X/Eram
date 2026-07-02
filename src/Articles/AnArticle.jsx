import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Article1 from "./Article1";
import Article2 from "./Article2";
import Article3 from "./Article3";
import Article4 from "./Article4";

export default function AnArticle() {
	let id = localStorage.getItem("articleID");
	return (
		<div>
			<Header page={"مقالات"} />
			<div className="flex items-center justify-center">
				{id == 1 ? (
					<Article1 />
				) : id == 2 ? (
					<Article2 />
				) : id == 3 ? (
					<Article3 />
				) : id == 4 ? (
					<Article4 />
				) : (
					<></>
				)}
			</div>
			<Footer />
		</div>
	);
}
