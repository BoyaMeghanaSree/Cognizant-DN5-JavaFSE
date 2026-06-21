BEGIN
    FOR c IN (
        SELECT c.CustomerID, l.LoanID
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID
        WHERE c.Age > 60
    )
    LOOP
        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE LoanID = c.LoanID;
    END LOOP;

    COMMIT;
END;
/
SELECT * FROM Loans;
