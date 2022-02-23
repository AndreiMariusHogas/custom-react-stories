interface IVideoPlayer {
    autoPlay?: boolean;
    playsInline?: boolean;
    'webkit-playsinline'?: boolean;
    controls?: boolean;
    src?: string;
    onLoad?: () => void;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Image: import("styled-components").StyledComponent<"img", any, {}, never>;
export declare const Video: import("styled-components").StyledComponent<"video", any, IVideoPlayer, never>;
export declare const Component: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
//# sourceMappingURL=Story.styled.d.ts.map