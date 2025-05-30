import type { IRequestStrict } from 'itty-router/types/IRequestStrict';
import { redirectToHnKTitlePage } from './handleChapters';
import { generateDirectPageResponse } from '../util/direct_page_response';
import { HNK_COLOURED_URL, HNK_MINIMALIST_URL } from '../constants';
import { TEMPORARY_REDIRECT } from '../util/redirects';
import type { DirectPageVariant } from '../types';

export const handleColourDirectPageLink = async (request: IRequestStrict, env: Env): Promise<Response> => {
    // explicitly NOT regexp!
    // due to itty-router router attribute storage works, these are strings (even though they work like regexp in itty)
    const isMinimalist = request.route.startsWith('/minimalist/');
    const isColoured = request.route.startsWith('/colou?r(ed)?/');

    let failureRedirect;
    let routeVariant: DirectPageVariant;
    if (isMinimalist && !isColoured) {
        failureRedirect = () => Response.redirect(HNK_MINIMALIST_URL, TEMPORARY_REDIRECT);
        routeVariant = 'minimalist';
    } else if (!isMinimalist && isColoured) {
        failureRedirect = () => Response.redirect(HNK_COLOURED_URL, TEMPORARY_REDIRECT);
        routeVariant = 'coloured';
    } else return redirectToHnKTitlePage();

    if (request.params == undefined) return failureRedirect();
    const chapterParam = request.params.chapterNo;
    const chapterParsed = parseFloat(chapterParam);
    if (Number.isNaN(chapterParsed)) return failureRedirect();

    const pageParam = request.params.pageNo;
    const pageParsed = parseInt(pageParam);
    if (Number.isNaN(pageParsed)) return failureRedirect();

    const response = await generateDirectPageResponse(chapterParsed, pageParsed, env, routeVariant);
    if (response == null) return failureRedirect();

    return new Response(response, { headers: { 'content-type': 'text/html;charset=UTF-8' } });
};
