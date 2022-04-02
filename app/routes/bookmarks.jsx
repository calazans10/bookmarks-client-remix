import { Outlet } from "remix";
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
import { requireUserToken } from "~/session.server";

export const links = () => {
  return [
    ...mainWrapperStyles(),
    ...mainHeaderStyles(),
    ...logoStyles(),
    ...mainNavigationStyles(),
    ...mainContentStyles(),
  ];
};

export const loader = async ({ request }) => {
  return requireUserToken(request);
};

export default function Bookmarks() {
  return (
    <MainWrapper>
      <MainHeader>
        <Logo to="/bookmarks" />
        <MainNavigation />
      </MainHeader>
      <MainContent>
        <Outlet />
      </MainContent>
    </MainWrapper>
  );
}
