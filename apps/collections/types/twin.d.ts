import 'twin.macro';

declare module 'twin.macro' {}

declare module 'react' {
  // The tw and css prop
  interface DOMAttributes<T> {
    tw?: string;
    css?: CSSInterpolation;
  }
}
