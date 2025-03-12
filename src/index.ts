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
import { ABOUT_URL, FEEDBACK_URL, HNK_COLOURED_URL, HNK_MINIMALIST_URL, USELESS_PHOS_URL } from './constants';
import { handleChapterNo, handleLatestChapter, redirectToHnKTitlePage } from './handlers/handleChapters';
import { handleDirectPageLink, handleLatestChapterDirectPageLink } from './handlers/handleDirectPages';
import { handleExtraPages } from './handlers/handleExtraPages';
import { handleFandubEpisodeNo, redirectToFandubPlaylist } from './handlers/handleFandub';
import { handleOEmbed } from './handlers/handleOEmbed';
import { handleOtherWorks } from './handlers/handleOtherWorks';
import { handleShortStoriesFandub, redirectToShortStoryFandubPlaylist } from './handlers/handleShortStoriesFandub';
import { MOVED_PERMANENTLY, PERMANENT_REDIRECT, TEMPORARY_REDIRECT } from './util/redirects';
import { SHIMS } from './util/shims';
import { handleInterviews } from './handlers/handleInterviews';
import { handleCommunityWorks } from './handlers/handleCommunityWorks';

const router = Router();

// Route definitions
router.get('/uselessphos', () => Response.redirect(USELESS_PHOS_URL, PERMANENT_REDIRECT));
router.get('/feedback', () => Response.redirect(FEEDBACK_URL, TEMPORARY_REDIRECT));
router.get('/about', () => Response.redirect(ABOUT_URL, TEMPORARY_REDIRECT));

// shim deprecated links
router.get(SHIMS.CO_INTERVIEW.OLD, () => Response.redirect(SHIMS.CO_INTERVIEW.NEW, PERMANENT_REDIRECT));
router.get(SHIMS.LOGIN.OLD, () => Response.redirect(SHIMS.LOGIN.NEW, PERMANENT_REDIRECT));
router.get(SHIMS.SAEGUSA.OLD, () => Response.redirect(SHIMS.SAEGUSA.NEW, MOVED_PERMANENTLY));

router.get('/(other|etc)/:work', handleOtherWorks);

router.get('/(latest|new(est)?)(/p(ages?)?/:pageNo)?', handleLatestChapter);
router.get('/(latest|new(est)?)/p(ages?)?/:pageNo/i', handleLatestChapterDirectPageLink);

router.get('/c(hapters?)?/:chapterNo(/p(ages?)?/:pageNo)?', handleChapterNo);
router.get('/c(hapters?)?/:chapterNo/p(ages?)?/:pageNo/i', handleDirectPageLink);

router.get('/minimalist', () => Response.redirect(HNK_MINIMALIST_URL, TEMPORARY_REDIRECT));
router.get('/colou?r(ed)?', () => Response.redirect(HNK_COLOURED_URL, TEMPORARY_REDIRECT));

router.get('/next', handleExtraPages);
router.get('/since', handleExtraPages);
router.get('/_app/*', handleExtraPages);

router.get('/fandub', redirectToFandubPlaylist);
router.get('/fandub/playlist', redirectToFandubPlaylist);
router.get('/fandub(/e(pisodes?)?)?/:episodeNo', handleFandubEpisodeNo);

router.get('/stories-fandub', redirectToShortStoryFandubPlaylist);
router.get('/stories-fandub/playlist', redirectToShortStoryFandubPlaylist);
router.get('/stories-fandub/:work', handleShortStoriesFandub);

router.get('/interviews?/:lang/:interviewId', handleInterviews);

router.get('/community/:communityWork', handleCommunityWorks);

router.get('/oembed', handleOEmbed);

router.all('*', redirectToHnKTitlePage);

// noinspection JSUnusedGlobalSymbols
export default { ...router };
