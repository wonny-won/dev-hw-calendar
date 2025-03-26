/** @format */
export type Typo = 'hero1' | 'hero2' | 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'subheading1' | 'subheading2' | 'subheading3' | 'body1' | 'body2' | 'link1' | 'link2' | 'caption' | 'label' | 'tiny1' | 'tiny2';
export type Sizes = keyof typeof size;
declare const size: {
    readonly xxs: "10px";
    readonly xs: "12px";
    readonly sm: "14px";
    readonly md: "16px";
    readonly lg: "18px";
    readonly xl: "20px";
    readonly '2xl': "24px";
    readonly '3xl': "32px";
    readonly '4xl': "48px";
    readonly '5xl': "64px";
};
export declare const font: {
    family: string;
    size: {
        readonly xxs: "10px";
        readonly xs: "12px";
        readonly sm: "14px";
        readonly md: "16px";
        readonly lg: "18px";
        readonly xl: "20px";
        readonly '2xl': "24px";
        readonly '3xl': "32px";
        readonly '4xl': "48px";
        readonly '5xl': "64px";
    };
    lineHeight: {
        readonly xxs: "14px";
        readonly xs: "18px";
        readonly sm: "22px";
        readonly md: "24px";
        readonly lg: "28px";
        readonly xl: "30px";
        readonly '2xl': "36px";
        readonly '3xl': "48px";
        readonly '4xl': "64px";
        readonly '5xl': "80px";
    };
    weight: {
        readonly regular: 400;
        readonly semibold: 600;
        readonly bold: 700;
        readonly extrabold: 800;
    };
};
export declare const typo: Record<Typo, string>;
export {};
//# sourceMappingURL=typo.d.ts.map