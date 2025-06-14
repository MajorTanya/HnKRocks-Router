# HnK.Rocks-Router

A Cloudflare Worker for the Houseki no Kuni community & fans of Haruko Ichikawa in general.

The goal of this project is to build a comprehensive catalogue of all things Houseki no Kuni & Haruko Ichikawa

Many routes have convenience aliases, displayed in the tables of each route. You are free to use any of the listed
aliases as they're functionally identical.

*All routes are relative to the base URL `https://hnk.rocks`.*

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Houseki no Kuni Routes](#houseki-no-kuni-routes)
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
    - [Page image embed (Discord, etc.) links for a specific page](#page-image-embed-discord-etc-links-for-a-specific-page-2)
  - [Houseki no Kuni (Coloured version)](#houseki-no-kuni-coloured-version)
    - [Page image embed (Discord, etc.) links for a specific page](#page-image-embed-discord-etc-links-for-a-specific-page-3)
  - [Fandub project](#fandub-project)
    - [Episode links for the Fandub project](#episode-links-for-the-fandub-project)
  - [Short Stories Fandub project](#short-stories-fandub-project)
    - [Episode links for the Short Stories Fandub project](#episode-links-for-the-short-stories-fandub-project)
      - [Existing Episodes](#existing-episodes)
  - [Volume Cover Embeds](#volume-cover-embeds)
    - [Extended Volume Cover Embeds](#extended-volume-cover-embeds)
- [Other works by Haruko Ichikawa](#other-works-by-haruko-ichikawa)
  - [Works directly related to Houseki no Kuni](#works-directly-related-to-houseki-no-kuni)
    - ["Pseudomorph of Love" (Artbook)](#pseudomorph-of-love-artbook)
    - ["Pseudomorph of Love" Illustration Notes](#pseudomorph-of-love-illustration-notes)
    - ["Statue" (Japanese Volume 9 Extra)](#statue-japanese-volume-9-extra)
    - ["Freedom Love Hell" (Japanese Volume 10 Extra)](#freedom-love-hell-japanese-volume-10-extra)
    - [Original one-shot (Part of Japanese Volume 10 Extra)](#original-one-shot-part-of-japanese-volume-10-extra)
    - [Lorebook (Japanese Volume 11 Extra)](#lorebook-japanese-volume-11-extra)
      - [Community translation](#community-translation)
      - [Machine-translated, non-typeset translation](#machine-translated-non-typeset-translation)
    - ["Party at the End" (Japanese Volume 12 Extra)](#party-at-the-end-japanese-volume-12-extra)
    - [Drone Show for Volume 13 Release Countdown (2024-11-20)](#drone-show-for-volume-13-release-countdown-2024-11-20)
    - [First Volume Commemorative PV (2013-07-19)](#first-volume-commemorative-pv-2013-07-19)
    - [Haruko Ichikawa's Defunct Blog](#haruko-ichikawas-defunct-blog)
  - [Works unrelated to Houseki no Kuni:](#works-unrelated-to-houseki-no-kuni)
    - ["25 Hour Vacation"](#25-hour-vacation)
    - [Haruko Ichikawa Anthology](#haruko-ichikawa-anthology)
    - ["Moshimo, Tokyo"](#moshimo-tokyo)
    - ["Mushi to Uta"](#mushi-to-uta)
    - ["Ouji no Himitsu"](#ouji-no-himitsu)
    - ["Saegusa-Sensei"](#saegusa-sensei)
    - [Special Illustration for Tsuritama's Anime Debut](#special-illustration-for-tsuritamas-anime-debut)
    - [Cover Illustration for 2025 Edition of "Introduction to Social Choice Theory" by Toyotaka Sakai](#cover-illustration-for-2025-edition-of-introduction-to-social-choice-theory-by-toyotaka-sakai)
- [Interviews](#interviews)
  - [Interview with Eureka (2010)](#interview-with-eureka-2010)
  - [Interview with Kono Manga ga Sugoi (2014) - Part 1](#interview-with-kono-manga-ga-sugoi-2014---part-1)
  - [Interview with Kono Manga ga Sugoi (2014) - Part 2](#interview-with-kono-manga-ga-sugoi-2014---part-2)
  - [Interview with Current Obsession (2015)](#interview-with-current-obsession-2015)
  - [Interview with Entertainment Week (2016)](#interview-with-entertainment-week-2016)
- [Community works](#community-works)
  - [Weight Estimation Spreadsheet](#weight-estimation-spreadsheet)
  - [Weight Estimation Tumblr Thread](#weight-estimation-tumblr-thread)
- [Miscellaneous Routes](#miscellaneous-routes)
  - [Overview over all available Redirects](#overview-over-all-available-redirects)
  - [The `uselessphos` Discord emote](#the-uselessphos-discord-emote)
  - [Feedback form](#feedback-form)
  - [Changelog](#changelog)
- [Technical & Protected Routes](#technical--protected-routes)
  - [oEmbed Route](#oembed-route)
  - [Updating `/latest`, `/since`, and `/next`](#updating-latest-since-and-next)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---

## Houseki no Kuni Routes

### Houseki no Kuni on MangaDex

<table>
    <tr>
        <td><code>/</code></td>
    </tr>
</table>

Redirects to the MangaDex title page
for [Houseki no Kuni](https://mangadex.org/title/cade38b7-64c4-4a29-8e3c-8c283291d6c6/houseki-no-kuni).

Usage: [https://hnk.rocks](https://hnk.rocks)

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

Example: [https://hnk.rocks/chapter/1/page/2/i](https://hnk.rocks/chapter/1/page/2/i)

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

Provides a countdown to the (estimated) next chapter release. The exact hours, minutes, and seconds won't be perfectly
accurate, but give a broad picture.

Supports Social Media link previews, so just sending the link to e.g. Discord will show the remaining time.

Usage: [https://hnk.rocks/next](https://hnk.rocks/next)

---

### Time since the last Chapter release

<table>
    <tr>
        <td><code>/since</code></td>
    </tr>
</table>

Provides a counter of the time elapsed since the last chapter was released, as scanlated by the MangaDex user Tissal.

Supports Social Media link previews, so just sending the link to e.g. Discord will show the remaining time.

Usage: [https://hnk.rocks/since](https://hnk.rocks/since)

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

#### Page image embed (Discord, etc.) links for a specific page

<table>
    <tr>
        <td><code>/c/[chapterNumber]/p/[pageNumber]/i</code></td>
        <td><code>/c/[chapterNumber]/page/[pageNumber]/i</code></td>
        <td><code>/c/[chapterNumber]/pages/[pageNumber]/i</code></td>
    </tr>
    <tr>
        <td><code>/chapter/[chapterNumber]/p/[pageNumber]/i</code></td>
        <td><code>/chapter/[chapterNumber]/page/[pageNumber]/i</code></td>
        <td><code>/chapter/[chapterNumber]/pages/[pageNumber]/i</code></td>
    </tr>
    <tr>
        <td><code>/chapters/[chapterNumber]/p/[pageNumber]/i</code></td>
        <td><code>/chapters/[chapterNumber]/page/[pageNumber]/i</code></td>
        <td><code>/chapters/[chapterNumber]/pages/[pageNumber]/i</code></td>
    </tr>
</table>

Parameters:

- `[chapterNumber]` - integers or decimals (don't add the brackets)
- `[pageNumber]` - integers (don't add the brackets)

Provides a specially formatted HTML response which will be rendered as an image embed of the specified page number.

The route table above may look complicated but all it is showing is that `chapters` can be replaced with `chapter` or
even just `c` in the URL. The same goes for `pages`, which can be replaced with `page` or even just `p`. The variants
for each can be combined as desired (for example, you can use `chapter` and `p` together in the same URL.)

*Requires providing a chapter and a page number.*

Example: [https://hnk.rocks/minimalist/chapter/1/page/2/i](https://hnk.rocks/minimalist/chapter/1/page/2/i)

**Please note**: There are no [chapter links](#chapter-links) or
[chapter page links](#page-links-for-a-specific-chapter) available for this version. Only the full links for the page
image embedding are supported.

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

#### Page image embed (Discord, etc.) links for a specific page

<table>
    <tr>
        <td><code>/c/[chapterNumber]/p/[pageNumber]/i</code></td>
        <td><code>/c/[chapterNumber]/page/[pageNumber]/i</code></td>
        <td><code>/c/[chapterNumber]/pages/[pageNumber]/i</code></td>
    </tr>
    <tr>
        <td><code>/chapter/[chapterNumber]/p/[pageNumber]/i</code></td>
        <td><code>/chapter/[chapterNumber]/page/[pageNumber]/i</code></td>
        <td><code>/chapter/[chapterNumber]/pages/[pageNumber]/i</code></td>
    </tr>
    <tr>
        <td><code>/chapters/[chapterNumber]/p/[pageNumber]/i</code></td>
        <td><code>/chapters/[chapterNumber]/page/[pageNumber]/i</code></td>
        <td><code>/chapters/[chapterNumber]/pages/[pageNumber]/i</code></td>
    </tr>
</table>

Parameters:

- `[chapterNumber]` - integers or decimals (don't add the brackets)
- `[pageNumber]` - integers (don't add the brackets)

Provides a specially formatted HTML response which will be rendered as an image embed of the specified page number.

The route table above may look complicated but all it is showing is that `chapters` can be replaced with `chapter` or
even just `c` in the URL. The same goes for `pages`, which can be replaced with `page` or even just `p`. The variants
for each can be combined as desired (for example, you can use `chapter` and `p` together in the same URL.)

*Requires providing a chapter and a page number.*

Example: [https://hnk.rocks/coloured/chapter/1/page/2/i](https://hnk.rocks/coloured/chapter/1/page/2/i)

**Please note**: There are no [chapter links](#chapter-links) or
[chapter page links](#page-links-for-a-specific-chapter) available for this version. Only the full links for the page
image embedding are supported.

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

### Short Stories Fandub project

<table>
    <tr>
        <td><code>/stories-fandub</code></td>
        <td><code>/stories-fandub/playlist</code></td>
    </tr>
</table>

Redirects to the YouTube Playlist for the Ichikawa Short Stories Fandub project.

Example: [https://hnk.rocks/stories-fandub](https://hnk.rocks/stories-fandub)

#### Episode links for the Short Stories Fandub project

<table>
    <tr>
        <td><code>/stories-fandub/[work]</code></td>
    </tr>
</table>

Redirects to the YouTube video for the Ichikawa Short Stories Fandub episode in question. If the episode doesn't exist,
redirects to the YouTube Playlist for the Ichikawa Short Stories Fandub project.

Parameters:

- `[work]` - titles of works as described below (don't add the brackets).

*Requires providing a work title.*

##### Existing Episodes

- `/on-pandora` | `/pandora`
  - "On Pandora" short story from volume 2 of the [Haruko Ichikawa Anthology](#haruko-ichikawa-anthology).
    - Example: [https://hnk.rocks/stories-fandub/on-pandora](https://hnk.rocks/stories-fandub/on-pandora)

---

### Volume Cover Embeds

<table>
    <tr>
        <td><code>/cover/[volumeNumber]</code></td>
        <td><code>/covers/[volumeNumber]</code></td>
    </tr>
</table>

Parameters:

- `[volumeNumber]` - integers (don't add the brackets)

Links directly to the [HnK Fandom Wiki](https://houseki-no-kuni.fandom.com/wiki/Houseki_no_Kuni_Wiki)'s volume cover
images. The volume number can be 0-padded if desired, so 1 and 01 are both acceptable parameters for volume 1's cover.

When posted to a platform like Discord, it provides a specially formatted HTML response which will be rendered as an
image embed of the specific volume cover.

*Requires providing a volume number.*

Example: [https://hnk.rocks/cover/1](https://hnk.rocks/cover/1)

#### Extended Volume Cover Embeds

<table>
    <tr>
        <td><code>/cover/[volumeNumber]/full</code></td>
        <td><code>/covers/[volumeNumber]/full</code></td>
    </tr>
</table>

Parameters:

- `[volumeNumber]` - integers (don't add the brackets)

Links directly to the [HnK Fandom Wiki](https://houseki-no-kuni.fandom.com/wiki/Houseki_no_Kuni_Wiki)'s extended volume
cover images. The volume number can be 0-padded if desired, so 1 and 01 are both acceptable parameters for volume 1's
extended cover.

When posted to a platform like Discord, it provides a specially formatted HTML response which will be rendered as an
image embed of the specific extended volume cover.

Note: Since not all extended covers are available at this time, the embed will add a note for missing extended covers
and show the normal cover instead.

*Requires providing a volume number.*

Example: [https://hnk.rocks/cover/1/full](https://hnk.rocks/cover/1/full)

---

## Other works by Haruko Ichikawa

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

*All these work URLs are relative to `https://hnk.rocks/other` or `https://hnk.rocks/etc`.*

### Works directly related to Houseki no Kuni

#### "Pseudomorph of Love" (Artbook)

<table>
    <tr>
        <td><code>/artbook</code></td>
        <td><code>/pseudomorph</code></td>
        <td><code>/pseudomorph-of-love</code></td>
    </tr>
</table>

Redirects to the [Houseki no Kuni fandom wiki article](https://houseki-no-kuni.fandom.com/wiki/Pseudomorph_of_Love) with
the Artbook.

Example: [https://hnk.rocks/other/pseudomorph](https://hnk.rocks/other/pseudomorph)

---

#### "Pseudomorph of Love" Illustration Notes

<table>
    <tr>
        <td><code>/artbook-notes</code></td>
        <td><code>/pseudomorph-notes</code></td>
        <td><code>/pseudomorph-of-love-notes</code></td>
    </tr>
</table>

Redirects to the [Imgur post with the translation](https://imgur.com/a/ONKBcGH) of the illustration comments by Haruko
Ichikawa in the "Pseudomorph of Love" artbook, as translated by [Tumblr user red-dia](https://www.tumblr.com/red-dia/).

Example: [https://hnk.rocks/other/artbook-notes](https://hnk.rocks/other/artbook-notes)

---

#### "Statue" (Japanese Volume 9 Extra)

<table>
    <tr>
        <td><code>/statue</code></td>
        <td><code>/vol9-extra</code></td>
        <td><code>/vol09-extra</code></td>
    </tr>
</table>

Redirects to the [Pastebin with a fan translation](https://pastebin.com/mfhZPsUa) of the text in the Volume 9 Statue
Artbook extra. Translation by Discord user `@anonymously5866`.

Example: [https://hnk.rocks/other/statue](https://hnk.rocks/other/statue)

---

#### "Freedom Love Hell" (Japanese Volume 10 Extra)

<table>
    <tr>
        <td><code>/freedom</code></td>
        <td><code>/love-freedom</code></td>
        <td><code>/love-freedom-hell</code></td>
        <td><code>/vol10-extra</code></td>
    </tr>
</table>

Redirects to the [Houseki no Kuni fandom wiki article](https://houseki-no-kuni.fandom.com/wiki/Freedom) with the
Artbook. This includes the [original Houseki no Kuni one-shot](#original-one-shot-part-of-japanese-volume-10-extra)
chapter.

Example: [https://hnk.rocks/other/freedom](https://hnk.rocks/other/freedom)

---

#### Original one-shot (Part of Japanese Volume 10 Extra)

<table>
    <tr>
        <td><code>/one-shot</code></td>
        <td><code>/oneshot</code></td>
    </tr>
</table>

Redirects to the section of the [Houseki no Kuni fandom wiki article](https://houseki-no-kuni.fandom.com/wiki/Freedom)
with the [Freedom Love Hell](#freedom-love-hell-japanese-volume-10-extra) Artbook, which includes this one-shot chapter.

Example: [https://hnk.rocks/other/one-shot](https://hnk.rocks/other/one-shot)

---

#### Lorebook (Japanese Volume 11 Extra)

Update (2025-03-12):

Since adding this section originally, a new fan translation has been created. The links have been changed to redirect
to the newer translation. The MTL version can be accessed by appending `-mtl` to the previous links.

##### Community translation

<table>
    <tr>
        <td><code>/lorebook</code></td>
        <td><code>/hnk-lorebook</code></td>
        <td><code>/vol11-extra</code></td>
    </tr>
</table>

Redirects to the
[Google Docs document with the community-translated](https://docs.google.com/document/d/1ah3Av1OtEbYyhcfLhukj9HmpoJ6gJ829zuFkyObRRpk/view)
version of the Volume 11 Lorebook extra, as
[created and shared by Reddit user Terminator_Slap](https://www.reddit.com/r/LandoftheLustrous/comments/1fgfd5y/full_translation_of_life_and_culture_of/).
Other community members have also contributed to other sections of the translation.

Example: [https://hnk.rocks/other/lorebook](https://hnk.rocks/other/lorebook)

##### Machine-translated, non-typeset translation

<table>
    <tr>
        <td><code>/lorebook-mtl</code></td>
        <td><code>/hnk-lorebook-mtl</code></td>
        <td><code>/vol11-extra-mtl</code></td>
    </tr>
</table>

Redirects to the [Imgur post with the machine-translated, non-typeset](https://imgur.com/a/c7Aqh4a) version of the
Volume 11 Lorebook extra.

Example: [https://hnk.rocks/other/lorebook-mtl](https://hnk.rocks/other/lorebook-mtl)

---

#### "Party at the End" (Japanese Volume 12 Extra)

<table>
    <tr>
        <td><code>/party</code></td>
        <td><code>/party-at-the-end</code></td>
        <td><code>/vol12-extra</code></td>
    </tr>
</table>

Redirects to the GitHub repository of the
[translated Volume 12 Extra book titled "Party at the End"](https://github.com/coconutcastle/HNK_party_at_the_end/blob/master/readfile.md).

Example: [https://hnk.rocks/other/party](https://hnk.rocks/other/party)

---

#### Drone Show for Volume 13 Release Countdown (2024-11-20)

<table>
    <tr>
        <td><code>/drones</code></td>
        <td><code>/drone-show</code></td>
        <td><code>/vol13-drone-show</code></td>
    </tr>
</table>

Redirects to the past livestream on the official Kodansha YouTube channel of the
[Volume 13 Release Countdown Drone Show](https://www.youtube.com/watch?v=EFIMy02Nhoc).

Example: [https://hnk.rocks/other/drones](https://hnk.rocks/other/drones)

---

#### First Volume Commemorative PV (2013-07-19)

<table>
    <tr>
        <td><code>/ona</code></td>
        <td><code>/2013-pv</code></td>
        <td><code>/2013-ona</code></td>
    </tr>
</table>

Redirects to [the animated PV](https://www.youtube.com/watch?v=3pzIQ54cwiA) released in commemoration of the manga's
first volume release on the YouTube channel of Afternoon magazine.

Example: [https://hnk.rocks/other/ona](https://hnk.rocks/other/ona)

---

#### Haruko Ichikawa's Defunct Blog

<table>
    <tr>
        <td><code>/blog</code></td>
        <td><code>/blog/[entry]</code></td>
    </tr>
</table>

Redirects to captures of Haruko Ichikawa's defunct AGAR blog in the Internet Archive.

Note: These "blog entries" are rarely more than one sentence long, if that.

Parameters:

- `[entry]` - blog captures as named in the list below (don't add the brackets)

If no entry is provided, this will redirect to the last available successful capture (December 4th, 2022).

Example: [https://hnk.rocks/other/blog](https://hnk.rocks/other/blog)

Below is a selection of available captures that may be of interest to fans of Houseki no Kuni. There are other captures
available pre-2013 but most graphics went uncaptured and the contents of the page are now mostly lost as a result. The
curious are encouraged to take a look by navigating through the timeline shown at the top of the captured webpage.

**Available Blog Captures**:

- `/hnk-revived` \| `/hnk-announced` \| `/hnk-announcement`
  - Haruko Ichikawa announcing the revival of Houseki no Kuni as a series in the Afternoon monthly magazine
    - Example: [https://hnk.rocks/other/blog/hnk-revived](https://hnk.rocks/other/blog/hnk-revived)
- `/hnk-pv-posted`
  - Haruko Ichikawa announcing that volume 1 will be on sale. Accompanied by the
    [animated PV](#first-volume-commemorative-pv-2013-07-19) made for the occasion.
    - Example: [https://hnk.rocks/other/blog/hnk-pv-posted](https://hnk.rocks/other/blog/hnk-pv-posted)
- `/hnk-vol2-posted`
  - Haruko Ichikawa announcing that volume 2 will be on sale.
    - Example: [https://hnk.rocks/other/blog/hnk-vol2-posted](https://hnk.rocks/other/blog/hnk-vol2-posted)
- `/hnk-vol4-promo-posted`
  - Haruko Ichikawa announcing that volume 4 will be on sale. Accompanied by a single-page comic promoting the card
    game extra.
    - Example: [https://hnk.rocks/other/blog/hnk-vol4-promo-posted](https://hnk.rocks/other/blog/hnk-vol4-promo-posted)
- `/hnk-vol6-promo-posted`
  - Haruko Ichikawa announcing that volume 6 will be on sale. Accompanied by an illustration of Hemimorphite,
    Watermelon Tourmaline, Cairngorm, Sphene, and Peridot promoting the BAGGU collaboration extra.
    - Example: [https://hnk.rocks/other/blog/hnk-vol6-promo-posted](https://hnk.rocks/other/blog/hnk-vol6-promo-posted)

---

### Works unrelated to Houseki no Kuni:

#### "25 Hour Vacation"

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

Example: [https://hnk.rocks/other/vacances](https://hnk.rocks/other/vacances)

---

#### Haruko Ichikawa Anthology

<table>
    <tr>
        <td><code>/anthology</code></td>
        <td><code>/ichikawa-haruko-sakuhinshuu</code></td>
        <td><code>/sakuhinshuu</code></td>
    </tr>
</table>

Redirects to the MangaDex title page for the
[Haruko Ichikawa Anthology](https://mangadex.org/title/e89c85d5-3131-4fd8-bf4f-3985ef63be83/ichikawa-haruko-sakuhinshuu).

Example: [https://hnk.rocks/other/anthology](https://hnk.rocks/other/anthology)

---

#### "Moshimo, Tokyo"

<table>
    <tr>
        <td><code>/moshimo</code></td>
        <td><code>/moshimo-tokyo</code></td>
    </tr>
</table>

Redirects to the MangaDex title page for
["Moshimo, Tokyo"](https://mangadex.org/title/fa91e632-8556-446e-8227-b6003acab958/moshimo-tokyo), which includes a
contribution by Haruko Ichikawa.

Example: [https://hnk.rocks/other/moshimo](https://hnk.rocks/other/moshimo)

---

#### "Mushi to Uta"

<table>
    <tr>
        <td><code>/mushi</code></td>
        <td><code>/mushi-to-uta</code></td>
    </tr>
</table>

Redirects to the MangaDex chapter reader for the story
["Mushi to Uta"](https://mangadex.org/chapter/ee5d90b2-c9d6-4461-a972-24ef0e7ce9af) in the Haruko Ichikawa Anthology.

Example: [https://hnk.rocks/other/mushi](https://hnk.rocks/other/mushi)

---

#### "Ouji no Himitsu"

<table>
    <tr>
        <td><code>/ouji</code></td>
        <td><code>/ouji-no-himitsu</code></td>
    </tr>
</table>

Redirects to the MangaDex title page for
["Ouji no Himitsu"](https://mangadex.org/title/07c1eeab-3185-4932-a975-132f2115d6bd/ouji-no-himitsu).

Example: [https://hnk.rocks/other/ouji](https://hnk.rocks/other/ouji)

---

#### "Saegusa-Sensei"

<table>
    <tr>
        <td><code>/saegusa</code></td>
        <td><code>/saegusa-sensei</code></td>
    </tr>
</table>

Redirects to the MangaDex title page for
["Saegusa-Sensei"](https://mangadex.org/title/4de59a89-a6a8-4059-9ab3-501f7c260223/saegusa-sensei).

Example: [https://hnk.rocks/other/saegusa](https://hnk.rocks/other/saegusa)

---

#### Special Illustration for Tsuritama's Anime Debut

<table>
    <tr>
        <td><code>/tsuritama</code></td>
        <td><code>/tsuritama-illustration</code></td>
    </tr>
</table>

Redirects to a
[fan translation blog entry](https://dijehtranslations.wordpress.com/2018/08/29/ichikawa-haruko-special-illustration-for-tsuritama-anime-debut/)
for an illustration and special message by Haruko Ichikawa, made for the Tsuritama anime debut in 2012.

Example: [https://hnk.rocks/other/tsuritama](https://hnk.rocks/other/tsuritama)

---

#### Cover Illustration for 2025 Edition of "Introduction to Social Choice Theory" by Toyotaka Sakai

<table>
    <tr>
        <td><code>/social-choice-illustration</code></td>
        <td><code>/toyotaka-sakai-illustration</code></td>
    </tr>
</table>

Redirects to a
[bookstore listing for an economics textbook titled "(New Edition) Introduction to Social Choice Theory"](https://www.nippyo.co.jp/shop/book/9483.html)
by [Toyotaka Sakai](https://sites.google.com/sakaioffice.co/main/home) (Professor of Economics at Keio University), for
which Haruko Ichikawa provided the cover illustration.

The illustration itself can be viewed in a larger format by clicking it and/or right-clicking it to open
it in a new tab. There is currently no better link available to view the illustration on its own outside of this
bookstore listing.

Example: [https://hnk.rocks/other/social-choice-illustration](https://hnk.rocks/other/social-choice-illustration)

---

## Interviews

<table>
    <tr>
        <td><code>/interview/[language]/[interview]</code></td>
        <td><code>/interviews/[language]/[interview]</code></td>
    </tr>
</table>

Redirects to interviews conducted about Houseki no Kuni or other projects of Haruko Ichikawa. Some may only be available
in specific languages.

*Requires providing a language AND an interview.* Please refer to the listed interviews below for the correct
parameters.

*All these work URLs are relative to `https://hnk.rocks/interviews` or `https://hnk.rocks/interview`.*

Parameters:

- `[language]` - language shorthand (don't add the brackets). Currently only uses `en` for English language interviews.
- `[interview]` - interview link as specified below (don't add the brackets)

---

### Interview with Eureka (2010)

<table>
    <tr>
        <td><code>/en/eureka-2010</code></td>
        <td><code>/en/eureka</code></td>
    </tr>
</table>

Redirects to a
[fan translation of an interview conducted by Eureka in 2010](https://dijehtranslations.wordpress.com/2021/10/10/ichikawa-haruko-interview-eureka-02-2010/).

Example: [https://hnk.rocks/interviews/en/eureka-2010](https://hnk.rocks/interviews/en/eureka-2010)

---

### Interview with Kono Manga ga Sugoi (2014) - Part 1

<table>
    <tr>
        <td><code>/en/kono-manga-2014-pt-1</code></td>
        <td><code>/en/2014-pt-1</code></td>
    </tr>
</table>

Redirects to a
[fan translation of part 1 of an interview conducted by Kono Manga ga Sugoi in 2014](https://dijehtranslations.wordpress.com/2018/06/22/ichikawa-haruko-houseki-no-kuni-interview-2014/).
This part of the interview is specifically about Houseki no Kuni.

Example: [https://hnk.rocks/interviews/en/kono-manga-2014-pt-1](https://hnk.rocks/interviews/en/kono-manga-2014-pt-1)

---

### Interview with Kono Manga ga Sugoi (2014) - Part 2

<table>
    <tr>
        <td><code>/en/kono-manga-2014-pt-2</code></td>
        <td><code>/en/2014-pt-2</code></td>
    </tr>
</table>

Redirects to a
[fan translation of part 2 of an interview conducted by Kono Manga ga Sugoi in 2014](https://dijehtranslations.wordpress.com/2018/07/18/ichikawa-haruko-2014-interview-part-2/).
This part of the interview is about Haruko Ichikawa's works in general as well as her process and sources of
inspiration.

Example: [https://hnk.rocks/interviews/en/kono-manga-2014-pt-2](https://hnk.rocks/interviews/en/kono-manga-2014-pt-2)

---

### Interview with Current Obsession (2015)

<table>
    <tr>
        <td><code>/en/current-obsession-2015</code></td>
        <td><code>/en/current-obsession</code></td>
        <td><code>/en/co-2015</code></td>
    </tr>
</table>

Redirects to an [interview with Haruko Ichikawa](https://www.current-obsession.com/the-kingdom-of-gems/), conducted by
the Dutch magazine Current Obsession via e-mail.

Note: The website credits text and translation to 2018 but the relevant issue of the magazine was released in 2015, so
2015 is used here.

Example: [https://hnk.rocks/interviews/en/current-obsession-2015](https://hnk.rocks/interviews/en/current-obsession-2015)

---

### Interview with Entertainment Week (2016)

<table>
    <tr>
        <td><code>/en/entertainment-week-2016</code></td>
        <td><code>/en/entertainment-week</code></td>
        <td><code>/en/entertainment-2016</code></td>
    </tr>
</table>

Redirects to a
[fan translation of an interview conducted by Entertainment Week in 2016](https://seizonsenryaku1.wordpress.com/2018/01/28/ichikawa-haruko-interview-on-houseki-no-kuni-translation/).
The Japanese interview was originally conducted by Entertainment Week, whose website was shut down in June 2024.

Example: [https://hnk.rocks/interviews/en/entertainment-week-2016](https://hnk.rocks/interviews/en/entertainment-week-2016)

---

## Community works

<table>
    <tr>
        <td><code>/community/[work]</code></td>
    </tr>
</table>

Redirects to specific community works that aren't bigger projects like the [Fandub](#fandub-project) or
[Short stories fandub](#short-stories-fandub-project) or translations of Ichikawa's works.

*Requires providing a work, see list below.*

Parameters:

- `[work]` - titles of works as described below.

---

### Weight Estimation Spreadsheet

<table>
    <tr>
        <td><code>/community/weights</code></td>
        <td><code>/community/weights-spreadsheet</code></td>
    </tr>
</table>

Redirects to the
[Google Sheets spreadsheet](https://docs.google.com/spreadsheets/d/1OjgXWMDYls9w_KV1r4CyoUCen_kpkpuYAKRoXHJVEbA/view)
of Tumblr user [rinboz](https://www.tumblr.com/rinboz)'s weight estimations for each gem character.

Example: [https://hnk.rocks/community/weights](https://hnk.rocks/community/weights)

---

### Weight Estimation Tumblr Thread

<table>
    <tr>
        <td><code>/community/weights-tumblr</code></td>
    </tr>
</table>

Redirects to [the thread of Tumblr posts](https://www.tumblr.com/rinboz/187133050585) by Tumblr user
[rinboz](https://www.tumblr.com/rinboz) that showcases
[the spreadsheet of character weights](#weight-estimation-spreadsheet).

Example: [https://hnk.rocks/community/weights-tumblr](https://hnk.rocks/community/weights-tumblr)

---

## Miscellaneous Routes

### Overview over all available Redirects

<table>
    <tr>
        <td><code>/about</code></td>
    </tr>
</table>

Redirects to this [Redirection Overview](https://majortanya.github.io/HnKRocks-Router/).

Usage: [https://hnk.rocks/about](https://hnk.rocks/about)

---

### The `uselessphos` Discord emote

<table>
    <tr>
        <td><code>/uselessphos</code></td>
    </tr>
</table>

Shows the `uselessphos` Discord Emote.

Usage: [https://hnk.rocks/uselessphos](https://hnk.rocks/uselessphos)

---

### Feedback form

<table>
    <tr>
        <td><code>/feedback</code></td>
    </tr>
</table>

Redirects to a [Google Form to provide feedback and bug reports about HnK.rocks](https://forms.gle/QRGGriFizperPnZM6).

Usage: [https://hnk.rocks/feedback](https://hnk.rocks/feedback)

---

### Changelog

<table>
    <tr>
        <td><code>/changelog</code></td>
    </tr>
</table>

Redirects to the [Changelog](https://majortanya.github.io/HnKRocks-Router/CHANGELOG).

Usage: [https://hnk.rocks/changelog](https://hnk.rocks/changelog)

---

## Technical & Protected Routes

### oEmbed Route

<table>
    <tr>
        <td><code>/oembed</code></td>
    </tr>
</table>

[oEmbed](https://oembed.com/) API to facilitate enhanced embedding of `hnk.rocks` links. Only useful for the redirection
backend.

---

### Updating `/latest`, `/since`, and `/next`

<table>
    <tr>
        <td><code>/submit</code></td>
    </tr>
</table>

Protected Route. Used to add new chapter links and to update the `/latest`, `/since`, and `/next` endpoints.

hnk.rocks made by `@majortanya` on Discord. Entire router source code available on the
[GitHub repository](https://github.com/MajorTanya/HnKRocks-Router).

You can find the list of changes by version and date in the [Changelog](https://hnk.rocks/changelog).
