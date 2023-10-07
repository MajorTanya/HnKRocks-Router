/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run start` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { Router } from 'itty-router/Router';
import {
    ABOUT_URL,
    FEEDBACK_URL,
    HNK_COLOURED_URL,
    HNK_MINIMALIST_URL,
    SUBMISSION_LOGIN_URL,
    USELESS_PHOS_URL
} from './constants';
import { handleChapterNo, handleLatestChapter, redirectToHnKTitlePage } from './handlers/handleChapters';
import { handleDirectPageLink, handleLatestChapterDirectPageLink } from './handlers/handleDirectPages';
import { handleExtraPages } from './handlers/handleExtraPages';
import { handleFandubEpisodeNo, redirectToFandubPlaylist } from './handlers/handleFandub';
import { handleOEmbed } from './handlers/handleOEmbed';
import { handleOtherWorks } from './handlers/handleOtherWorks';
import type { Env } from './types';

const router = Router();

// Route definitions

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

router.get('/oembed', handleOEmbed);

router.all('*', redirectToHnKTitlePage);

// noinspection JSUnusedGlobalSymbols
export default {
    async fetch(request: Request, env: Env, _ctx: ExecutionContext): Promise<Response> {
        return router.handle(request, env);
    }
};
