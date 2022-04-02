import { signOut } from "~/session.server";

export const action = async ({ request }) => {
  return signOut(request);
};
