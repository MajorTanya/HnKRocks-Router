import type { IRequestStrict } from 'itty-router/types/IRequestStrict';
import { redirectToHnKTitlePage } from './handleChapters';
import { WEIGHT_SPREADSHEET, WEIGHT_TUMBLR } from '../constants';
import { TEMPORARY_REDIRECT } from '../util/redirects';

export const handleCommunityWorks = async (request: IRequestStrict): Promise<Response> => {
    if (request.params == undefined) return redirectToHnKTitlePage();
    const communityWorkParam = request.params.communityWork;
    if (communityWorkParam === '') return redirectToHnKTitlePage();
    switch (communityWorkParam.toLowerCase()) {
        case 'weights':
        case 'weights-spreadsheet':
            return Response.redirect(WEIGHT_SPREADSHEET, TEMPORARY_REDIRECT);
        case 'weights-tumblr':
            return Response.redirect(WEIGHT_TUMBLR, TEMPORARY_REDIRECT);
        default:
            return redirectToHnKTitlePage();
    }
};
