/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { Request, Router } from 'itty-router';

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
const FEEDBACK_URL = 'https://forms.gle/QRGGriFizperPnZM6';
const SUBMISSION_LOGIN_URL = 'https://new.hnk.rocks/';
const USELESS_PHOS_URL = 'https://cdn.discordapp.com/emojis/676275233702805515.webp?quality=lossless';

const router = Router();

// Handlers

const redirectToHnKTitlePage = () => Response.redirect(HNK_TITLE_URL, 301);

const handleChapterNo = async (request: Request, env: Env): Promise<Response> => {
    if (request.params == undefined) return redirectToHnKTitlePage();
    const chapterParam = request.params.chapterNo;
    const parsed = parseFloat(chapterParam);
    if (Number.isNaN(parsed)) return redirectToHnKTitlePage();

    const fixed = parsed.toFixed(1);
    const chapter = ZERO_DECIMAL_PATTERN.test(fixed) ? fixed.slice(0, fixed.indexOf('.')) : fixed;
    const url = await env.ChapterToMDLink.get(chapter);
    return url === null ? redirectToHnKTitlePage() : Response.redirect(url, 307);
};

const handleLatestChapter = async (request: Request, env: Env): Promise<Response> => {
    const url = await env.ChapterToMDLink.get('latest');
    return url === null ? redirectToHnKTitlePage() : Response.redirect(url, 307);
};

const handleOtherWorks = async (request: Request, _env: Env): Promise<Response> => {
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

// shim the old access to Saegusa-Sensei to not break old links
router.get('/saegusa(-sensei)?', () => Response.redirect('https://hnk.rocks/other/saegusa', 301));

router.get('/(other|etc)/:work', handleOtherWorks);

router.get('/latest', handleLatestChapter);
router.get('/newest', handleLatestChapter);
router.get('/new', handleLatestChapter);

router.get('/c(hapters?)?/:chapterNo', handleChapterNo);

router.get('/minimalist', () => Response.redirect(HNK_MINIMALIST_URL, 307));
router.get('/colou?r(ed)?', () => Response.redirect(HNK_COLOURED_URL, 307));

router.all('*', redirectToHnKTitlePage);

interface Env {
    ChapterToMDLink: KVNamespace;
}

// noinspection JSUnusedGlobalSymbols
export default {
    async fetch(request: Request, env: Env, _ctx: ExecutionContext): Promise<Response> {
        return router.handle(request, env);
    }
};
