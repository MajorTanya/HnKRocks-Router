import type { IRequestStrict } from 'itty-router/types/IRequestStrict';
import {
    CURRENT_OBSESSION_INTERVIEW_URL,
    HNK_FREEDOM_URL,
    HNK_LOREBOOK_URL,
    HNK_ONESHOT_URL,
    HNK_PARTY_AT_THE_END_URL,
    HNK_PSEUDOMORPH_URL,
    MOSHIMO_TOKYO_URL,
    MUSHI_TO_UTA_URL,
    OUJI_URL,
    SAEGUSA_URL,
    SAKUHINSHUU_URL,
    VACANCES_URL
} from '../constants';
import { redirectToHnKTitlePage } from './handleChapters';

export const handleOtherWorks = async (request: IRequestStrict): Promise<Response> => {
    if (request.params == undefined) return redirectToHnKTitlePage();
    const workParam = request.params.work;
    if (workParam === '') return redirectToHnKTitlePage();
    switch (workParam.toLowerCase()) {
        // HnK related
        case 'artbook':
        case 'pseudomorph':
        case 'pseudomorph-of-love':
            return Response.redirect(HNK_PSEUDOMORPH_URL, 307);
        case 'freedom':
        case 'love-freedom':
        case 'love-freedom-hell':
        case 'vol10-extra':
            return Response.redirect(HNK_FREEDOM_URL, 307);
        case 'oneshot':
        case 'one-shot':
            return Response.redirect(HNK_ONESHOT_URL, 307);
        case 'lorebook':
        case 'hnk-lorebook':
        case 'vol11-extra':
            return Response.redirect(HNK_LOREBOOK_URL, 307);
        case 'party':
        case 'party-at-the-end':
        case 'vol12-extra':
            return Response.redirect(HNK_PARTY_AT_THE_END_URL, 307);
        case 'current-obsession':
        case 'current-obsession-interview':
        case 'co-interview':
            return Response.redirect(CURRENT_OBSESSION_INTERVIEW_URL, 307);

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
