import { json, useActionData } from "remix";
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
import { MainForm, links as mainFormStyles } from "~/components/MainForm";
import {
  FormControl,
  links as formControlStyles,
} from "~/components/FormControl";
import { Button, links as buttonStyles } from "~/components/Button";
import { Alert, links as alertStyles } from "~/components/Alert";
import { signIn } from "~/session.server";
import { validateEmail, validatePassword } from "~/validators";

export const links = () => [
  ...mainWrapperStyles(),
  ...mainHeaderStyles(),
  ...logoStyles(),
  ...mainNavigationStyles(),
  ...mainContentStyles(),
  ...mainFormStyles(),
  ...formControlStyles(),
  ...buttonStyles(),
  ...alertStyles(),
];

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  const errors = {
    email: validateEmail(email),
    password: validatePassword(password),
  };

  const values = { email, password };

  if (Object.values(errors).some(Boolean)) {
    return json({ errors, values });
  }

  return signIn(request, values, "/bookmarks");
}

export default function SignIn() {
  const actionData = useActionData();

  return (
    <MainWrapper>
      {actionData?.error && <Alert message={actionData?.error} />}
      <MainHeader>
        <Logo />
        <MainNavigation pathname="/sign_up" title="Sign Up" />
      </MainHeader>
      <MainContent>
        <MainForm legend="Login to your account">
          <FormControl
            name="email"
            label="Email"
            type="email"
            defaultValue={actionData?.values.email}
            error={actionData?.errors?.email}
          />
          <FormControl
            name="password"
            label="Password"
            type="password"
            defaultValue={actionData?.values.password}
            error={actionData?.errors?.password}
          />
          <div>
            <Button type="submit">Login</Button>
          </div>
        </MainForm>
      </MainContent>
    </MainWrapper>
  );
}
