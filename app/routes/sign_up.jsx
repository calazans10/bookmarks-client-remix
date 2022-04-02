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
import { signUp } from "~/session.server";
import {
  validateName,
  validateEmail,
  validatePassword,
  validateComfirmPassword,
} from "~/validators";

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
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  const errors = {
    name: validateName(name),
    email: validateEmail(email),
    password: validatePassword(password),
    confirmPassword: validateComfirmPassword(password, confirmPassword),
  };

  const values = { name, email, password, confirmPassword };

  if (Object.values(errors).some(Boolean)) {
    return json({ errors, values });
  }

  return signUp(request, values, "/bookmarks");
}

export default function SignUp() {
  const actionData = useActionData();

  return (
    <MainWrapper>
      {actionData?.error && <Alert message={actionData?.error} />}
      <MainHeader>
        <Logo />
        <MainNavigation pathname="/sign_in" title="Sign In" />
      </MainHeader>
      <MainContent>
        <MainForm legend="Sign up for free">
          <FormControl
            name="name"
            label="Name"
            type="text"
            defaultValue={actionData?.values.name}
            error={actionData?.errors?.name}
          />
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
          <FormControl
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            defaultValue={actionData?.values.confirmPassword}
            error={actionData?.errors?.confirmPassword}
          />
          <div>
            <Button type="submit">Register</Button>
          </div>
        </MainForm>
      </MainContent>
    </MainWrapper>
  );
}
