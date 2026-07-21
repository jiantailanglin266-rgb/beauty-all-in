// 動画ファイルの import を許可（webpack asset/resource で URL 文字列になる）
declare module '*.mp4' {
  const src: string;
  export default src;
}
declare module '*.webm' {
  const src: string;
  export default src;
}
