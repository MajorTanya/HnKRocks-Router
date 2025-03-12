import type { IRequestStrict } from 'itty-router/types/IRequestStrict';
import { redirectToHnKTitlePage } from './handleChapters';
import {
    BLOG_HNK_REVIVED,
    BLOG_PV_POSTED,
    BLOG_VOL2_COVER_POSTED,
    BLOG_VOL4_PROMO_POSTED,
    BLOG_VOL6_PROMO_POSTED
} from '../constants';
import { TEMPORARY_REDIRECT } from '../util/redirects';

export const handleBlogCaptures = async (request: IRequestStrict): Promise<Response> => {
    console.log(request.params);
    if (request.params == undefined) return redirectToHnKTitlePage();
    const captureParam = request.params.blogCapture;
    if (captureParam === '') return redirectToHnKTitlePage();
    switch (captureParam.toLowerCase()) {
        // HnK related
        case 'hnk-revived':
        case 'hnk-announcement':
            return Response.redirect(BLOG_HNK_REVIVED, TEMPORARY_REDIRECT);
        case 'hnk-pv-posted':
            return Response.redirect(BLOG_PV_POSTED, TEMPORARY_REDIRECT);
        case 'hnk-vol2-posted':
            return Response.redirect(BLOG_VOL2_COVER_POSTED, TEMPORARY_REDIRECT);
        case 'hnk-vol4-promo-posted':
            return Response.redirect(BLOG_VOL4_PROMO_POSTED, TEMPORARY_REDIRECT);
        case 'hnk-vol6-promo-posted':
            return Response.redirect(BLOG_VOL6_PROMO_POSTED, TEMPORARY_REDIRECT);
        default:
            return redirectToHnKTitlePage();
    }
};
