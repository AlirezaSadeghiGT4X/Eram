import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Article from "./Article";
import { OBArticles } from "./OBArticles";

export default function Articles() {
	const articles = OBArticles;
	return (
		<div>
			<Header page={"مقالات"} />
			<div>
				<div
					dir="rtl"
					className="sm:grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-12 flex flex-col items-center gap-12 sm:p-12 px-8 py-6"
				>
					{articles.map((article) => (
						<Article
							id={article.id}
							picture={article.picture}
							title={article.title}
							time={article.time}
							description={article.description}
						/>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
}
