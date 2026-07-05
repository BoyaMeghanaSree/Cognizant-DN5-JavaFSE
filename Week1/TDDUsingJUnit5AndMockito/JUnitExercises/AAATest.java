package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class AAATest {

    Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup executed");
    }

    @After
    public void tearDown() {
        System.out.println("Teardown executed");
    }

    @Test
    public void testAddition() {

        int a = 5;
        int b = 4;

        int result = calculator.add(a, b);

        assertEquals(9, result);
    }
}
