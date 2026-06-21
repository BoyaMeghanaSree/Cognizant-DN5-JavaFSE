import java.util.Scanner;

public class FinancialForecast {

    public static double futureValue(double amount, double growthRate, int years) {

        if (years == 0) {
            return amount;
        }

        return futureValue(amount * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Present Value: ");
        double presentValue = sc.nextDouble();

        System.out.print("Enter Growth Rate (%): ");
        double growthRate = sc.nextDouble() / 100;

        System.out.print("Enter Number of Years: ");
        int years = sc.nextInt();

        double result = futureValue(presentValue, growthRate, years);

        System.out.printf("Future Value after %d years = %.2f%n", years, result);

        sc.close();
    }
}
