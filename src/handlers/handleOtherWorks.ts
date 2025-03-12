import type { IRequestStrict } from 'itty-router/types/IRequestStrict';
import {
    HNK_2013_ONA_PV,
    HNK_DRONE_SHOW_URL,
    HNK_FREEDOM_URL,
    HNK_LOREBOOK_MTL_URL,
    HNK_LOREBOOK_URL,
    HNK_ONESHOT_URL,
    HNK_PARTY_AT_THE_END_URL,
    HNK_PSEUDOMORPH_NOTES_URL,
    HNK_PSEUDOMORPH_URL,
    HNK_STATUE_URL,
    BLOG_LAST_CAPTURE,
    MOSHIMO_TOKYO_URL,
    MUSHI_TO_UTA_URL,
    OUJI_URL,
    SAEGUSA_URL,
    SAKUHINSHUU_URL,
    SOCIAL_CHOICE_URL,
    TSURITAMA_ILLUSTRATION_URL,
    VACANCES_URL
} from '../constants';
import { redirectToHnKTitlePage } from './handleChapters';
import { TEMPORARY_REDIRECT } from '../util/redirects';

export const handleOtherWorks = async (request: IRequestStrict): Promise<Response> => {
    if (request.params == undefined) return redirectToHnKTitlePage();
    const workParam = request.params.work;
    if (workParam === '') return redirectToHnKTitlePage();
    switch (workParam.toLowerCase()) {
        // HnK related
        case 'artbook':
        case 'pseudomorph':
        case 'pseudomorph-of-love':
            return Response.redirect(HNK_PSEUDOMORPH_URL, TEMPORARY_REDIRECT);
        case 'artbook-notes':
        case 'pseudomorph-notes':
        case 'pseudomorph-of-love-notes':
            return Response.redirect(HNK_PSEUDOMORPH_NOTES_URL, TEMPORARY_REDIRECT);
        case 'statue':
        case 'vol9-extra':
        case 'vol09-extra':
            return Response.redirect(HNK_STATUE_URL, TEMPORARY_REDIRECT);
        case 'freedom':
        case 'love-freedom':
        case 'love-freedom-hell':
        case 'vol10-extra':
            return Response.redirect(HNK_FREEDOM_URL, TEMPORARY_REDIRECT);
        case 'oneshot':
        case 'one-shot':
            return Response.redirect(HNK_ONESHOT_URL, TEMPORARY_REDIRECT);
        case 'lorebook-mtl':
        case 'hnk-lorebook-mtl':
        case 'vol11-extra-mtl':
            return Response.redirect(HNK_LOREBOOK_MTL_URL, TEMPORARY_REDIRECT);
        case 'lorebook':
        case 'hnk-lorebook':
        case 'vol11-extra':
            return Response.redirect(HNK_LOREBOOK_URL, TEMPORARY_REDIRECT);
        case 'party':
        case 'party-at-the-end':
        case 'vol12-extra':
            return Response.redirect(HNK_PARTY_AT_THE_END_URL, TEMPORARY_REDIRECT);
        case 'drones':
        case 'drone-show':
        case 'vol13-drone-show':
            return Response.redirect(HNK_DRONE_SHOW_URL, TEMPORARY_REDIRECT);
        case 'ona':
        case '2013-pv':
        case '2013-ona':
            return Response.redirect(HNK_2013_ONA_PV, TEMPORARY_REDIRECT);

        // Non-HnK works by Ichikawa Haruko
        case '25-ji-no-vacances':
        case '25-hour-vacation':
        case 'vacances':
            return Response.redirect(VACANCES_URL, TEMPORARY_REDIRECT);
        case 'anthology':
        case 'ichikawa-haruko-sakuhinshuu':
        case 'sakuhinshuu':
            return Response.redirect(SAKUHINSHUU_URL, TEMPORARY_REDIRECT);
        case 'moshimo':
        case 'moshimo-tokyo':
            return Response.redirect(MOSHIMO_TOKYO_URL, TEMPORARY_REDIRECT);
        case 'mushi':
        case 'mushi-to-uta':
            return Response.redirect(MUSHI_TO_UTA_URL, TEMPORARY_REDIRECT);
        case 'ouji':
        case 'ouji-no-himitsu':
            return Response.redirect(OUJI_URL, TEMPORARY_REDIRECT);
        case 'saegusa':
        case 'saegusa-sensei':
            return Response.redirect(SAEGUSA_URL, TEMPORARY_REDIRECT);
        case 'tsuritama':
        case 'tsuritama-illustration':
            return Response.redirect(TSURITAMA_ILLUSTRATION_URL, TEMPORARY_REDIRECT);
        case 'social-choice-illustration':
        case 'toyotaka-sakai-illustration':
            return Response.redirect(SOCIAL_CHOICE_URL, TEMPORARY_REDIRECT);
        case 'blog':
            return Response.redirect(BLOG_LAST_CAPTURE, TEMPORARY_REDIRECT);
        default:
            return redirectToHnKTitlePage();
    }
};
