/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { type IRequestStrict, Router } from 'itty-router/Router';
import useReflare from 'reflare';

const ZERO_DECIMAL_PATTERN = /\d+\.0/;

// Houseki no Kuni
const HNK_COLOURED_URL = 'https://mangadex.org/title/95264f28-3ccf-4dea-ad15-5323e4766b4c/houseki-no-kuni';
const HNK_LOREBOOK_URL = 'https://imgur.com/a/c7Aqh4a';
const HNK_MINIMALIST_URL = 'https://mangadex.org/title/37bf7574-641e-4665-b992-f2ba8d4652b8/houseki-no-kuni';
const HNK_PARTY_AT_THE_END_URL = 'https://github.com/coconutcastle/HNK_party_at_the_end/blob/master/readfile.md';
const HNK_PSEUDOMORPH_URL = 'https://houseki-no-kuni.fandom.com/wiki/Pseudomorph_of_Love';
const HNK_TITLE_URL = 'https://mangadex.org/title/cade38b7-64c4-4a29-8e3c-8c283291d6c6/houseki-no-kuni';

// Other Ichikawa works
const MOSHIMO_TOKYO_URL = 'https://mangadex.org/title/fa91e632-8556-446e-8227-b6003acab958/moshimo-tokyo';
const MUSHI_TO_UTA_URL = 'https://mangadex.org/chapter/ee5d90b2-c9d6-4461-a972-24ef0e7ce9af';
const OUJI_URL = 'https://mangadex.org/title/07c1eeab-3185-4932-a975-132f2115d6bd/ouji-no-himitsu';
const SAEGUSA_URL = 'https://mangadex.org/title/4de59a89-a6a8-4059-9ab3-501f7c260223/saegusa-sensei';
const SAKUHINSHUU_URL = 'https://mangadex.org/title/e89c85d5-3131-4fd8-bf4f-3985ef63be83/ichikawa-haruko-sakuhinshuu';
const VACANCES_URL = 'https://mangadex.org/chapter/39331c1e-4118-450f-b61c-3112e57ae936';

// Extras
const ABOUT_URL = 'https://majortanya.github.io/HnKRocks-Router/';
const FEEDBACK_URL = 'https://forms.gle/QRGGriFizperPnZM6';
const SUBMISSION_LOGIN_URL = 'https://new.hnk.rocks/';
const USELESS_PHOS_URL = 'https://cdn.discordapp.com/emojis/676275233702805515.webp?quality=lossless';

// Fandub
const FANDUB_PLAYLIST = 'https://www.youtube.com/playlist?list=PLqmueHYBwQkV_1KkdMlllDjhuUNqiaHGv';
const FANDUB_EP_01 = 'https://www.youtube.com/watch?v=qL2tXjJ5AMg';
const FANDUB_EP_02 = 'https://www.youtube.com/watch?v=9DIzmyE8EaM';

const router = Router();

// Handlers

const redirectToHnKTitlePage = () => Response.redirect(HNK_TITLE_URL, 301);
const redirectToFandubPlaylist = () => Response.redirect(FANDUB_PLAYLIST);

const generateDirectPageResponse = async (chapterNo: number, pageNo: number, env: Env): Promise<string | null> => {
    // handle decimal points padding, e.g. 21.5 -> 021.5, as otherwise, a 3 padding would change nothing
    // decimal point numbers are stored with zero padding in the beginning for consistency, but the string is longer
    const correctedChapterNo = parseInt(`${chapterNo}`);
    const diff = chapterNo - correctedChapterNo;
    const chapterPadded = `${correctedChapterNo}`.padStart(3, '0') + (diff === 0 ? '' : '.' + `${diff}`.split('.')[1]);
    const pagePadded = `${pageNo}`.padStart(3, '0');

    const pageKey = `${chapterPadded}/p${pagePadded}`;
    const r2Page = (await env.ChapterPages.get(`${pageKey}.png`)) || (await env.ChapterPages.get(`${pageKey}.jpg`));
    const key = r2Page != null ? r2Page.key : null;

    if (key == null) return null;

    const uploader = (await env.ChapterToUploader.get(`${chapterNo}`)) || 'Unknown';

    return `<!DOCTYPE html>
    <html lang='en'>
    <head>
        <title>Chapter ${chapterNo}, Page ${pageNo} of Houseki no Kuni (by ${uploader} on MangaDex)</title>
        <meta name='twitter:card' content='summary_large_image'>
        <meta name='twitter:title' content='Houseki no Kuni - Chapter ${chapterNo}, Page ${pageNo}'>
        <meta name='twitter:description' content='Houseki no Kuni - Chapter ${chapterNo}, Page ${pageNo}\n(by ${uploader} on <a href="https://mangadex.org">MangaDex</a>)'>
        <meta name='twitter:image' content='https://pages.hnk.rocks/${key}'>
        <meta name='twitter:url' content='https://hnk.rocks/c/${chapterNo}/p/${pageNo}'>
        <meta name='twitter:site' content='HnK.Rocks'>
    </head>`;
};

