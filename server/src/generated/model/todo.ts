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
import { Status } from './status';
import { User } from './user';


export interface Todo { 
    id?: string;
    title?: string;
    description?: string;
    status?: Status;
    due?: string;
    created_by?: User;
    created_at?: string;
    updated_by?: string;
}
export namespace Todo {
}


