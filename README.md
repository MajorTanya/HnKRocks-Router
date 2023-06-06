# HnK.Rocks-Router

A Cloudflare Worker script for the Houseki no Kuni community, using Cloudflare KV to redirect chapter numbers to MangaDex links, among a few other redirecting services.

## Available Routes

Several Aliases are available for convenience.

_All routes are relative to the base URL `https://hnk.rocks`._

- `/`
  - Redirects to the MangaDex title page for [Houseki no Kuni](https://mangadex.org/title/cade38b7-64c4-4a29-8e3c-8c283291d6c6/houseki-no-kuni).

- `/c/[number]` | `/chapter/[number]` | `/chapters/[number]`
  - Parameters: `[number]` - integers or decimals (don't add the brackets)
  - Redirect to the MangaDex reader for the chapter in question. If the chapter doesn't exists, redirects to the MangaDex title page for Houseki no Kuni.

- `/latest` | `/newest` | `/new`
  - Redirects to the latest released chapter as scanlated by the MangaDex user Tissal.

- `/next`
  - Provides a countdown to the (estimated) next chapter release. The exact hours, minutes, and seconds aren't perfectly accurate, but give a broad picture.
    
    Supports Social Media link previews, so just sending the link to e.g. Discord will show the remaining time.

- `/since`
  - Provides a counter of the time elapsed since the last chapter was released, as scanlated by the MangaDex user Tissal.

- `/submit`
  - Protected Route. Used to add new chapter links and to update the `/latest`, `/since`, and `/next` endpoints.

- `/minimalist`
  - Redirects to the MangaDex title page for the [Houseki no Kuni Minimalist Coloured version](https://mangadex.org/title/37bf7574-641e-4665-b992-f2ba8d4652b8/houseki-no-kuni).

- `/color` | `/colored` | `/colour` | `/coloured`
  - Redirects to the MangaDex title page for the [Houseki no Kuni Coloured version](https://mangadex.org/title/95264f28-3ccf-4dea-ad15-5323e4766b4c/houseki-no-kuni).

- `/uselessphos`
  - Shows the uselessphos Discord Emote.

- `/feedback`
  - Redirects to a [Google Form to provide feedback and bug reports about HnK.rocks](https://forms.gle/QRGGriFizperPnZM6).

- `/other/[work]` | `/etc/[work]`
  - Parameters: `[work]` - titles of works as described below.
  - Redirects to other works by Haruko Ichikawa. Not all links redirect to MangaDex, as not all works are available there.
  ### Available works:
  _All these work URLs are relative to `https://hnk.rocks/other` or `https//:hnk.rocks/etc`._

  *Houseki no Kuni-related works:*
    - `/artbook` | `/pseudomorph` | `/pseudomorph-of-love`
      - Redirects to the [Houseki no Kuni fandom wiki article](https://houseki-no-kuni.fandom.com/wiki/Pseudomorph_of_Love) with the artbook.
    - `/lorebook` | `/hnk-lorebook` | `/vol11-extra`
      - Redirects to the [Imgur post with the machine-translated, non-typeset](https://imgur.com/a/c7Aqh4a) version of the Volume 11 Lorebook extra.
    - `/party` | `/party-at-the-end` | `/vol12-extra`
      - Redirects to the GitHub repository of the [translated Volume 12 Extra book titled "Party at the End"](https://github.com/coconutcastle/HNK_party_at_the_end/blob/master/readfile.md).

   *Non-Houseki no Kuni-related works:*
    - `/25-ji-no-vacances` | `/25-hour-vacation` | `/vacances`
      - Redirects to the MangaDex chapter reader for the story ["25 Hour Vacation"](https://mangadex.org/chapter/39331c1e-4118-450f-b61c-3112e57ae936) in the Haruko Ichikawa Anthology
    - `/anthology` | `/ichikawa-haruko-sakuhinshuu` | `/sakuhinshuu`
      - Redirects to the MangaDex title page for the [Haruko Ichikawa Anthology](https://mangadex.org/title/e89c85d5-3131-4fd8-bf4f-3985ef63be83/ichikawa-haruko-sakuhinshuu).
    - `/moshimo` | `/moshimo-tokyo`
      - Redirects to the MangaDex title page for ["Moshimo, Tokyo"](https://mangadex.org/title/fa91e632-8556-446e-8227-b6003acab958/moshimo-tokyo)
    - `/mushi` | `/mushi-to-uta`
      - Redirects to the MangaDex chapter reader for the story ["Mushi to Uta"](https://mangadex.org/chapter/ee5d90b2-c9d6-4461-a972-24ef0e7ce9af) in the "Moshimo, Tokyo" collection
    - `/ouji` | `/ouji-no-himitsu`
      - Redirects to the MangaDex title page for ["Ouji no Himitsu"](https://mangadex.org/title/07c1eeab-3185-4932-a975-132f2115d6bd/ouji-no-himitsu).
    - `/saegusa` | `/saegusa-sensei`
      - Redirects to the MangaDex title page for ["Saegusa-Sensei"](https://mangadex.org/title/4de59a89-a6a8-4059-9ab3-501f7c260223/saegusa-sensei)
