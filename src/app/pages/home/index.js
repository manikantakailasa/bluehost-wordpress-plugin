import { Page } from '../../components/page';
import { SectionContainer, SectionContent } from '../../components/section';
import { AccountCard } from './accountCard';
import { FreeAddonsSection } from './freeAddonsSection';
import { HelpCard } from './helpCard';
import './stylesheet.scss';
import { WelcomeSection } from './welcomeSection';

const Home = () => {
	return (
		<Page className="wppbh-home">
			<a href="https://google.com" data-ctb-id="test">Test CTB</a>
			<WelcomeSection />
			<FreeAddonsSection />
			<SectionContainer className="wppbh-account-help-section">
				<SectionContent >
					<div className="nfd-grid nfd-grid-cols-2 nfd-gap-6">
						<AccountCard />
						<HelpCard />
					</div>
				</SectionContent>
			</SectionContainer>
		</Page>
	);
};

export default Home;
