export interface Env {
    ChapterToMDLink: KVNamespace;
    ChapterToUploader: KVNamespace;
    ExtraPages: KVNamespace;
    ChapterPages: R2Bucket;
}

export type Shim = {
    OLD: string;
    NEW: string;
};
