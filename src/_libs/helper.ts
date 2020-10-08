import { isEqual as _isEqual, isObject as _isObject, transform as _transform } from 'lodash';
import { not } from 'ramda';

export function _objectDiffer(modified: any, original: any) {
   function changes(modified: any, original: any) {
      return _transform(modified, function (result: any, value: any, key: any) {
         if (not(_isEqual(value, original[key]))) {
            result[key] =
               _isObject(value) && _isObject(original[key]) ? changes(value, original[key]) : value;
         }
      });
   }
   return changes(modified, original);
}
