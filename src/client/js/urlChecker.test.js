
import {checkForUrl,} from './urlChecker';


test("It should return true", async () => {
        expect(checkForUrl).toBeDefined();
});
test("It should be a function", async () => {
        expect(typeof checkForUrl).toBe("function");
});

// describe('Test, the function "checkForUrl()" for valid url' , () => {
//     var url = "https://edition.cnn.com/2020/06/18/tennis/dylan-alcott-wheelchair-tennis-us-open-discrimination-spt-intl/index.html";
//     test('It should return true', async () => {
//         const response = validURL(url);
//         expect(response).toBeDefined();
//         expect(response).toBe(true);
//     });
// });
// describe('Test "checkForUrl()" for invalid url' , () => {
//     // I replaced 'https' with 'htpshttps' to make it invalid
//     var url = "htpshttps://edition.cnn.com/2020/06/18/tennis/dylan-alcott-wheelchair-tennis-us-open-discrimination-spt-intl/index.html";
//     test('It should return false', async () => {
//         const response = checkForUrl(url);
//         expect(response).toBeDefined();
//         expect(response).toBe(false);
//     });
// });

