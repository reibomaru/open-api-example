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
// May contain unused imports in some cases
// @ts-ignore
import type { User } from './user';

/**
 * 
 * @export
 * @interface Todo
 */
export interface Todo {
    /**
     * 
     * @type {string}
     * @memberof Todo
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof Todo
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof Todo
     */
    'description'?: string;
    /**
     * 
     * @type {Status}
     * @memberof Todo
     */
    'status'?: Status;
    /**
     * 
     * @type {string}
     * @memberof Todo
     */
    'due'?: string;
    /**
     * 
     * @type {User}
     * @memberof Todo
     */
    'created_by'?: User;
    /**
     * 
     * @type {string}
     * @memberof Todo
     */
    'created_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof Todo
     */
    'updated_by'?: string;
}


