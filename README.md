# Esti-Mate

Your best mate when it comes to calculating monthly payments through different lenders!

## Purpose

This is an adorable little app I made for my brother. He works in sales, and when working with lenders it's often hard to calculate the monthly payment for the sale. If you've ever worked in sales, you know that time is of the essence; no one wants to sit around and wait for the salesman to do the math. Each lender offers 5, 7, 10, 12, and 15 year loans.

### Interest Mode

This is the simple mode. With a Loan Amount and Interest Rate, this calculates the monthly payment for loans of each length. This uses the following formula:

M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]

Where `M` is the monthly payment, `P` is the Principal Loan Amount, `i` is the monthly interest rate (annual rate / 12), and `n` is the total number of payments (loan length in years \* 12)

### Lender Mode (coming soon)

This mode uses the known interest rates of 5 different lenders that his company works with. Each lender offers different interest rates depending on the credit score and loan amount.

This app will use the same formula that the lenders use, with data given by the lenders themselves or otherwise extrapolated from testing. It also displays the best lender to use for the lowest monthly payment for each loan length.

We'll need permission to use this data, which is currently pending.

## Coming soon

### Loan Outliers

Some of the lenders have outliers when it comes to offering financing, which my brother wants to know when making the sale. For example, one lender might charge a fee to my brother's company for certain loans based on the customer's credit score and loan amount. This comes out of my brother's commission, so he wants to be able to take this into account when offering discounts.

Eventually, I'd love to calculate things like this into offering the lowest monthly payment.

### Discount Calculator

There are certain discounts my brother is able to offer, based on the situation. For example, if this is the first house in the zip code to get a certain porch installed, they get a discount if they allow Before and After photos to be taken. These discounts are at my brother's discression, since again they cut into his commission. I'd love to be able to calculate "ideal discounts" for the numbers he's looking for.
