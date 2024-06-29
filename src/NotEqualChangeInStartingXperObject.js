import _ from "lodash";
import equal from 'fast-deep-equal';
import { deepEqual } from 'fast-equals';
import { generateDifftDataAtStartingX } from "./App";

const orders = generateDifftDataAtStartingX(5000, 5);
const orders1 = generateDifftDataAtStartingX(5000, 5);

function lodashEquals() {
    const startTime = performance.now();

    // Call your function
    let result = _.isEqual(orders, orders1);

    const endTime = performance.now();

    // Print results or do any further processing
    console.log('Lodash Result:', result);
    console.log("Lodash using performance.now - ", endTime - startTime + "ms");
}

function fastDeepEquals() {
    const startTime = performance.now();

    // Call your function
    let result = equal(orders, orders1);

    const endTime = performance.now();

    // Print results or do any further processing
    console.log('FastDeepEqual Result:', result);
    console.log("FastDeepEqual using performance.now - ", endTime - startTime + "ms");
}

function fastEquals() {
    const startTime = performance.now();

    // Call your function
    let result = deepEqual(orders, orders1);

    const endTime = performance.now();

    // Print results or do any further processing
    console.log('FastEquals Result:', result);
    console.log("FastEquals using performance.now - ", endTime - startTime + "ms");
}

lodashEquals();
fastDeepEquals();
fastEquals();

export const NotEqualChangeInStartingXperObject = () => { }


