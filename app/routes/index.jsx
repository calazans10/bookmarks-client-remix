import { Link } from "remix";
import {
  MainWrapper,
  links as mainWrapperStyles,
} from "~/components/MainWrapper";
import { MainHeader, links as mainHeaderStyles } from "~/components/MainHeader";
import { Logo, links as logoStyles } from "~/components/Logo";
import {
  MainNavigation,
  links as mainNavigationStyles,
} from "~/components/MainNavigation";
import {
  MainContent,
  links as mainContentStyles,
} from "~/components/MainContent";
import {
  PageSection,
  links as pageSectionStyles,
} from "~/components/PageSection";

export const links = () => [
  ...mainWrapperStyles(),
  ...mainHeaderStyles(),
  ...logoStyles(),
  ...mainNavigationStyles(),
  ...mainContentStyles(),
  ...pageSectionStyles(),
];

export default function Index() {
  return (
    <MainWrapper>
      <MainHeader>
        <Logo />
        <MainNavigation pathname="/sign_in" title="Sign In" />
      </MainHeader>
      <MainContent>
        <PageSection title="A smarter way to save your web pages">
          <p>
            Bookmarks makes it simple to save web pages you find useful,
            interesting, or inspiring in a beautiful, easy-to-use web app.
          </p>
          <p>
            Don&apos;t have an account? <Link to="/sign_up">Sign up here</Link>.
          </p>
        </PageSection>
      </MainContent>
    </MainWrapper>
  );
}
