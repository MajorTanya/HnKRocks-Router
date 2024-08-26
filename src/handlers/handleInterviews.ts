import type { IRequestStrict } from 'itty-router/types/IRequestStrict';
import { redirectToHnKTitlePage } from './handleChapters';
import {
    CURRENT_OBSESSION_2015_INTERVIEW,
    ENTERTAINMENT_WEEK_2016_INTERVIEW,
    EUREKA_2010_INTERVIEW,
    KONO_MANGA_2014_INTERVIEW_PT_1,
    KONO_MANGA_2014_INTERVIEW_PT_2
} from '../constants';
import { TEMPORARY_REDIRECT } from '../util/redirects';

export const handleInterviews = async (request: IRequestStrict): Promise<Response> => {
    if (request.params == undefined) return redirectToHnKTitlePage();
    const langParam = request.params.lang;
    if (langParam === '') return redirectToHnKTitlePage();
    const interviewParam = request.params.interviewId;
    if (interviewParam === '') return redirectToHnKTitlePage();
    switch (langParam.toLowerCase()) {
        case 'en':
            switch (interviewParam.toLowerCase()) {
                case 'current-obsession':
                case 'current-obsession-2015':
                case 'co-2015':
                    return Response.redirect(CURRENT_OBSESSION_2015_INTERVIEW, TEMPORARY_REDIRECT);
                case 'entertainment-week':
                case 'entertainment-week-2016':
                case 'entertainment-2016':
                    return Response.redirect(ENTERTAINMENT_WEEK_2016_INTERVIEW, TEMPORARY_REDIRECT);
                case 'eureka-2010':
                case 'eureka':
                    return Response.redirect(EUREKA_2010_INTERVIEW, TEMPORARY_REDIRECT);
                case 'kono-manga-2014-pt-1':
                case '2014-pt-1':
                    return Response.redirect(KONO_MANGA_2014_INTERVIEW_PT_1, TEMPORARY_REDIRECT);
                case 'kono-manga-2014-pt-2':
                case '2014-pt-2':
                    return Response.redirect(KONO_MANGA_2014_INTERVIEW_PT_2, TEMPORARY_REDIRECT);
                default:
                    return redirectToHnKTitlePage();
            }
        default:
            return redirectToHnKTitlePage();
    }
};
