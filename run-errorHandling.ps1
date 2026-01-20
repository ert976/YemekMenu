# PowerShell script for Jest test execution
Set-Location "c:\Users\eargu\GitHub\YemekMenu"
npx jest __tests__/errorHandling.test.ts --testNamePattern="Error Handling Verification" --verbose
Read-Host "Press Enter to continue..."
