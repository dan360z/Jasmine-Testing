describe("Calculator", function() {

    beforeEach(function() {
        calc = new Calculator; //Creates a fresh instance of the object before each test
    });

    describe("Addition tests", function() { //Addition Function
        
        it("should return 42", function() {
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        it("should return 26", function() {
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        });
        it("should return an error if we don't supply a number to add", function() {
            spyOn(window, "alert");
            calc.add("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith("Error!");
            //Defensive Programming! We created an if statement in the script to ensure strings can't be passed!
        });
    });
    
    describe("Multiplication tests", function() { //Multiplication Function
        
        it("should return 16", function() {
            expect(calc.multiply(8, 2)).toBe(16);
        });
        it("should return 90", function() {
            expect(calc.multiply(10, 9)).toBe(90);
        });
        it("should return an error if we don't supply two numbers to multiply", function() {
            spyOn(window, "alert");
            calc.multiply("Hitchhikers", "Guide");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
    
    describe("Subtraction tests", function() { //Subtraction Function 
        
        it("should return 0", function() {
            expect(calc.subtract(5, 5)).toBe(0);
        });
        it("should return 56", function() {
            expect(calc.subtract(100, 44)).toBe(56);
        });
        it("should return an error if we dont supply two numbers to subtract", function() {
            spyOn(window, "alert");
            calc.subtract("hello", "world");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});
