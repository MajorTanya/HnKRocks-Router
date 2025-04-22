import type { VolumeCoverEntry } from './types';

export const DEFAULT_JSON_HEADERS = { headers: { 'content-type': 'application/json;charset=UTF-8' } } as const;
export const ZERO_DECIMAL_PATTERN = /\d+\.0/;

// OEmbed
export const OEMBED_BASE_RESPONSE = { type: 'link', version: '1.0' } as const;
export const OEMBED_PAGE_DIRECT = 'page_direct' as const;
export const OEMBED_VOL_COVER = 'vol_cover_embed' as const;

// Houseki no Kuni
export const HNK_COLOURED_URL = 'https://mangadex.org/title/95264f28-3ccf-4dea-ad15-5323e4766b4c/houseki-no-kuni' as const;
export const HNK_LOREBOOK_MTL_URL = 'https://imgur.com/a/c7Aqh4a' as const;
export const HNK_LOREBOOK_URL = 'https://docs.google.com/document/d/1ah3Av1OtEbYyhcfLhukj9HmpoJ6gJ829zuFkyObRRpk/view' as const;
export const HNK_MINIMALIST_URL = 'https://mangadex.org/title/37bf7574-641e-4665-b992-f2ba8d4652b8/houseki-no-kuni' as const;
export const HNK_PARTY_AT_THE_END_URL = 'https://github.com/coconutcastle/HNK_party_at_the_end/blob/master/readfile.md' as const;
export const HNK_PSEUDOMORPH_URL = 'https://houseki-no-kuni.fandom.com/wiki/Pseudomorph_of_Love' as const;
export const HNK_TITLE_URL = 'https://mangadex.org/title/cade38b7-64c4-4a29-8e3c-8c283291d6c6/houseki-no-kuni' as const;
export const HNK_FREEDOM_URL = 'https://houseki-no-kuni.fandom.com/wiki/Freedom' as const;
export const HNK_ONESHOT_URL = 'https://houseki-no-kuni.fandom.com/wiki/Freedom#Houseki_No_Kuni_One_Shot' as const;
export const HNK_STATUE_URL = 'https://pastebin.com/mfhZPsUa' as const;
export const HNK_DRONE_SHOW_URL = 'https://www.youtube.com/watch?v=EFIMy02Nhoc' as const;
export const HNK_2013_ONA_PV = 'https://www.youtube.com/watch?v=3pzIQ54cwiA' as const;
export const HNK_PSEUDOMORPH_NOTES_URL = 'https://imgur.com/a/ONKBcGH' as const;

// Other Ichikawa works
export const MOSHIMO_TOKYO_URL = 'https://mangadex.org/title/fa91e632-8556-446e-8227-b6003acab958/moshimo-tokyo' as const;
export const MUSHI_TO_UTA_URL = 'https://mangadex.org/chapter/ee5d90b2-c9d6-4461-a972-24ef0e7ce9af' as const;
export const OUJI_URL = 'https://mangadex.org/title/07c1eeab-3185-4932-a975-132f2115d6bd/ouji-no-himitsu' as const;
export const SAEGUSA_URL = 'https://mangadex.org/title/4de59a89-a6a8-4059-9ab3-501f7c260223/saegusa-sensei' as const;
export const SAKUHINSHUU_URL = 'https://mangadex.org/title/e89c85d5-3131-4fd8-bf4f-3985ef63be83/ichikawa-haruko-sakuhinshuu' as const;
export const TSURITAMA_ILLUSTRATION_URL = 'https://dijehtranslations.wordpress.com/2018/08/29/ichikawa-haruko-special-illustration-for-tsuritama-anime-debut/' as const;
export const VACANCES_URL = 'https://mangadex.org/chapter/39331c1e-4118-450f-b61c-3112e57ae936' as const;
export const SOCIAL_CHOICE_URL = 'https://www.nippyo.co.jp/shop/book/9483.html' as const;

