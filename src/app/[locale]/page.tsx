import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
	const t = useTranslations("HomePage");
	return (
		<div className="h-screen flex justify-center items-center">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<h1>{t("title")}</h1>
				<Link href="#">{t("about")}</Link>
			</main>
		</div>
	);
}
