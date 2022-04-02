import { createCookieSessionStorage, json, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";
import { requestSignIn, requestSignUp } from "~/services/auth.server";

invariant(process.env.SESSION_SECRET, "SESSION_SECRET must be set");

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    maxAge: 0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: process.env.NODE_ENV === "production",
  },
});

const USER_SESSION_KEY = "userToken";

export async function getSession(request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}

export async function getUserToken(request) {
  const session = await getSession(request);
  const userToken = session.get(USER_SESSION_KEY);
  return userToken;
}

export async function signIn(request, payload, redirectTo) {
  try {
    const { jwt: userToken } = await requestSignIn({ auth: payload });
    return createUserSession({
      request,
      userToken,
      remember: false,
      redirectTo,
    });
  } catch (err) {
    return json({ error: "Invalid credentials", values: payload });
  }
}

export async function signUp(request, payload, redirectTo) {
  try {
    const { password } = payload;
    const user = await requestSignUp(payload);
    const { jwt: userToken } = await requestSignIn({
      auth: { email: user.email, password },
    });
    return createUserSession({
      request,
      userToken,
      remember: false,
      redirectTo,
    });
  } catch (err) {
    return json({ error: err.response.data.message, values: payload });
  }
}

export async function signOut(request) {
  const session = await getSession(request);
  return redirect("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}

export async function requireUserToken(request) {
  const redirectTo = new URL(request.url).pathname;
  const userToken = await getUserToken(request);
  if (!userToken) {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/sign_in?${searchParams}`);
  }
  return userToken;
}

export async function createUserSession({
  request,
  userToken,
  remember,
  redirectTo,
}) {
  const session = await getSession(request);
  session.set(USER_SESSION_KEY, userToken);

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember
          ? 60 * 60 * 24 * 7 // 7 days
          : undefined,
      }),
    },
  });
}