const handleExtraPages = async (request: IRequestStrict): Promise<Response> => {
    const reflare = await useReflare();

    reflare.push({
        path: '/*',
        upstream: {
            domain: 'hnkrocks-extra-pages-9i8.pages.dev',
            protocol: 'https'
        }
    });

    return reflare.handle(request);
};

const handleChapterNo = async (request: IRequestStrict, env: Env): Promise<Response> => {
    if (request.params == undefined) return redirectToHnKTitlePage();
    const chapterParam = request.params.chapterNo;
    const chapterParsed = parseFloat(chapterParam);
    if (Number.isNaN(chapterParsed)) return redirectToHnKTitlePage();

    const fixed = chapterParsed.toFixed(1);
    const chapter = ZERO_DECIMAL_PATTERN.test(fixed) ? fixed.slice(0, fixed.indexOf('.')) : fixed;
    let url = await env.ChapterToMDLink.get(chapter);

    if ('pageNo' in request.params) {
        const pageParam = request.params.pageNo;
        const pageParsed = parseInt(pageParam);
        url = Number.isNaN(pageParsed) || url === null ? url : `${url}/${pageParsed}`;
    }

    return url === null ? redirectToHnKTitlePage() : Response.redirect(url, 307);
};

const handleDirectPageLink = async (request: IRequestStrict, env: Env): Promise<Response> => {
    if (request.params == undefined) return redirectToHnKTitlePage();
    const chapterParam = request.params.chapterNo;
    const chapterParsed = parseFloat(chapterParam);
    if (Number.isNaN(chapterParsed)) return redirectToHnKTitlePage();

    const pageParam = request.params.pageNo;
    const pageParsed = parseInt(pageParam);
    if (Number.isNaN(pageParsed)) return redirectToHnKTitlePage();

    const response = await generateDirectPageResponse(chapterParsed, pageParsed, env);
    if (response == null) return Response.redirect(`https://hnk.rocks/c/${chapterParsed}/p/${pageParsed}`);

    return new Response(response, { headers: { 'content-type': 'text/html;charset=UTF-8' } });
};

const handleFandubEpisodeNo = async (request: IRequestStrict): Promise<Response> => {
    if (request.params == undefined) return redirectToFandubPlaylist();
    const episodeParam = request.params.episodeNo;
    const parsed = parseInt(episodeParam);
    if (Number.isNaN(parsed)) return redirectToFandubPlaylist();

    switch (parsed) {
        case 1:
            return Response.redirect(FANDUB_EP_01);
        case 2:
            return Response.redirect(FANDUB_EP_02);
        default:
            return redirectToFandubPlaylist();
    }
};

const handleLatestChapter = async (request: IRequestStrict, env: Env): Promise<Response> => {
    let url = await env.ChapterToMDLink.get('latest');
    if (request.params != undefined && 'pageNo' in request.params) {
        const pageParam = request.params.pageNo;
        const pageParsed = parseInt(pageParam);
        url = Number.isNaN(pageParsed) || url === null ? url : `${url}/${pageParsed}`;
    }
    return url === null ? redirectToHnKTitlePage() : Response.redirect(url, 307);
};