// Blog captures from the Web Archive
export const BLOG_HNK_REVIVED = 'https://web.archive.org/web/20130325132059/http://ptpt.x0.to/pp/' as const;
export const BLOG_PV_POSTED = 'https://web.archive.org/web/20130724074319/http://ptpt.x0.to:80/pp' as const;
export const BLOG_VOL2_COVER_POSTED = 'https://web.archive.org/web/20140127022238/http://ptpt.x0.to:80/pp' as const;
export const BLOG_VOL4_PROMO_POSTED = 'https://web.archive.org/web/20150615095740/http://ptpt.x0.to:80/pp' as const;
export const BLOG_VOL6_PROMO_POSTED = 'https://web.archive.org/web/20170425211903/http://ptpt.x0.to/pp/' as const;
export const BLOG_LAST_CAPTURE = 'https://web.archive.org/web/20221204144528/http://ptpt.x0.to/pp/' as const;

// Extras
export const ABOUT_URL = 'https://majortanya.github.io/HnKRocks-Router/' as const;
export const EXTRA_PAGES_HOSTNAME = 'hnkrocks-extra-pages-9i8.pages.dev' as const;
export const FEEDBACK_URL = 'https://forms.gle/QRGGriFizperPnZM6' as const;
export const SUBMISSION_LOGIN_URL = 'https://new.hnk.rocks/' as const;
export const USELESS_PHOS_URL = 'https://cdn.discordapp.com/emojis/676275233702805515.webp?quality=lossless' as const;

// Fandub
export const FANDUB_EP_01 = 'https://www.youtube.com/watch?v=qL2tXjJ5AMg' as const;
export const FANDUB_EP_02 = 'https://www.youtube.com/watch?v=9DIzmyE8EaM' as const;
export const FANDUB_PLAYLIST = 'https://www.youtube.com/playlist?list=PLqmueHYBwQkV_1KkdMlllDjhuUNqiaHGv' as const;

// Short stories fandom
export const SHORT_STORY_FANDUB_ON_PANDORA = 'https://www.youtube.com/watch?v=VQ7q5qyHPDw' as const;
export const SHORT_STORY_FANDUB_PLAYLIST = 'https://www.youtube.com/playlist?list=PL2ZkRB7CWewhEwcXZAY7ySBIkxLWnl2J5' as const;

// Interviews
export const CURRENT_OBSESSION_2015_INTERVIEW = 'https://www.current-obsession.com/the-kingdom-of-gems/' as const;
export const ENTERTAINMENT_WEEK_2016_INTERVIEW = 'https://seizonsenryaku1.wordpress.com/2018/01/28/ichikawa-haruko-interview-on-houseki-no-kuni-translation/' as const;
export const EUREKA_2010_INTERVIEW = 'https://dijehtranslations.wordpress.com/2021/10/10/ichikawa-haruko-interview-eureka-02-2010/' as const;
export const KONO_MANGA_2014_INTERVIEW_PT_1 = 'https://dijehtranslations.wordpress.com/2018/06/22/ichikawa-haruko-houseki-no-kuni-interview-2014/' as const;
export const KONO_MANGA_2014_INTERVIEW_PT_2 = 'https://dijehtranslations.wordpress.com/2018/07/18/ichikawa-haruko-2014-interview-part-2/' as const;

// Community works
export const WEIGHT_SPREADSHEET = 'https://docs.google.com/spreadsheets/d/1OjgXWMDYls9w_KV1r4CyoUCen_kpkpuYAKRoXHJVEbA/view' as const;
export const WEIGHT_TUMBLR = 'https://www.tumblr.com/rinboz/187133050585' as const;

