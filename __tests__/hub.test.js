// 'use strict';


// const { log } = require('../hub-server/hub.js');

// describe('', () => {
//     let consoleSpy = {};
//     let req = {};
//     let res = {};
//     let next = jest.fn(); // this spies on next method

//     beforeEach(() => {
//         // attach to the console & take it over
//     consoleSpy = jest.spyOn(console, 'log').mockImplementation();
//     });

//     afterEach(() => {
//         consoleSpy.mockRestore();
//     });

//     it('properly logs some output', () => {
//         log(req, res, next);
//         expect(consoleSpy).toHaveBeenCalled();
//     })
// })