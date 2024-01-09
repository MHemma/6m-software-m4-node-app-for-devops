// imports the module located at the relative path "./controller" and assigns it to the variable targetFn.
const targetFn = require("./controller");


describe("the print function", ()=>{

    // standard best practice
    // nsures that all mocks created by Jest (such as jest.fn()) are cleared before each test, preventing any potential interference between test cases.
    beforeEach(()=>{
        jest.clearAllMocks();
    })

    it("should respond with 'Hello world!", ()=>{
        // sets up mock request
        const mockReq = {};
        // sets up mock response with a mocked "send function"
        // jest.fn() is a Jest utility function that creates a mock function. 
        // mock send function created using "jest.fn()"
        const mockRes = {
            send:jest.fn()
        }

        // i.e. invoking print function from controller.js
        targetFn(mockReq, mockRes);
        // expected behaviour - always fixed data 
        expect(mockRes.send).toHaveBeenCalledWith("Hello world!"); // If you change this value, the test will fail.
    })
})