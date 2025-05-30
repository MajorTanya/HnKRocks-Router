export type Shim = {
    OLD: string;
    NEW: string;
};

export type VolumeCoverEntry = {
    cover: string;
    fullCover: string | null;
    wiki: string;
};

export type DirectPageVariant = 'minimalist' | 'coloured' | undefined;