// Covers
export const VOL_01_COVER = 'https://static.wikia.nocookie.net/houseki-no-kuni/images/4/43/Book_1.jpeg/revision/latest?cb=20210511140107' as const;
export const VOL_02_COVER = 'https://static.wikia.nocookie.net/houseki-no-kuni/images/a/ae/Book_2.jpeg/revision/latest?cb=20210511140447' as const;
export const VOL_03_COVER = 'https://static.wikia.nocookie.net/houseki-no-kuni/images/7/79/Book_3.jpeg/revision/latest?cb=20210511140636' as const;
export const VOL_04_COVER = 'https://static.wikia.nocookie.net/houseki-no-kuni/images/2/2e/Book_4.jpeg/revision/latest?cb=20210511141352' as const;
export const VOL_05_COVER = 'https://static.wikia.nocookie.net/houseki-no-kuni/images/f/fc/Book_5.jpeg/revision/latest?cb=20210511141559' as const;
export const VOL_06_COVER = 'https://static.wikia.nocookie.net/houseki-no-kuni/images/3/32/Book_6.jpg/revision/latest?cb=20210511142039' as const;
export const VOL_07_COVER = 'https://static.wikia.nocookie.net/houseki-no-kuni/images/6/65/Lapis_and_phos-0.jpg/revision/latest?cb=20171031004945' as const;
export const VOL_08_COVER = 'https://static.wikia.nocookie.net/houseki-no-kuni/images/6/60/Thumb_83523_book_small.jpg/revision/latest?cb=20171101120559' as const;
export const VOL_09_COVER = 'https://static.wikia.nocookie.net/houseki-no-kuni/images/5/5f/Book_9.jpg/revision/latest?cb=20210511142854' as const;
export const VOL_10_COVER = 'https://static.wikia.nocookie.net/houseki-no-kuni/images/3/31/Book_10.jpg/revision/latest?cb=20210511143031' as const;
export const VOL_11_COVER = 'https://static.wikia.nocookie.net/houseki-no-kuni/images/1/18/Book_11.jpg/revision/latest?cb=20210511143205' as const;
export const VOL_12_COVER = 'https://static.wikia.nocookie.net/houseki-no-kuni/images/e/e0/Yassvolume12.jpg/revision/latest?cb=20221122221402' as const;
export const VOL_13_COVER = 'https://static.wikia.nocookie.net/houseki-no-kuni/images/a/a1/Vol13CoverJP.jpeg/revision/latest?cb=20240921231216' as const;
export const COVER_MAP = {
    '1': {
        cover: VOL_01_COVER,
        wiki: 'https://houseki-no-kuni.fandom.com/wiki/Volume_1'
    } as const satisfies VolumeCoverEntry,
    '2': {
        cover: VOL_02_COVER,
        wiki: 'https://houseki-no-kuni.fandom.com/wiki/Volume_2'
    } as const satisfies VolumeCoverEntry,
    '3': {
        cover: VOL_03_COVER,
        wiki: 'https://houseki-no-kuni.fandom.com/wiki/Volume_3'
    } as const satisfies VolumeCoverEntry,
    '4': {
        cover: VOL_04_COVER,
        wiki: 'https://houseki-no-kuni.fandom.com/wiki/Volume_4'
    } as const satisfies VolumeCoverEntry,
    '5': {
        cover: VOL_05_COVER,
        wiki: 'https://houseki-no-kuni.fandom.com/wiki/Volume_5'
    } as const satisfies VolumeCoverEntry,
    '6': {
        cover: VOL_06_COVER,
        wiki: 'https://houseki-no-kuni.fandom.com/wiki/Volume_6'
    } as const satisfies VolumeCoverEntry,
    '7': {
        cover: VOL_07_COVER,
        wiki: 'https://houseki-no-kuni.fandom.com/wiki/Volume_7'
    } as const satisfies VolumeCoverEntry,
    '8': {
        cover: VOL_08_COVER,
        wiki: 'https://houseki-no-kuni.fandom.com/wiki/Volume_8'
    } as const satisfies VolumeCoverEntry,
    '9': {
        cover: VOL_09_COVER,
        wiki: 'https://houseki-no-kuni.fandom.com/wiki/Volume_9'
    } as const satisfies VolumeCoverEntry,
    '10': {
        cover: VOL_10_COVER,
        wiki: 'https://houseki-no-kuni.fandom.com/wiki/Volume_10'
    } as const satisfies VolumeCoverEntry,
    '11': {
        cover: VOL_11_COVER,
        wiki: 'https://houseki-no-kuni.fandom.com/wiki/Volume_11'
    } as const satisfies VolumeCoverEntry,
    '12': {
        cover: VOL_12_COVER,
        wiki: 'https://houseki-no-kuni.fandom.com/wiki/Volume_12'
    } as const satisfies VolumeCoverEntry,
    '13': {
        cover: VOL_13_COVER,
        wiki: 'https://houseki-no-kuni.fandom.com/wiki/Volume_13'
    } as const satisfies VolumeCoverEntry
} as const satisfies {
    [k: string]: VolumeCoverEntry
};
export type CoverMapType = Record<string, typeof COVER_MAP[(keyof typeof COVER_MAP)]>;