const handleLatestChapterDirectPageLink = async (request: IRequestStrict, env: Env): Promise<Response> => {
    if (request.params == undefined) return redirectToHnKTitlePage();
    const chapterNo = await env.ExtraPages.get('LAST_CHAPTER_NUMBER');
    const chapterParsed = parseFloat(`${chapterNo}`);
    if (Number.isNaN(chapterParsed)) return Response.redirect('https://hnk.rocks/latest');

    const pageParam = request.params.pageNo;
    const pageParsed = parseInt(pageParam);
    if (Number.isNaN(pageParsed)) return redirectToHnKTitlePage();

    const response = await generateDirectPageResponse(chapterParsed, pageParsed, env);
    if (response == null) return Response.redirect(`https://hnk.rocks/latest/p/${pageParsed}`);

    return new Response(response, { headers: { 'content-type': 'text/html;charset=UTF-8' } });
};

const handleOtherWorks = async (request: IRequestStrict): Promise<Response> => {
    if (request.params == undefined) return redirectToHnKTitlePage();
    const workParam = request.params.work;
    if (workParam === '') return redirectToHnKTitlePage();
    switch (workParam.toLowerCase()) {
        // HnK related
        case 'artbook':
        case 'pseudomorph':
        case 'pseudomorph-of-love':
            return Response.redirect(HNK_PSEUDOMORPH_URL, 307);
        case 'lorebook':
        case 'hnk-lorebook':
        case 'vol11-extra':
            return Response.redirect(HNK_LOREBOOK_URL, 307);
        case 'party':
        case 'party-at-the-end':
        case 'vol12-extra':
            return Response.redirect(HNK_PARTY_AT_THE_END_URL, 307);

        // Non-HnK works by Ichikawa Haruko
        case '25-ji-no-vacances':
        case '25-hour-vacation':
        case 'vacances':
            return Response.redirect(VACANCES_URL, 307);
        case 'anthology':
        case 'ichikawa-haruko-sakuhinshuu':
        case 'sakuhinshuu':
            return Response.redirect(SAKUHINSHUU_URL, 307);
        case 'moshimo':
        case 'moshimo-tokyo':
            return Response.redirect(MOSHIMO_TOKYO_URL, 307);
        case 'mushi':
        case 'mushi-to-uta':
            return Response.redirect(MUSHI_TO_UTA_URL, 307);
        case 'ouji':
        case 'ouji-no-himitsu':
            return Response.redirect(OUJI_URL, 307);
        case 'saegusa':
        case 'saegusa-sensei':
            return Response.redirect(SAEGUSA_URL, 307);
        default:
            return redirectToHnKTitlePage();
    }
};

// Route definition

router.get('/(submit|login.php)', () => Response.redirect(SUBMISSION_LOGIN_URL, 308));
router.get('/uselessphos', () => Response.redirect(USELESS_PHOS_URL, 308));
router.get('/feedback', () => Response.redirect(FEEDBACK_URL, 307));
router.get('/about', () => Response.redirect(ABOUT_URL, 307));

// shim the old access to Saegusa-Sensei to not break old links
router.get('/saegusa(-sensei)?', () => Response.redirect('https://hnk.rocks/other/saegusa', 301));

router.get('/(other|etc)/:work', handleOtherWorks);

router.get('/(latest|new(est)?)(/p(ages?)?/:pageNo)?', handleLatestChapter);
router.get('/(latest|new(est)?)/p(ages?)?/:pageNo/i', handleLatestChapterDirectPageLink);

router.get('/c(hapters?)?/:chapterNo(/p(ages?)?/:pageNo)?', handleChapterNo);
router.get('/c(hapters?)?/:chapterNo/p(ages?)?/:pageNo/i', handleDirectPageLink);

router.get('/minimalist', () => Response.redirect(HNK_MINIMALIST_URL, 307));
router.get('/colou?r(ed)?', () => Response.redirect(HNK_COLOURED_URL, 307));

router.get('/next', handleExtraPages);
router.get('/since', handleExtraPages);
router.get('/_app/*', handleExtraPages);

router.get('/fandub', redirectToFandubPlaylist);
router.get('/fandub/playlist', redirectToFandubPlaylist);
router.get('/fandub(/e(pisodes?)?)?/:episodeNo', handleFandubEpisodeNo);

router.all('*', redirectToHnKTitlePage);

interface Env {
    ChapterToMDLink: KVNamespace;
    ChapterToUploader: KVNamespace;
    ExtraPages: KVNamespace;
    ChapterPages: R2Bucket;
}

// noinspection JSUnusedGlobalSymbols
export default {
    async fetch(request: Request, env: Env, _ctx: ExecutionContext): Promise<Response> {
        return router.handle(request, env);
    }
};
