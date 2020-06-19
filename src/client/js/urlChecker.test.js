import {checkForUrl,} from './urlChecker';

test("It should return true", async () => {
        expect(checkForUrl).toBeDefined();
});
test("It should be a function", async () => {
        expect(typeof checkForUrl).toBe("function");
});
