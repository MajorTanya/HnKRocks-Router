import type { IRequestStrict } from 'itty-router/types/IRequestStrict';
import { HNK_TITLE_URL, ZERO_DECIMAL_PATTERN } from '../constants';
import { MOVED_PERMANENTLY, TEMPORARY_REDIRECT } from '../util/redirects';

export const redirectToHnKTitlePage = () => Response.redirect(HNK_TITLE_URL, MOVED_PERMANENTLY);

export const handleChapterNo = async (request: IRequestStrict, env: Env): Promise<Response> => {
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

    return url === null ? redirectToHnKTitlePage() : Response.redirect(url, TEMPORARY_REDIRECT);
};
export const handleLatestChapter = async (request: IRequestStrict, env: Env): Promise<Response> => {
    let url = await env.ChapterToMDLink.get('latest');
    if (request.params != undefined && 'pageNo' in request.params) {
        const pageParam = request.params.pageNo;
        const pageParsed = parseInt(pageParam);
        url = Number.isNaN(pageParsed) || url === null ? url : `${url}/${pageParsed}`;
    }
    return url === null ? redirectToHnKTitlePage() : Response.redirect(url, TEMPORARY_REDIRECT);
};
