// Copyright 2023 the Deno authors. All rights reserved. MIT license.
import type { Handlers } from "$fresh/server.ts";
import { stripe } from "@/utils/payments.ts";
import type { AccountState } from "./_middleware.ts";
import { redirect } from "@/utils/http.ts";

// deno-lint-ignore no-explicit-any
export const handler: Handlers<any, AccountState> = {
  async GET(req, ctx) {
    // todo here create new session in the paymnet process, return url
    // const { url } = await stripe.billingPortal.sessions.create({
    //   customer: ctx.state.user.stripeCustomerId,
    //   return_url: new URL(req.url).origin + "/account",
    // });

    // return redirect(url);
  },
};
