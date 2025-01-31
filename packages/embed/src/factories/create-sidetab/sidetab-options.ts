import { ActionableOptions, BaseOptions, UrlOptions, BehavioralOptions } from '../../base'

export type SidetabOptions = BaseOptions &
  UrlOptions &
  ActionableOptions &
  BehavioralOptions & {
    /**
     * Specify the button text
     *
     * @type {string}
     */
    buttonText?: string
    /**
     * Specify the button background color
     *
     * @type {string}
     */
    buttonColor?: string
    /**
     * Specify the image url for the sidetab trigger button icon
     *
     * @type {string}
     */
    customIcon?: string
  }
