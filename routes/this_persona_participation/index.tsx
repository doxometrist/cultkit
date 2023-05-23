// Copyright 2023 the Deno authors. All rights reserved. MIT license.
import type { Handlers, PageProps } from "$fresh/server.ts";
import Head from "@/components/Head.tsx";
import Layout from "@/components/Layout.tsx";
import { BUTTON_STYLES, NOTICE_STYLES } from "@/utils/constants.ts";
import { Persona } from "../../utils/db/db_persona.ts";
import { State } from "../_middleware.ts";

interface ThisPersonaPageProps extends State {
  persona: Persona;
}

export const handler: Handlers<ThisPersonaPageProps, ThisPersonaPageProps> = {
  GET(_request, ctx) {
    return ctx.render(ctx.state);
  },
};

export default function ThisPersonaPage(
  props: PageProps<ThisPersonaPageProps>,
) {
  return (
    <>
      <Head title="any" href={props.url.href} />
      <Layout session={props.data.sessionId}>
        <div class="max-w-lg m-auto w-full flex-1 p-4 flex flex-col justify-center">
          <h1 class="text-3xl mb-4">
            <strong>any</strong>
          </h1>
          <div>
            <h3>here my cults list</h3>
          </div>
        </div>
      </Layout>
    </>
  );
}
