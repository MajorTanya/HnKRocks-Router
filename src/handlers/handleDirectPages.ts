import type { IRequestStrict } from 'itty-router/Router';
import { OEMBED_PAGE_DIRECT } from '../constants';
import { redirectToHnKTitlePage } from './handleChapters';
import type { Env } from '../types';

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

const generateDirectPageResponse = async (chapterNo: number, pageNo: number, env: Env): Promise<string | null> => {
    // handle decimal points padding, e.g. 21.5 -> 021.5, as otherwise, a 3 padding would change nothing
    // decimal point numbers are stored with zero padding in the beginning for consistency, but the string is longer
    const correctedChapterNo = parseInt(`${chapterNo}`);
    const diff = chapterNo - correctedChapterNo;
    const chapterPadded = `${correctedChapterNo}`.padStart(3, '0') + (diff === 0 ? '' : '.' + `${diff}`.split('.')[1]);
    const pagePadded = `${pageNo}`.padStart(3, '0');

    const pageKey = `${chapterPadded}/p${pagePadded}`;
    const r2Page = (await env.ChapterPages.get(`${pageKey}.png`)) || (await env.ChapterPages.get(`${pageKey}.jpg`));
    const key = r2Page != null ? r2Page.key : null;

    if (key == null) return null;

    const uploader = (await env.ChapterToUploader.get(`${chapterNo}`)) || 'Unknown';

    const pageUrl = `https://hnk.rocks/c/${chapterNo}/p/${pageNo}` as const;
    return `<!DOCTYPE html>
    <html lang='en'>
    <head>
        <title>Chapter ${chapterNo}, Page ${pageNo} of Houseki no Kuni (by ${uploader} on MangaDex)</title>
        <meta name='twitter:card' content='summary_large_image'>
        <meta name='twitter:title' content='Houseki no Kuni - Chapter ${chapterNo}, Page ${pageNo}'>
        <meta name='twitter:description' content='Houseki no Kuni - Chapter ${chapterNo}, Page ${pageNo}\n(by ${uploader} on [MangaDex](https://mangadex.org))'>
        <meta name='twitter:image' content='https://pages.hnk.rocks/${key}'>
        <meta name='twitter:url' content='${pageUrl}'>
        <meta name='twitter:site' content='HnK.Rocks'>
        <link rel='alternate' type='application/json+oembed' href='https://hnk.rocks/oembed?embed_type=${OEMBED_PAGE_DIRECT}&format=json'>
        <meta http-equiv='Refresh' content='0; URL=${pageUrl}'>
    </head>`;
};
