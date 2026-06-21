--Procedure Creation:
  
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
AS
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';

    COMMIT;
END;
/

  
--Procedure Execution:
  
BEGIN
    ProcessMonthlyInterest;
END;
/
SELECT * FROM Accounts;
