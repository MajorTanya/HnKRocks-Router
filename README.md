# HnK.Rocks-Router

A Cloudflare Worker script for the Houseki no Kuni community, using Cloudflare KV to redirect chapter numbers to
MangaDex links, among a few other redirecting services.

## Available Routes

Several Aliases are available for convenience.

_All routes are relative to the base URL `https://hnk.rocks`._

### Houseki no Kuni on MangaDex

| `/` |
|-----|

Redirects to the MangaDex title page
for [Houseki no Kuni](https://mangadex.org/title/cade38b7-64c4-4a29-8e3c-8c283291d6c6/houseki-no-kuni).

Example: [https://hnk.rocks](https://hnk.rocks)

---

### Chapter Links

| `/c/[number]` | `/chapter/[number]` | `/chapters/[number]` |
|---------------|---------------------|----------------------|

Redirects to the MangaDex reader for the chapter in question. If the chapter doesn't exist, redirects to the MangaDex
title page for Houseki no Kuni.

*Requires providing a chapter number.*

Parameters:

- `[number]` - integers or decimals (don't add the brackets)

Example: [https://hnk.rocks/chapter/1](https://hnk.rocks/chapter/1)

#### Page links for a specific chapter:

| `/p/[pageNumber]` | `/page/[pageNumber]` | `/pages/[pageNumber]` |
|-------------------|----------------------|-----------------------|

Parameters:

- `[pageNumber]` - integers (don't add the brackets)

Redirects to the MangaDex reader at the given page for the chapter in question. If the chapter doesn't exist,
redirects to the MangaDex title page for Houseki no Kuni. If the page doesn't exist, MangaDex will display the first
page by default.

*Requires providing a chapter number.*

Example: [https://hnk.rocks/chapter/1/page/2](https://hnk.rocks/chapter/1/page/2)

##### Page image embed (Discord, etc.) links for a specific page

| `/i` |
|------|

Provides a specially formatted HTML response which will be rendered as an image embed of the specified page number.

*Requires providing a chapter and a page number.*

Example: [https://hnk.rocks/chapter/1/page/2/i](https://hnk.rocks/chapter/1/page/i)

---

### Latest Chapter Link

| `/latest` | `/newest` | `/new` |
|-----------|-----------|--------|

Redirects to the latest released chapter as scanlated by the MangaDex user Tissal.

Note that this link will always redirect to the newest chapter, so it is not suitable as a permanent link to any one
chapter.

Example: [https://hnk.rocks/latest](https://hnk.rocks/latest)

#### Page links for latest chapter

| `/p/[pageNumber]` | `/page/[pageNumber]` | `/pages/[pageNumber]` |
|-------------------|----------------------|-----------------------|

Redirects to the MangaDex reader at the given page for the latest released chapter as scanlated by the MangaDex user
Tissal. If the page doesn't exist, MangaDex will display the first page by default.

Parameters:

- `[pageNumber]` - integers (don't add the brackets)

*Requires providing a page number.*

Example: [https://hnk.rocks/latest/page/1](https://hnk.rocks/latest/page/1)

##### Page image embed (Discord, etc.) links for a specific page

| `/i` |
|------|

Provides a specially formatted HTML response which will be rendered as an image embed of the specified page number.

*Requires providing a page number.*

Example: [https://hnk.rocks/latest/page/1/i](https://hnk.rocks/latest/page/1/i)

---

### Countdown to the next Chapter

| `/next` |
|---------|

Provides a countdown to the (estimated) next chapter release. The exact hours, minutes, and seconds aren't perfectly
accurate, but give a broad picture.

Supports Social Media link previews, so just sending the link to e.g. Discord will show the remaining time.

Example: [https://hnk.rocks/next](https://hnk.rocks/next)

---

### Time since the last Chapter release

| `/since` |
|----------|

Provides a counter of the time elapsed since the last chapter was released, as scanlated by the MangaDex user Tissal.

Example: [https://hnk.rocks/since](https://hnk.rocks/since)

---

### Houseki no Kuni (Minimalist Coloured version)

| `/minimalist` |
|---------------|

Redirects to the MangaDex title page for the
[Houseki no Kuni Minimalist Coloured version](https://mangadex.org/title/37bf7574-641e-4665-b992-f2ba8d4652b8/houseki-no-kuni)
fan project.

Example: [https://hnk.rocks/minimalist](https://hnk.rocks/minimalist)

---

### Houseki no Kuni (Coloured version)

| `/color` | `/colored` | `/colour` | `/coloured` |
|----------|------------|-----------|-------------|

Redirects to the MangaDex title page for the
[Houseki no Kuni Coloured version](https://mangadex.org/title/95264f28-3ccf-4dea-ad15-5323e4766b4c/houseki-no-kuni) fan
project.

Example: [https://hnk.rocks/colour](https://hnk.rocks/colour)

---

### The `uselessphos` Discord emote

| `/uselessphos` |
|----------------|

Shows the `uselessphos` Discord Emote.

Example: [https://hnk.rocks/uselessphos](https://hnk.rocks/uselessphos)

---

### Feedback form

| `/feedback` |
|-------------|

Redirects to a [Google Form to provide feedback and bug reports about HnK.rocks](https://forms.gle/QRGGriFizperPnZM6).

Example: [https://hnk.rocks/feedback](https://hnk.rocks/feedback)

---

### Overview over all available Redirects

| `/about` |
|----------|

Redirects to this [Redirection Overview](https://majortanya.github.io/HnKRocks-Router/)

Example: [https://hnk.rocks/about](https://hnk.rocks/about)

---

### Fandub project

| `/fandub` | `/fandub/playlist` |
|-----------|--------------------|

Redirects to the YouTube Playlist for the Houseki no Kuni Fandub Project.

Example: [https://hnk.rocks/fandub](https://hnk.rocks/fandub)

#### Episode links for the Fandub project

| `/fandub/e/[number]` | `/fandub/episode/[number]` | `/fandub/episodes/[number]` |
|----------------------|----------------------------|-----------------------------|

Redirects to the YouTube video for the Fandub episode in question. If the episode doesn't exist, redirects to the
YouTube Playlist for the Fandub Project.

Parameters:

- `[number]` - integers (don't add the brackets)

*Requires providing an episode number.*

Example: [https://hnk.rocks/fandub/episode/1](https://hnk.rocks/fandub/episode/1)

---

### Other works by Haruko Ichikawa

| `/other/[work]` | `/etc/[work]` |
|-----------------|---------------|

Redirects to other works by Haruko Ichikawa. Not all links redirect to MangaDex, as not all works are available there.

*Requires providing a work, see list below.*

Parameters:

- `[work]` - titles of works as described below.

_All these work URLs are relative to `https://hnk.rocks/other` or `https://hnk.rocks/etc`._

#### Works directly related to Houseki no Kuni

##### "Pseudomorph of Love" (Artbook)

| `/artbook` | `/pseudomorph` | `/pseudomorph-of-love` |
|------------|----------------|------------------------|

Redirects to the [Houseki no Kuni fandom wiki article](https://houseki-no-kuni.fandom.com/wiki/Pseudomorph_of_Love) with
the Artbook.

---

##### Lorebook (Japanese Volume 11 Extra)

| `/lorebook` | `/hnk-lorebook` | `/vol11-extra` |
|-------------|-----------------|----------------|

Redirects to the [Imgur post with the machine-translated, non-typeset](https://imgur.com/a/c7Aqh4a) version of the
Volume 11 Lorebook extra.

---

##### "Party at the End" (Japanese Volume 12 Extra)

| `/party` | `/party-at-the-end` | `/vol12-extra` |
|----------|---------------------|----------------|

Redirects to the GitHub repository of the
[translated Volume 12 Extra book titled "Party at the End"](https://github.com/coconutcastle/HNK_party_at_the_end/blob/master/readfile.md).

---

#### Works unrelated to Houseki no Kuni:

##### "25 Hour Vacation"

| `/25-ji-no-vacances` | `/25-hour-vacation` | `/vacances` |
|----------------------|---------------------|-------------|

Redirects to the MangaDex chapter reader for the story
["25 Hour Vacation"](https://mangadex.org/chapter/39331c1e-4118-450f-b61c-3112e57ae936) in the Haruko Ichikawa
Anthology.

---

##### Haruko Ichikawa Anthology

| `/anthology` | `/ichikawa-haruko-sakuhinshuu` | `/sakuhinshuu` |
|--------------|--------------------------------|----------------|

Redirects to the MangaDex title page for the
[Haruko Ichikawa Anthology](https://mangadex.org/title/e89c85d5-3131-4fd8-bf4f-3985ef63be83/ichikawa-haruko-sakuhinshuu).

---

##### "Moshimo, Tokyo"

| `/moshimo` | `/moshimo-tokyo` |
|------------|------------------|

Redirects to the MangaDex title page for
["Moshimo, Tokyo"](https://mangadex.org/title/fa91e632-8556-446e-8227-b6003acab958/moshimo-tokyo), which includes a
contribution by Haruko Ichikawa.

---

##### "Mushi to Uta"

| `/mushi` | `/mushi-to-uta` |
|----------|-----------------|

Redirects to the MangaDex chapter reader for the story
["Mushi to Uta"](https://mangadex.org/chapter/ee5d90b2-c9d6-4461-a972-24ef0e7ce9af) in the Haruko Ichikawa Anthology.

---

##### "Ouji no Himitsu"

| `/ouji` | `/ouji-no-himitsu` |
|---------|--------------------|

Redirects to the MangaDex title page for
["Ouji no Himitsu"](https://mangadex.org/title/07c1eeab-3185-4932-a975-132f2115d6bd/ouji-no-himitsu).

---

##### "Saegusa-Sensei"

| `/saegusa` | `/saegusa-sensei` |
|------------|-------------------|

Redirects to the MangaDex title page for
["Saegusa-Sensei"](https://mangadex.org/title/4de59a89-a6a8-4059-9ab3-501f7c260223/saegusa-sensei).

---

### Technical & Protected Routes

#### oEmbed Route

| `/oembed` |
|-----------|

[oEmbed](https://oembed.com/) API to facilitate enhanced embedding of `hnk.rocks` links. Only useful for the redirection
backend.

---

#### Updating `/latest`, `/since`, and `/next`

| `/submit` |
|-----------|

Protected Route. Used to add new chapter links and to update the `/latest`, `/since`, and `/next` endpoints.

hnk.rocks made by `@majortanya` on Discord.
