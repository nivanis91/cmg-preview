import filter_data from './FILTER_DATA.txt'
import {evaluateLogFile} from 'cmg-eval-log';

var res = evaluateLogFile(filter_data);

document.write(JSON.stringify(res));
