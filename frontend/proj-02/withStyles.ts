import {
  withStyles as _withStyles,
  withStylesPropTypes as _withStylesPropTypes,
  WithStylesProps as WithStylesPropsType,
  WithStylesOptions,
  Styles,
} from "react-with-styles";

export type WithStylesProps<T = Theme> = WithStylesPropsType<T>;

/** Airbnb-specific augmentation of React types */
export interface ComponentClass<P = {}, S = any> extends React.ComponentClass<P, S> {
  /** Static GQL fragments. */
  fragments?: any;
}

type ElementProps<C> = C extends React.ComponentType<any>
  ? C extends { new (props: infer P, context?: any): any }
    ? P
    : C extends (props: infer P & { children?: React.ReactNode }, context?: any) => any
    ? P
    : any
  : any;
type ElementConfig<C> = JSX.LibraryManagedAttributes<C, ElementProps<C>>;
type Nullable<T> = T | null | undefined;
type Theme = {
  /*...*/
};

export type WithStylesPropsKeys = keyof WithStylesProps<any>;

export type WithStylesComponentPropTypes<C> = Omit<ElementConfig<C>, WithStylesPropsKeys>;

export type WithStylesComponentClass<C> = ComponentClass<WithStylesComponentPropTypes<C>>;

export interface WithStylesFn {
  <C extends React.ComponentType<any>>(component: C): WithStylesComponentClass<C>;
}

export interface WithStyles {
  <T = Theme>(styleFn?: Nullable<(theme: T) => Styles>, options?: WithStylesOptions): WithStylesFn;
}

export const withStyles = _withStyles as WithStyles;
