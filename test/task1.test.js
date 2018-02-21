const should = require('chai').should();

const magick = require('../task1');

describe('Function from task 1', ()=>{
    it('should return [] for []',()=>{
        const input = [];
        const expectedOutput = [];
        magick(input).should.deep.equal(expectedOutput);
    });

    it('should return [1] for [1]',()=>{
        const input = [1];
        const expectedOutput = [1];
        magick(input).should.deep.equal(expectedOutput);
    });

    it('should return [1,2] for [1,2]',()=>{
        const input = [1,2];
        const expectedOutput = [1,2];
        magick(input).should.deep.equal(expectedOutput);
    });

    it('should return list with one element for input [2,1]',()=>{
        const input = [2,1];
        magick(input).should.have.length(1);
    });

    it('should return list of length 4 for input [2,1,3,10,5,6]',()=>{
        const input = [2,1,3,10,5,6];
        magick(input).should.have.length(4);
    });

    it('should return list of length 6 for input [1, 9, 5, 13, 3, 11, 7, 15, 2, 10, 6, 14, 4, 12, 8, 16]',()=>{
        const input = [1, 9, 5, 13, 3, 11, 7, 15, 2, 10, 6, 14, 4, 12, 8, 16];
        magick(input).should.have.length(6); // not checking exact answer because there is more than one solution.
    });
});
