declare module 'esc-file-replace-contents' {
  export function fileReplaceContents(
    path          : string,
    contents      : string,
    existsLogF?   : (message: string) => void,
    createLogF?   : (message: string) => void,
    unchangedLogF?: (message: string) => void
  ): boolean;

  export default fileReplaceContents;
}
