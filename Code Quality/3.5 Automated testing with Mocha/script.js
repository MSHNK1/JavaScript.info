describe ("Raises x to the power n", function() {
    it("Raises 5 to the power 1", function() {
        assert.equal(pow(5, 1), 5);
    })

    it("Raises 5 to the power 2", function() {
        assert.equal(pow(5, 2), 25);
    })

    it("Raises 5 to the power 3", function() {
        assert.equal(pow(5, 3), 125);
    })
})