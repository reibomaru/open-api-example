/* tslint:disable */
/* eslint-disable */
/**
 * todo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Status } from './status';

/**
 * 
 * @export
 * @interface TodoListItem
 */
export interface TodoListItem {
    /**
     * 
     * @type {string}
     * @memberof TodoListItem
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof TodoListItem
     */
    'title'?: string;
    /**
     * 
     * @type {Status}
     * @memberof TodoListItem
     */
    'status'?: Status;
    /**
     * 
     * @type {string}
     * @memberof TodoListItem
     */
    'updated_at'?: string;
}



