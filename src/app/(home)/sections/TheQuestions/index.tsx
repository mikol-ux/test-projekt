import ClientFAQ from '../../../../components/Section-components/theQuestion';

const FAQSection = () => {
	return (
		<section className="w-full flex flex-col py-20 px-6 tpk-contained text-black dark:text-white">
			<div>
				<p className="tpk-text-md px-5 py-2 text-white text-left ml-0">
					FREQUENTLY ASKED QUESTIONS
				</p>
				<h2 className="tpk-text-2xl font-normal mt-6 mb-10 text-left max-w-xl">
					FIND ANSWERS TO YOUR QUESTIONS HERE
				</h2>
			</div>
			<ClientFAQ />
		</section>
	);
};

export default FAQSection;
