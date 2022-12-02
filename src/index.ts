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

const FEEDBACK_URL = 'https://forms.gle/QRGGriFizperPnZM6';
const HOUSEKI_TITLE_URL = 'https://mangadex.org/title/cade38b7-64c4-4a29-8e3c-8c283291d6c6/houseki-no-kuni';
const SAEGUSA_URL = 'https://mangadex.org/title/4de59a89-a6a8-4059-9ab3-501f7c260223/saegusa-sensei';
const SUBMISSION_LOGIN_URL = 'https://new.hnk.rocks/login.php';
const USELESS_PHOS_URL = 'https://cdn.discordapp.com/emojis/676275233702805515.webp?quality=lossless';
const ZERO_DECIMAL_PATTERN = /\d+\.0/;

const router = Router();
const redirectToSaegusa = () => Response.redirect(SAEGUSA_URL, 307);
const redirectToTitlePage = () => Response.redirect(HOUSEKI_TITLE_URL, 301);

async function handleChapterNo(request: Request, env: Env): Promise<Response> {
    if (request.params == undefined) return redirectToTitlePage();
    const chapterParam = request.params.chapterNo;
    const parsed = parseFloat(chapterParam);
    if (Number.isNaN(parsed)) return redirectToTitlePage();

    const fixed = parsed.toFixed(1);
    const chapter = ZERO_DECIMAL_PATTERN.test(fixed)
        ? fixed.slice(0, fixed.indexOf('.'))
        : fixed;
    const url = await env.ChapterToMDLink.get(chapter);
    return url === null ? redirectToTitlePage() : Response.redirect(url, 307);
}

const handleLatestChapter = async (
    request: Request,
    env: Env
): Promise<Response> => {
    const url = await env.ChapterToMDLink.get('latest');
    return url === null ? redirectToTitlePage() : Response.redirect(url, 307);
};

router.get('/submit', () => Response.redirect(SUBMISSION_LOGIN_URL, 308));
router.get('/uselessphos', () => Response.redirect(USELESS_PHOS_URL, 308));
router.get('/feedback', () => Response.redirect(FEEDBACK_URL, 307));

router.get('/saegusa', redirectToSaegusa);
router.get('/saegusa-sensei', redirectToSaegusa);

router.get('/latest', handleLatestChapter);
router.get('/newest', handleLatestChapter);
router.get('/new', handleLatestChapter);

router.get('/c/:chapterNo', handleChapterNo);
router.get('/chapter/:chapterNo', handleChapterNo);
router.get('/chapters/:chapterNo', handleChapterNo);

// TODO: migrate new.hnk.rocks to using Cloudflare KV

router.all('*', redirectToTitlePage);

interface Env {
    ChapterToMDLink: KVNamespace;
}

// noinspection JSUnusedGlobalSymbols
export default {
    async fetch(
        request: Request,
        env: Env,
        _ctx: ExecutionContext
    ): Promise<Response> {
        return router.handle(request, env);
    }
};
