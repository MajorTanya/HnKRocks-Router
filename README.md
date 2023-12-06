# HnK.Rocks-Router

A Cloudflare Worker script for the Houseki no Kuni community, using Cloudflare KV to redirect chapter numbers to
MangaDex links, among a few other redirecting services.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Available Routes](#available-routes)
    - [Houseki no Kuni on MangaDex](#houseki-no-kuni-on-mangadex)
    - [Chapter Links](#chapter-links)
        - [Page links for a specific chapter:](#page-links-for-a-specific-chapter)
            - [Page image embed (Discord, etc.) links for a specific page](#page-image-embed-discord-etc-links-for-a-specific-page)
    - [Latest Chapter Link](#latest-chapter-link)
        - [Page links for latest chapter](#page-links-for-latest-chapter)
            - [Page image embed (Discord, etc.) links for a specific page](#page-image-embed-discord-etc-links-for-a-specific-page-1)
    - [Countdown to the next Chapter](#countdown-to-the-next-chapter)
    - [Time since the last Chapter release](#time-since-the-last-chapter-release)
    - [Houseki no Kuni (Minimalist Coloured version)](#houseki-no-kuni-minimalist-coloured-version)
    - [Houseki no Kuni (Coloured version)](#houseki-no-kuni-coloured-version)
    - [The `uselessphos` Discord emote](#the-uselessphos-discord-emote)
    - [Feedback form](#feedback-form)
    - [Overview over all available Redirects](#overview-over-all-available-redirects)
    - [Fandub project](#fandub-project)
        - [Episode links for the Fandub project](#episode-links-for-the-fandub-project)
    - [Other works by Haruko Ichikawa](#other-works-by-haruko-ichikawa)
        - [Works directly related to Houseki no Kuni](#works-directly-related-to-houseki-no-kuni)
            - ["Pseudomorph of Love" (Artbook)](#pseudomorph-of-love-artbook)
            - [Lorebook (Japanese Volume 11 Extra)](#lorebook-japanese-volume-11-extra)
            - ["Party at the End" (Japanese Volume 12 Extra)](#party-at-the-end-japanese-volume-12-extra)
        - [Works unrelated to Houseki no Kuni:](#works-unrelated-to-houseki-no-kuni)
            - ["25 Hour Vacation"](#25-hour-vacation)
            - [Haruko Ichikawa Anthology](#haruko-ichikawa-anthology)
            - ["Moshimo, Tokyo"](#moshimo-tokyo)
            - ["Mushi to Uta"](#mushi-to-uta)
            - ["Ouji no Himitsu"](#ouji-no-himitsu)
            - ["Saegusa-Sensei"](#saegusa-sensei)
    - [Technical & Protected Routes](#technical--protected-routes)
        - [oEmbed Route](#oembed-route)
        - [Updating `/latest`, `/since`, and `/next`](#updating-latest-since-and-next)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Available Routes

Several Aliases are available for convenience.

_All routes are relative to the base URL `https://hnk.rocks`._

### Houseki no Kuni on MangaDex

<table>
    <tr>
        <td><code>/</code></td>
    </tr>
</table>

Redirects to the MangaDex title page
for [Houseki no Kuni](https://mangadex.org/title/cade38b7-64c4-4a29-8e3c-8c283291d6c6/houseki-no-kuni).

Example: [https://hnk.rocks](https://hnk.rocks)

---

### Chapter Links

<table>
    <tr>
        <td><code>/c/[number]</code></td>
        <td><code>/chapter/[number]</code></td>
        <td><code>/chapters/[number]</code></td>
    </tr>
</table>

Redirects to the MangaDex reader for the chapter in question. If the chapter doesn't exist, redirects to the MangaDex
title page for Houseki no Kuni.

*Requires providing a chapter number.*

Parameters:

- `[number]` - integers or decimals (don't add the brackets)

Example: [https://hnk.rocks/chapter/1](https://hnk.rocks/chapter/1)

#### Page links for a specific chapter:

<table>
    <tr>
        <td><code>/p/[pageNumber]</code></td>
        <td><code>/page/[pageNumber]</code></td>
        <td><code>/pages/[pageNumber]</code></td>
    </tr>
</table>

Parameters:

- `[pageNumber]` - integers (don't add the brackets)

Redirects to the MangaDex reader at the given page for the chapter in question. If the chapter doesn't exist,
redirects to the MangaDex title page for Houseki no Kuni. If the page doesn't exist, MangaDex will display the first
page by default.

*Requires providing a chapter number.*

Example: [https://hnk.rocks/chapter/1/page/2](https://hnk.rocks/chapter/1/page/2)

##### Page image embed (Discord, etc.) links for a specific page

<table>
    <tr>
        <td><code>/i</code></td>
    </tr>
</table>

Provides a specially formatted HTML response which will be rendered as an image embed of the specified page number.

*Requires providing a chapter and a page number.*

Example: [https://hnk.rocks/chapter/1/page/2/i](https://hnk.rocks/chapter/1/page/i)

---

### Latest Chapter Link

<table>
    <tr>
        <td><code>/latest</code></td>
        <td><code>/newest</code></td>
        <td><code>/new</code></td>
    </tr>
</table>

Redirects to the latest released chapter as scanlated by the MangaDex user Tissal.

Note that this link will always redirect to the newest chapter, so it is not suitable as a permanent link to any one
chapter.

Example: [https://hnk.rocks/latest](https://hnk.rocks/latest)

#### Page links for latest chapter

<table>
    <tr>
        <td><code>/p/[pageNumber]</code></td>
        <td><code>/page/[pageNumber]</code></td>
        <td><code>/pages/[pageNumber]</code></td>
    </tr>
</table>

Redirects to the MangaDex reader at the given page for the latest released chapter as scanlated by the MangaDex user
Tissal. If the page doesn't exist, MangaDex will display the first page by default.

Parameters:

- `[pageNumber]` - integers (don't add the brackets)

*Requires providing a page number.*

Example: [https://hnk.rocks/latest/page/1](https://hnk.rocks/latest/page/1)

##### Page image embed (Discord, etc.) links for a specific page

<table>
    <tr>
        <td><code>/i</code></td>
    </tr>
</table>

Provides a specially formatted HTML response which will be rendered as an image embed of the specified page number.

*Requires providing a page number.*

Example: [https://hnk.rocks/latest/page/1/i](https://hnk.rocks/latest/page/1/i)

---

### Countdown to the next Chapter

<table>
    <tr>
        <td><code>/next</code></td>
    </tr>
</table>

Provides a countdown to the (estimated) next chapter release. The exact hours, minutes, and seconds aren't perfectly
accurate, but give a broad picture.

Supports Social Media link previews, so just sending the link to e.g. Discord will show the remaining time.

Example: [https://hnk.rocks/next](https://hnk.rocks/next)

---

### Time since the last Chapter release

<table>
    <tr>
        <td><code>/since</code></td>
    </tr>
</table>

Provides a counter of the time elapsed since the last chapter was released, as scanlated by the MangaDex user Tissal.

Example: [https://hnk.rocks/since](https://hnk.rocks/since)

---

### Houseki no Kuni (Minimalist Coloured version)

<table>
    <tr>
        <td><code>/minimalist</code></td>
    </tr>
</table>

Redirects to the MangaDex title page for the
[Houseki no Kuni Minimalist Coloured version](https://mangadex.org/title/37bf7574-641e-4665-b992-f2ba8d4652b8/houseki-no-kuni)
fan project.

Example: [https://hnk.rocks/minimalist](https://hnk.rocks/minimalist)

---

### Houseki no Kuni (Coloured version)

<table>
    <tr>
        <td><code>/color</code></td>
        <td><code>/colored</code></td>
        <td><code>/colour</code></td>
        <td><code>/coloured</code></td>
    </tr>
</table>

Redirects to the MangaDex title page for the
[Houseki no Kuni Coloured version](https://mangadex.org/title/95264f28-3ccf-4dea-ad15-5323e4766b4c/houseki-no-kuni) fan
project.

Example: [https://hnk.rocks/colour](https://hnk.rocks/colour)

---

### The `uselessphos` Discord emote

<table>
    <tr>
        <td><code>/uselessphos</code></td>
    </tr>
</table>

Shows the `uselessphos` Discord Emote.

Example: [https://hnk.rocks/uselessphos](https://hnk.rocks/uselessphos)

---

### Feedback form

<table>
    <tr>
        <td><code>/feedback</code></td>
    </tr>
</table>

Redirects to a [Google Form to provide feedback and bug reports about HnK.rocks](https://forms.gle/QRGGriFizperPnZM6).

Example: [https://hnk.rocks/feedback](https://hnk.rocks/feedback)

---

### Overview over all available Redirects

<table>
    <tr>
        <td><code>/about</code></td>
    </tr>
</table>

Redirects to this [Redirection Overview](https://majortanya.github.io/HnKRocks-Router/).

Example: [https://hnk.rocks/about](https://hnk.rocks/about)

---

### Fandub project

<table>
    <tr>
        <td><code>/fandub</code></td>
        <td><code>/fandub/playlist</code></td>
    </tr>
</table>

Redirects to the YouTube Playlist for the Houseki no Kuni Fandub Project.

Example: [https://hnk.rocks/fandub](https://hnk.rocks/fandub)

#### Episode links for the Fandub project

<table>
    <tr>
        <td><code>/fandub/e/[number]</code></td>
        <td><code>/fandub/episode/[number]</code></td>
        <td><code>/fandub/episodes/[number]</code></td>
    </tr>
</table>

Redirects to the YouTube video for the Fandub episode in question. If the episode doesn't exist, redirects to the
YouTube Playlist for the Fandub Project.

Parameters:

- `[number]` - integers (don't add the brackets)

*Requires providing an episode number.*

Example: [https://hnk.rocks/fandub/episode/1](https://hnk.rocks/fandub/episode/1)

---

### Other works by Haruko Ichikawa

<table>
    <tr>
        <td><code>/other/[work]</code></td>
        <td><code>/etc/[work]</code></td>
    </tr>
</table>

Redirects to other works by Haruko Ichikawa. Not all links redirect to MangaDex, as not all works are available there.

*Requires providing a work, see list below.*

Parameters:

- `[work]` - titles of works as described below.

_All these work URLs are relative to `https://hnk.rocks/other` or `https://hnk.rocks/etc`._

#### Works directly related to Houseki no Kuni

##### "Pseudomorph of Love" (Artbook)

<table>
    <tr>
        <td><code>/artbook</code></td>
        <td><code>/pseudomorph</code></td>
        <td><code>/pseudomorph-of-love</code></td>
    </tr>
</table>

Redirects to the [Houseki no Kuni fandom wiki article](https://houseki-no-kuni.fandom.com/wiki/Pseudomorph_of_Love) with
the Artbook.

---

##### Lorebook (Japanese Volume 11 Extra)

<table>
    <tr>
        <td><code>/lorebook</code></td>
        <td><code>/hnk-lorebook</code></td>
        <td><code>/vol11-extra</code></td>
    </tr>
</table>

Redirects to the [Imgur post with the machine-translated, non-typeset](https://imgur.com/a/c7Aqh4a) version of the
Volume 11 Lorebook extra.

---

##### "Party at the End" (Japanese Volume 12 Extra)

<table>
    <tr>
        <td><code>/party</code></td>
        <td><code>/party-at-the-end</code></td>
        <td><code>/vol12-extra</code></td>
    </tr>
</table>

Redirects to the GitHub repository of the
[translated Volume 12 Extra book titled "Party at the End"](https://github.com/coconutcastle/HNK_party_at_the_end/blob/master/readfile.md).

---

#### Works unrelated to Houseki no Kuni:

##### "25 Hour Vacation"

<table>
    <tr>
        <td><code>/25-ji-no-vacances</code></td>
        <td><code>/25-hour-vacation</code></td>
        <td><code>/vacances</code></td>
    </tr>
</table>

Redirects to the MangaDex chapter reader for the story
["25 Hour Vacation"](https://mangadex.org/chapter/39331c1e-4118-450f-b61c-3112e57ae936) in the Haruko Ichikawa
Anthology.

---

##### Haruko Ichikawa Anthology

<table>
    <tr>
        <td><code>/anthology</code></td>
        <td><code>/ichikawa-haruko-sakuhinshuu</code></td>
        <td><code>/sakuhinshuu</code></td>
    </tr>
</table>

Redirects to the MangaDex title page for the
[Haruko Ichikawa Anthology](https://mangadex.org/title/e89c85d5-3131-4fd8-bf4f-3985ef63be83/ichikawa-haruko-sakuhinshuu).

---

##### "Moshimo, Tokyo"

<table>
    <tr>
        <td><code>/moshimo</code></td>
        <td><code>/moshimo-tokyo</code></td>
    </tr>
</table>

Redirects to the MangaDex title page for
["Moshimo, Tokyo"](https://mangadex.org/title/fa91e632-8556-446e-8227-b6003acab958/moshimo-tokyo), which includes a
contribution by Haruko Ichikawa.

---

##### "Mushi to Uta"

<table>
    <tr>
        <td><code>/mushi</code></td>
        <td><code>/mushi-to-uta</code></td>
    </tr>
</table>

Redirects to the MangaDex chapter reader for the story
["Mushi to Uta"](https://mangadex.org/chapter/ee5d90b2-c9d6-4461-a972-24ef0e7ce9af) in the Haruko Ichikawa Anthology.

---

##### "Ouji no Himitsu"

<table>
    <tr>
        <td><code>/ouji</code></td>
        <td><code>/ouji-no-himitsu</code></td>
    </tr>
</table>

Redirects to the MangaDex title page for
["Ouji no Himitsu"](https://mangadex.org/title/07c1eeab-3185-4932-a975-132f2115d6bd/ouji-no-himitsu).

---

##### "Saegusa-Sensei"

<table>
    <tr>
        <td><code>/saegusa</code></td>
        <td><code>/saegusa-sensei</code></td>
    </tr>
</table>

Redirects to the MangaDex title page for
["Saegusa-Sensei"](https://mangadex.org/title/4de59a89-a6a8-4059-9ab3-501f7c260223/saegusa-sensei).

---

### Technical & Protected Routes

#### oEmbed Route

<table>
    <tr>
        <td><code>/oembed</code></td>
    </tr>
</table>

[oEmbed](https://oembed.com/) API to facilitate enhanced embedding of `hnk.rocks` links. Only useful for the redirection
backend.

---

#### Updating `/latest`, `/since`, and `/next`

<table>
    <tr>
        <td><code>/submit</code></td>
    </tr>
</table>

Protected Route. Used to add new chapter links and to update the `/latest`, `/since`, and `/next` endpoints.

hnk.rocks made by `@majortanya` on Discord.
