import {
  createAsync,
  query,
  RouteDefinition,
  useParams,
} from "@solidjs/router";
import type { RootInterface } from "../../../../twt";
import { Suspense } from "solid-js";
import { getCookie, setCookie } from "vinxi/http";

import { getRequestEvent } from "solid-js/web";

const getTweet = query(async (id: string) => {
  "use server";

  const res: RootInterface = await fetch(
    `https://api.fxtwitter.com/status/${id}`
  ).then((res) => res.json());
  const tweet = {
    likes: res.tweet.likes,
    id,
  };

  return { likes: tweet.likes };
}, "tweet");
export const route = {
  preload(args) {
    getTweet(args.params.id);
  },
} satisfies RouteDefinition;
export default function Tweet() {
  const { id } = useParams<{ id: string }>();
  const tweet = createAsync(() => getTweet(id));

  return (
    <>
      <h1>Tweet</h1>
      <Suspense fallback={<p>Loading...</p>}>
        {JSON.stringify(tweet() ? tweet() : "")}
      </Suspense>
    </>
  );
}
