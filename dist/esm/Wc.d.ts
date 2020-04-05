import React, { Component } from 'react';
export declare type WcProps = {
    [x: string]: any;
};
export declare type WcTypeProps = WcProps & {
    type: string | Function;
};
/**
 * React Web Component wrapper Component
 *
 * @export
 * @class Wc
 * @extends {Component<WcTypeProps>}
 */
export declare class Wc extends Component<WcTypeProps> {
    /**
     * Gets the web component element reference
     *
     * @readonly
     * @memberof Wc
     */
    get element(): HTMLElement;
    private _element;
    /**
     * Gets the web component tag name from the 'type' prop
     *
     * @protected
     * @returns
     * @memberof Wc
     */
    protected getTag(): any;
    /**
     * Renders the web component
     *
     * @returns
     * @memberof Wc
     */
    render(): React.DetailedReactHTMLElement<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    /**
     * Sets the web component reference and syncs the props
     *
     * @protected
     * @param {HTMLElement} element
     * @memberof Wc
     */
    protected setRef(element: HTMLElement): void;
    /**
     * Removes all event listeners from web component element
     *
     * @protected
     * @returns
     * @memberof Wc
     */
    protected cleanUp(): void;
    /**
     * Updates props on web component
     *
     * @param {*} prevProps
     * @memberof Wc
     */
    componentDidUpdate(prevProps: any): void;
    /**
     * Syncs all React component props to web component
     *
     * @protected
     * @param {*} props
     * @memberof Wc
     */
    protected syncProps(props: any): void;
    /**
     * Returns true if prop should be treated as event
     *
     * @protected
     * @param {string} prop
     * @param {*} value
     * @returns
     * @memberof Wc
     */
    protected isEventProp(prop: string, value: any): boolean;
    /**
     * Adds event listener on web component
     *
     * @protected
     * @param {string} propName
     * @param {EventListenerOrEventListenerObject} handler
     * @memberof Wc
     */
    protected addEventListener(propName: string, handler: EventListenerOrEventListenerObject): void;
    /**
     * Removes event listener from web component
     *
     * @protected
     * @param {string} propName
     * @param {EventListenerOrEventListenerObject} handler
     * @memberof Wc
     */
    protected removeEventListener(propName: string, handler: EventListenerOrEventListenerObject): void;
}
/**
 * Creates a new React Functional Component that wraps the
 * web component with the specified tag name
 *
 * @param {string | Function} tag
 * @returns React Functional Component
 */
export declare const wrapWc: (tag: TimerHandler) => (props: WcProps) => React.CElement<WcTypeProps, Wc>;
