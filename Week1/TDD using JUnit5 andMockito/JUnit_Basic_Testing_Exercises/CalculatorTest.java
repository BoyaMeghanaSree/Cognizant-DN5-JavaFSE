package com.example;

import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    Calculator c = new Calculator();

    @Test
    public void testAdd() {
        assertEquals(5, c.add(2, 3));
    }

    @Test
    public void testSubtract() {
        assertEquals(2, c.subtract(5, 3));
    }

    @Test
    public void testMultiply() {
        assertEquals(12, c.multiply(3, 4));
    }
}
