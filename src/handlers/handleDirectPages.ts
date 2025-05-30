import type { IRequestStrict } from 'itty-router/types/IRequestStrict';
import { redirectToHnKTitlePage } from './handleChapters';
import { generateDirectPageResponse } from '../util/direct_page_response';

export const handleDirectPageLink = async (request: IRequestStrict, env: Env): Promise<Response> => {
    if (request.params == undefined) return redirectToHnKTitlePage();
    const chapterParam = request.params.chapterNo;
    const chapterParsed = parseFloat(chapterParam);
    if (Number.isNaN(chapterParsed)) return redirectToHnKTitlePage();

    const pageParam = request.params.pageNo;
    const pageParsed = parseInt(pageParam);
    if (Number.isNaN(pageParsed)) return redirectToHnKTitlePage();

    const response = await generateDirectPageResponse(chapterParsed, pageParsed, env);
    if (response == null) return Response.redirect(`https://hnk.rocks/c/${chapterParsed}/p/${pageParsed}`);

    return new Response(response, { headers: { 'content-type': 'text/html;charset=UTF-8' } });
};

export const handleLatestChapterDirectPageLink = async (request: IRequestStrict, env: Env): Promise<Response> => {
    if (request.params == undefined) return redirectToHnKTitlePage();
    const chapterNo = await env.ExtraPages.get('LAST_CHAPTER_NUMBER');
    const chapterParsed = parseFloat(`${chapterNo}`);
    if (Number.isNaN(chapterParsed)) return Response.redirect('https://hnk.rocks/latest');

    const pageParam = request.params.pageNo;
    const pageParsed = parseInt(pageParam);
    if (Number.isNaN(pageParsed)) return redirectToHnKTitlePage();

    const response = await generateDirectPageResponse(chapterParsed, pageParsed, env);
    if (response == null) return Response.redirect(`https://hnk.rocks/latest/p/${pageParsed}`);

    return new Response(response, { headers: { 'content-type': 'text/html;charset=UTF-8' } });
};
